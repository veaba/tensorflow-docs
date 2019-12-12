Clone any  `Model`  instance.

**别名** : [ `tf.compat.v1.keras.models.clone_model` ](/api_docs/python/tf/keras/models/clone_model), [ `tf.compat.v2.keras.models.clone_model` ](/api_docs/python/tf/keras/models/clone_model)

```
 tf.keras.models.clone_model(
    model,
    input_tensors=None,
    clone_function=None
)
 
```

Model cloning is similar to calling a model on new inputs,except that it creates new layers (and thus new weights) insteadof sharing the weights of the existing layers.

#### 参数：
- **`model`** : Instance of  `Model` (could be a functional model or a Sequential model).
- **`input_tensors`** : optional list of input tensors or InputLayer objectsto build the model upon. If not provided,placeholders will be created.
- **`clone_function`** : Callable to be used to clone each layer in the targetmodel (except  `InputLayer`  instances). It takes as argument the layerinstance to be cloned, and returns the corresponding layer instance tobe used in the model copy. If unspecified, this callable defaults tothe following serialization/deserialization function: `lambda layer: layer.__class__.from_config(layer.get_config())` .By passing a custom callable, you can customize your copy of themodel, e.g. by wrapping certain layers of interest (you might want toreplace all  `LSTM`  instances with equivalent `Bidirectional(LSTM(...))`  instances, for example).


#### 返回：
An instance of  `Model`  reproducing the behaviorof the original model, on top of new inputs tensors,using newly instantiated weights. The cloned model might behavedifferently from the original model if a custom clone_functionmodifies the layer.

#### 加薪：
- **`ValueError`** : in case of invalid  `model`  argument value.
