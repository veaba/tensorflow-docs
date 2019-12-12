Computes rectified linear:  `max(features, 0)` .

**别名** : [ `tf.compat.v1.nn.relu` ](/api_docs/python/tf/nn/relu), [ `tf.compat.v2.nn.relu` ](/api_docs/python/tf/nn/relu)

```
 tf.nn.relu(
    features,
    name=None
)
 
```

### 在指南中使用：
- [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)
- [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)


### 在教程中使用：
- [Custom layers](https://tensorflow.google.cn/tutorials/customization/custom_layers)
- [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)


#### 参数：
- **`features`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` ,  `int32` ,  `uint8` ,  `int16` ,  `int8` ,  `int64` ,  `bfloat16` ,  `uint16` ,  `half` ,  `uint32` ,  `uint64` ,  `qint8` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `features` .

