Creates a tensor with all elements set to zero.



### Aliases:

- [ `tf.compat.v1.zeros` ](/api_docs/python/tf/zeros)

- [ `tf.compat.v2.zeros` ](/api_docs/python/tf/zeros)



```
 tf.zeros(
    shape,
    dtype=tf.dtypes.float32,
    name=None
)
 
```



### Used in the guide:

- [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)

- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)

- [Better performance with the tf.data API](https://tensorflow.google.cn/guide/data_performance)

- [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)

- [Training checkpoints](https://tensorflow.google.cn/guide/checkpoint)



### Used in the tutorials:

- [Custom layers](https://tensorflow.google.cn/tutorials/customization/custom_layers)

- [Better performance with tf.function](https://tensorflow.google.cn/tutorials/customization/performance)

- [Neural machine translation with attention](https://tensorflow.google.cn/tutorials/text/nmt_with_attention)

- [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)

This operation returns a tensor of type  `dtype`  with shape  `shape`  and
all elements set to zero.



#### For example:


```
 tf.zeros([3, 4], tf.int32)  # [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
 
```



#### Args:

- **`shape`** : A list of integers, a tuple of integers, or a 1-D  `Tensor`  of type
 `int32` .

- **`dtype`** : The type of an element in the resulting  `Tensor` .

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor`  with all elements set to zero.

