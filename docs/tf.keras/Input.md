 `Input()`  is used to instantiate a Keras tensor.

**别名** : [ `tf.compat.v1.keras.Input` ](/api_docs/python/tf/keras/Input), [ `tf.compat.v1.keras.layers.Input` ](/api_docs/python/tf/keras/Input), [ `tf.compat.v2.keras.Input` ](/api_docs/python/tf/keras/Input), [ `tf.compat.v2.keras.layers.Input` ](/api_docs/python/tf/keras/Input), [ `tf.keras.layers.Input` ](/api_docs/python/tf/keras/Input)

```
 tf.keras.Input(
    shape=None,
    batch_size=None,
    name=None,
    dtype=None,
    sparse=False,
    tensor=None,
    ragged=False,
    **kwargs
)
 
```

### 在指南中使用：
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)
- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)
- [Recurrent Neural Networks (RNN) with Keras](https://tensorflow.google.cn/guide/keras/rnn)
- [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)
- [Use a GPU](https://tensorflow.google.cn/guide/gpu)


### 在教程中使用：
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
- [Image segmentation](https://tensorflow.google.cn/tutorials/images/segmentation)
- [Load a pandas.DataFrame](https://tensorflow.google.cn/tutorials/load_data/pandas_dataframe)
A Keras tensor is a tensor object from the underlying backend(Theano or TensorFlow), which we augment with certainattributes that allow us to build a Keras modeljust by knowing the inputs and outputs of the model.

For instance, if a, b and c are Keras tensors,it becomes possible to do: `model = Model(input=[a, b], output=c)` 

The added Keras attribute is:     `_keras_history` : Last layer applied to the tensor.        the entire layer graph is retrievable from that layer,        recursively.

#### 参数：
- **`shape`** : A shape tuple (integers), not including the batch size.For instance,  `shape=(32,)`  indicates that the expected inputwill be batches of 32-dimensional vectors. Elements of this tuplecan be None; 'None' elements represent dimensions where the shape isnot known.
- **`batch_size`** : optional static batch size (integer).
- **`name`** : An optional name string for the layer.Should be unique in a model (do not reuse the same name twice).It will be autogenerated if it isn't provided.
- **`dtype`** : The data type expected by the input, as a string( `float32` ,  `float64` ,  `int32` ...)
- **`sparse`** : A boolean specifying whether the placeholder to be created issparse. Only one of 'ragged' and 'sparse' can be True.
- **`tensor`** : Optional existing tensor to wrap into the  `Input`  layer.If set, the layer will not create a placeholder tensor.
- **`ragged`** : A boolean specifying whether the placeholder to be created isragged. Only one of 'ragged' and 'sparse' can be True. In this case,values of 'None' in the 'shape' argument represent ragged dimensions.For more information about RaggedTensors, seehttps://www.tensorflow.org/guide/ragged_tensors.
- **`**kwargs`** : deprecated arguments support.


#### 返回：
A  `tensor` .

#### 示例：


```
 # this is a logistic regression in Keras
x = Input(shape=(32,))
y = Dense(16, activation='softmax')(x)
model = Model(x, y)
 
```

Note that even if eager execution is enabled, `Input`  produces a symbolic tensor (i.e. a placeholder).This symbolic tensor can be used with otherTensorFlow ops, as such:

```
 x = Input(shape=(32,))
y = tf.square(x)
 
```

#### 加薪：
- **`ValueError`** : in case of invalid arguments.
