创建所有元素都设置为零的张量。

**别名** : [ `tf.compat.v1.zeros` ](/api_docs/python/tf/zeros), [ `tf.compat.v2.zeros` ](/api_docs/python/tf/zeros)

```
 tf.zeros(
    shape,
    dtype=tf.dtypes.float32,
    name=None
)
 
```

### 在指南中使用：
- [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)
- [Better performance with the tf.data API](https://tensorflow.google.cn/guide/data_performance)
- [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)
- [Training checkpoints](https://tensorflow.google.cn/guide/checkpoint)


### 在教程中使用：
- [Custom layers](https://tensorflow.google.cn/tutorials/customization/custom_layers)
- [Better performance with tf.function](https://tensorflow.google.cn/tutorials/customization/performance)
- [Neural machine translation with attention](https://tensorflow.google.cn/tutorials/text/nmt_with_attention)
- [Custom training: basics](https://tensorflow.google.cn/tutorials/customization/custom_training)
- [Custom training with tf.distribute.Strategy](https://tensorflow.google.cn/tutorials/distribute/custom_training)
This operation returns a tensor of type  `dtype`  with shape  `shape`  andall elements set to zero.

#### 例如：


```
 tf.zeros([3, 4], tf.int32)  # [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
 
```

#### 参数：
- **`shape`** : A list of integers, a tuple of integers, or a 1-D  `Tensor`  of type `int32` .
- **`dtype`** : The type of an element in the resulting  `Tensor` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  with all elements set to zero.

