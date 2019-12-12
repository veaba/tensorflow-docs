计算元素在张量维度上的平均值。

**别名** : [ `tf.compat.v2.math.reduce_mean` ](/api_docs/python/tf/math/reduce_mean), [ `tf.compat.v2.reduce_mean` ](/api_docs/python/tf/math/reduce_mean), [ `tf.reduce_mean` ](/api_docs/python/tf/math/reduce_mean)

```
 tf.math.reduce_mean(    input_tensor,    axis=None,    keepdims=False,    name=None) 
```

### 在指南中使用：
- [Training checkpoints](https://tensorflow.google.cn/guide/checkpoint)
- [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)
- [Ragged tensors](https://tensorflow.google.cn/guide/ragged_tensor)
- [Eager execution](https://tensorflow.google.cn/guide/eager)
- [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)


### 在教程中使用：
- [CycleGAN](https://tensorflow.google.cn/tutorials/generative/cyclegan)
- [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)
- [Custom training: basics](https://tensorflow.google.cn/tutorials/customization/custom_training)
- [Custom training with tf.distribute.Strategy](https://tensorflow.google.cn/tutorials/distribute/custom_training)
- [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)
Reduces  `input_tensor`  along the dimensions given in  `axis` .Unless  `keepdims`  is true, the rank of the tensor is reduced by 1 for eachentry in  `axis` . If  `keepdims`  is true, the reduced dimensionsare retained with length 1.

If  `axis`  is None, all dimensions are reduced, and atensor with a single element is returned.

#### 例如：


```
 x = tf.constant([[1., 1.], [2., 2.]])tf.reduce_mean(x)  # 1.5tf.reduce_mean(x, 0)  # [1.5, 1.5]tf.reduce_mean(x, 1)  # [1.,  2.] 
```

#### 参数：
- **`input_tensor`** : The tensor to reduce. Should have numeric type.
- **`axis`** : The dimensions to reduce. If  `None`  (the default), reduces alldimensions. Must be in the range  `[-rank(input_tensor),rank(input_tensor))` .
- **`keepdims`** : If true, retains reduced dimensions with length 1.
- **`name`** : A name for the operation (optional).


#### 返回：
简化张量。

#### numpy兼容性
相当于np.mean

Please note that  `np.mean`  has a  `dtype`  parameter that could be used tospecify the output type. By default this is  `dtype=float64` . On the otherhand, [ `tf.reduce_mean` ](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_mean) has an aggressive type inference from  `input_tensor` ,for example:

```
 x = tf.constant([1, 0, 1, 0])tf.reduce_mean(x)  # 0y = tf.constant([1., 0., 1., 0.])tf.reduce_mean(y)  # 0.5 
```

