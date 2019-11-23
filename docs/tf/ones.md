
Creates a tensor with all elements set to 1.


### Aliases:
- [ `tf.compat.v1.ones` ](/api_docs/python/tf/ones)
- [ `tf.compat.v2.ones` ](/api_docs/python/tf/ones)


```
tf.ones(
    shape,
    dtype=tf.dtypes.float32,
    name=None
)

```



### Used in the guide:
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)
- [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)


### Used in the tutorials:
- [Better performance with tf.function](https://tensorflow.google.cn/tutorials/customization/performance)
- [Automatic differentiation and gradient tape](https://tensorflow.google.cn/tutorials/customization/autodiff)
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)

This operation returns a tensor of type  `dtype`  with shape  `shape`  and allelements set to 1.


#### For example:


```
tf.ones([2, 3], tf.int32)  # [[1, 1, 1], [1, 1, 1]]

```



#### Args:
- **`shape`** : A list of integers, a tuple of integers, or a 1-D  `Tensor`  of type `int32` .
- **`dtype`** : The type of an element in the resulting  `Tensor` .
- **`name`** : A name for the operation (optional).


#### Returns:

A  `Tensor`  with all elements set to 1.
