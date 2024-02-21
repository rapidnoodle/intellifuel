from create_model import Model

# 1/24 represents the fraction of the year sampled into a Model
# The fraction will always get the most recent data
# Meaning, in this case, it will get the data from the past two weeks
# This is because there are 12 months in a year and half of a month is about two weeks
# You can also enter in a decimal format if that is what you prefer
coefficient, confidence = Model.analyze(1/24)
sentence = Model.to_sentence(coefficient, confidence, "two weeks")
print(sentence)
