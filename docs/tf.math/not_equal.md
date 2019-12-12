Returns the truth value of (x != y) element-wise.

**别名** : [ `tf.compat.v1.math.not_equal` ](/api_docs/python/tf/math/not_equal), [ `tf.compat.v1.not_equal` ](/api_docs/python/tf/math/not_equal), [ `tf.compat.v2.math.not_equal` ](/api_docs/python/tf/math/not_equal), [ `tf.compat.v2.not_equal` ](/api_docs/python/tf/math/not_equal), [ `tf.not_equal` ](/api_docs/python/tf/math/not_equal)

```
 tf.math.not_equal(    x,    y,    name=None) 
```

### 在指南中使用：
- [tf.data: Build TensorFlow input pipelines](https://tensorflow.google.cn/guide/data)
- [Masking and padding with Keras](https://tensorflow.google.cn/guide/keras/masking_and_padding)


### 在教程中使用：
- [Unicode strings](https://tensorflow.google.cn/tutorials/load_data/unicode)
**NOTE** :  `NotEqual`  supports broadcasting. More about broadcasting [here](https://docs.scipy.org/doc/numpy-1.13.0/user/basics.broadcasting.html)

#### 参数：
- **`x`** : A  `Tensor`  or  `SparseTensor`  or  `IndexedSlices` .
- **`y`** : A  `Tensor`  or  `SparseTensor`  or  `IndexedSlices` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type bool with the same size as that of x or y.

