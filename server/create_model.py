import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

data = pd.read_json("server/data.json")

class Model:
    def __init__(self, test_size=0.2, start=0, end=len(data)):
        x = np.array([ int((data.loc[i]["rowDateRaw"] - 1676246400) / 86400) for i in range(start, end) ])
        y = np.array([ data.loc[i]["last_close"] for i in range(start, end) ])    
        xtrain, xtest, ytrain, ytest = train_test_split(x, y, test_size = test_size)
        xtrain = xtrain.reshape(-1,1)
        xtest = xtest.reshape(-1,1)
        model = LinearRegression().fit(xtrain, ytrain)
        coef = np.around(model.coef_, 2)
        intercept = round(float(model.intercept_), 2)
        r_squared = round(model.score(xtrain, ytrain), 2)
        predict = model.predict(xtest)
        predict = np.around(predict, 2)

        self.x = x
        self.y = y
        self.xtrain = xtrain
        self.xtest = xtest
        self.ytrain = ytrain
        self.ytest = ytest
        self.model = model
        self.coef = coef
        self.intercept = intercept
        self.r_squared = r_squared
        self.predict = predict

    def __str__(self):
        return f"""
            Model's Linear Equation: y={self.coef[0]}x + {self.intercept}
            R Squared Value: {self.r_squared}
        """
    
    def get_coef(self):
        return self.coef[0]
    
    def get_r_squared(self):
        return self.r_squared
    
    def test(self):
        for index in range(len(self.xtest)):
            actual = self.ytest[index]
            predicted_y = self.predict[index]
            x_coord = self.xtest[index][0]
            print("x value:", x_coord, "Predicted y value:", predicted_y, "Actual y value:", actual)
    
    def graph(self):
        plt.figure(figsize=(5,4))
        plt.scatter(self.xtrain, self.ytrain, c="purple", label="Training Data")
        plt.scatter(self.xtest, self.ytest, c="blue", label="Testing Data")
        plt.scatter(self.xtest, self.predict, c="red", label="Predictions")
        plt.xlabel("Day")
        plt.ylabel("Last Close")
        plt.title("Last Close by Day")
        plt.plot(self.x, self.coef*self.x + self.intercept, c="r", label="Line of Best Fit")
        plt.legend()
        plt.show()

    @staticmethod
    def generate(number_of_models, test_size=0.2):
        models = []
        increment = int(len(data) / number_of_models)
        for i in range(number_of_models):
            start = increment * i
            end = start + increment
            models.append(Model(test_size=test_size, start=start, end=end))
        return models
    
    @staticmethod
    def analyze(percent_of_year, time_period):
        start = len(data) - int(len(data) * percent_of_year)
        model = Model(start=start)
        print(model)
        model.graph()
        trend = "an upward" if model.get_coef() > 0 else "a downward"
        confidence = int(model.get_r_squared() * 10000) / 100
        return f"Based on our predictions from data in the past {time_period}, there has been {trend} trend with a slope of around {model.get_coef()} and a confidence level of {confidence} percent."


