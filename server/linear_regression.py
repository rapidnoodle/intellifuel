from create_model import Model

models = Model.generate(1)
print(models[0])
models[0].graph()
