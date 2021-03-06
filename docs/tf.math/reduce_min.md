计算张量维度上元素的最小值。

**别名** : [ `tf.compat.v2.math.reduce_min` ](/api_docs/python/tf/math/reduce_min), [ `tf.compat.v2.reduce_min` ](/api_docs/python/tf/math/reduce_min), [ `tf.reduce_min` ](/api_docs/python/tf/math/reduce_min)

```
 tf.math.reduce_min(    input_tensor,    axis=None,    keepdims=False,    name=None) 
```

Reduces  `input_tensor`  along the dimensions given in  `axis` .Unless  `keepdims`  is true, the rank of the tensor is reduced by 1 for eachentry in  `axis` . If  `keepdims`  is true, the reduced dimensionsare retained with length 1.

If  `axis`  is None, all dimensions are reduced, and atensor with a single element is returned.

#### 参数：
- **`input_tensor`** : The tensor to reduce. Should have real numeric type.
- **`axis`** : The dimensions to reduce. If  `None`  (the default), reduces alldimensions. Must be in the range  `[-rank(input_tensor),rank(input_tensor))` .
- **`keepdims`** : If true, retains reduced dimensions with length 1.
- **`name`** : A name for the operation (optional).


#### 返回：
简化张量。

#### numpy兼容性
相当于np.min

