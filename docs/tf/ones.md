创建所有元素都设置为1的张量。

**别名** : [ `tf.compat.v1.ones` ](/api_docs/python/tf/ones), [ `tf.compat.v2.ones` ](/api_docs/python/tf/ones)

```
 tf.ones(
    shape,
    dtype=tf.dtypes.float32,
    name=None
)
 
```

### 在指南中使用：
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)
- [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)
- [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)


### 在教程中使用：
- [Better performance with tf.function](https://tensorflow.google.cn/tutorials/customization/performance)
- [Automatic differentiation and gradient tape](https://tensorflow.google.cn/tutorials/customization/autodiff)
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
This operation returns a tensor of type  `dtype`  with shape  `shape`  and allelements set to 1.

#### 例如：


```
 tf.ones([2, 3], tf.int32)  # [[1, 1, 1], [1, 1, 1]]
 
```

#### 参数：
- **`shape`** : A list of integers, a tuple of integers, or a 1-D  `Tensor`  of type `int32` .
- **`dtype`** : The type of an element in the resulting  `Tensor` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  with all elements set to 1.

