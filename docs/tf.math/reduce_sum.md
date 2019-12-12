计算张量维度上元素的总和。

**别名** : [ `tf.compat.v2.math.reduce_sum` ](/api_docs/python/tf/math/reduce_sum), [ `tf.compat.v2.reduce_sum` ](/api_docs/python/tf/math/reduce_sum), [ `tf.reduce_sum` ](/api_docs/python/tf/math/reduce_sum)

```
 tf.math.reduce_sum(
    input_tensor,
    axis=None,
    keepdims=False,
    name=None
)
 
```

### 在指南中使用：
- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)
- [tf.data: Build TensorFlow input pipelines](https://tensorflow.google.cn/guide/data)
- [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)
- [Distributed training with TensorFlow](https://tensorflow.google.cn/guide/distributed_training)
- [Eager execution](https://tensorflow.google.cn/guide/eager)


### 在教程中使用：
- [Automatic differentiation and gradient tape](https://tensorflow.google.cn/tutorials/customization/autodiff)
- [Better performance with tf.function](https://tensorflow.google.cn/tutorials/customization/performance)
- [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)
- [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)
- [Customization basics: tensors and operations](https://tensorflow.google.cn/tutorials/customization/basics)
Reduces  `input_tensor`  along the dimensions given in  `axis` .Unless  `keepdims`  is true, the rank of the tensor is reduced by 1 for eachentry in  `axis` . If  `keepdims`  is true, the reduced dimensionsare retained with length 1.

If  `axis`  is None, all dimensions are reduced, and atensor with a single element is returned.

#### 例如：


```
 x = tf.constant([[1, 1, 1], [1, 1, 1]])
tf.reduce_sum(x)  # 6
tf.reduce_sum(x, 0)  # [2, 2, 2]
tf.reduce_sum(x, 1)  # [3, 3]
tf.reduce_sum(x, 1, keepdims=True)  # [[3], [3]]
tf.reduce_sum(x, [0, 1])  # 6
 
```

#### 参数：
- **`input_tensor`** : The tensor to reduce. Should have numeric type.
- **`axis`** : The dimensions to reduce. If  `None`  (the default), reduces alldimensions. Must be in the range  `[-rank(input_tensor),rank(input_tensor))` .
- **`keepdims`** : If true, retains reduced dimensions with length 1.
- **`name`** : A name for the operation (optional).


#### 返回：
The reduced tensor, of the same dtype as the input_tensor.

#### numpy兼容性
Equivalent to np.sum apart the fact that numpy upcast uint8 and int32 toint64 while tensorflow returns the same dtype as the input.

