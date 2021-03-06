计算元素在张量维度上的方差。

**别名** : [ `tf.compat.v1.math.reduce_variance` ](/api_docs/python/tf/math/reduce_variance), [ `tf.compat.v2.math.reduce_variance` ](/api_docs/python/tf/math/reduce_variance)

```
 tf.math.reduce_variance(
    input_tensor,
    axis=None,
    keepdims=False,
    name=None
)
 
```

Reduces  `input_tensor`  along the dimensions given in  `axis` .Unless  `keepdims`  is true, the rank of the tensor is reduced by 1 for eachentry in  `axis` . If  `keepdims`  is true, the reduced dimensionsare retained with length 1.

If  `axis`  is None, all dimensions are reduced, and atensor with a single element is returned.

#### 例如：


```
 x = tf.constant([[1., 2.], [3., 4.]])
tf.reduce_variance(x)  # 1.25
tf.reduce_variance(x, 0)  # [1., 1.]
tf.reduce_variance(x, 1)  # [0.25,  0.25]
 
```

#### 参数：
- **`input_tensor`** : The tensor to reduce. Should have numeric type.
- **`axis`** : The dimensions to reduce. If  `None`  (the default), reduces alldimensions. Must be in the range  `[-rank(input_tensor),rank(input_tensor))` .
- **`keepdims`** : If true, retains reduced dimensions with length 1.
- **`name`** : A name scope for the associated operations (optional).


#### 返回：
The reduced tensor, of the same dtype as the input_tensor.

#### numpy兼容性
相当于np.var

Please note that  `np.var`  has a  `dtype`  parameter that could be used tospecify the output type. By default this is  `dtype=float64` . On the otherhand,  `tf.reduce_variance`  has an aggressive type inference from `input_tensor` ,

