import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

# Imports and formats the data
data = pd.read_json("server/data.json")
x = np.array([ data.loc[i]["rowDateRaw"] for i in range(len(data)) ])
y = np.array([ data.loc[i]["volumeRaw"] for i in range(len(data)) ])

# Split the data into training and testing data
xtrain, xtest, ytrain, ytest = train_test_split(x, y, test_size = .2)

# Use reshape to turn the x values into 2D arrays:
xtrain = xtrain.reshape(-1,1)

# Create linear regression model
model = LinearRegression().fit(xtrain, ytrain)

# Find and print the coefficients, intercept, and r squared values.
# Each should be rounded to two decimal places.
coef = np.around(model.coef_, 2)
intercept = round(float(model.intercept_), 2)
r_squared = round(model.score(xtrain, ytrain), 2)
print(f"Model's Linear Equation: y={coef[0]}x + {intercept}")
print("R Squared value:", r_squared)

'''
**********TEST THE MODEL**********
'''

# reshape the xtest data into a 2D array
xtest = xtest.reshape(-1,1)

# get the predicted y values for the xtest values - returns an array of the results
predict = model.predict(xtest)

# round the value in the np array to 2 decimal places
predict = np.around(predict, 2)

# Test the model by looping through all of the values in the xtest dataset
print("\nTesting Linear Model with Testing Data:")
for index in range(len(xtest)):
    actual = ytest[index]
    predicted_y = predict[index]
    x_coord = xtest[index][0]
    print("x value:", x_coord, "Predicted y value:", predicted_y, "Actual y value:", actual)

'''
**********CREATE A VISUAL OF THE RESULTS**********
'''

plt.figure(figsize=(5,4))
plt.scatter(xtrain,ytrain, c="purple", label="Training Data")
plt.scatter(xtest, ytest, c="blue", label="Testing Data")
plt.scatter(xtest, predict, c="red", label="Predictions")
plt.xlabel("Raw Date Value")
plt.ylabel("Volume")
plt.title("Volume by Date")
plt.plot(x, coef*x + intercept, c="r", label="Line of Best Fit")
plt.legend()
plt.show()