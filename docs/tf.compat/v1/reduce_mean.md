计算元素在张量维度上的平均值。

```
 tf.compat.v1.reduce_mean(
    input_tensor,
    axis=None,
    keepdims=None,
    name=None,
    reduction_indices=None,
    keep_dims=None
)
 
```

Reduces  `input_tensor`  along the dimensions given in  `axis` .Unless  `keepdims`  is true, the rank of the tensor is reduced by 1 for eachentry in  `axis` . If  `keepdims`  is true, the reduced dimensionsare retained with length 1.

If  `axis`  is None, all dimensions are reduced, and atensor with a single element is returned.

#### 例如：


```
 x = tf.constant([[1., 1.], [2., 2.]])
tf.reduce_mean(x)  # 1.5
tf.reduce_mean(x, 0)  # [1.5, 1.5]
tf.reduce_mean(x, 1)  # [1.,  2.]
 
```

#### 参数：
- **`input_tensor`** : The tensor to reduce. Should have numeric type.
- **`axis`** : The dimensions to reduce. If  `None`  (the default), reduces alldimensions. Must be in the range  `[-rank(input_tensor),rank(input_tensor))` .
- **`keepdims`** : If true, retains reduced dimensions with length 1.
- **`name`** : A name for the operation (optional).
- **`reduction_indices`** : The old (deprecated) name for axis.
- **`keep_dims`** : Deprecated alias for  `keepdims` .


#### 返回：
简化张量。

#### numpy兼容性
相当于np.mean

Please note that  `np.mean`  has a  `dtype`  parameter that could be used tospecify the output type. By default this is  `dtype=float64` . On the otherhand, [ `tf.reduce_mean` ](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_mean) has an aggressive type inference from  `input_tensor` ,for example:

```
 x = tf.constant([1, 0, 1, 0])
tf.reduce_mean(x)  # 0
y = tf.constant([1., 0., 1., 0.])
tf.reduce_mean(y)  # 0.5
 
```

