Computes rectified linear:  `max(features, 0)` .

**Aliases** : [ `tf.compat.v1.nn.relu` ](/api_docs/python/tf/nn/relu), [ `tf.compat.v2.nn.relu` ](/api_docs/python/tf/nn/relu)

```
 tf.nn.relu(
    features,
    name=None
)
 
```

### Used in the guide:
- [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)
- [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)


### Used in the tutorials:
- [Custom layers](https://tensorflow.google.cn/tutorials/customization/custom_layers)
- [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)


#### Args:
- **`features`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` ,  `int32` ,  `uint8` ,  `int16` ,  `int8` ,  `int64` ,  `bfloat16` ,  `uint16` ,  `half` ,  `uint32` ,  `uint64` ,  `qint8` .
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor` . Has the same type as  `features` .

