计算张量维度上元素的“逻辑或”。

**别名** : [ `tf.compat.v2.math.reduce_any` ](/api_docs/python/tf/math/reduce_any), [ `tf.compat.v2.reduce_any` ](/api_docs/python/tf/math/reduce_any), [ `tf.reduce_any` ](/api_docs/python/tf/math/reduce_any)

```
 tf.math.reduce_any(    input_tensor,    axis=None,    keepdims=False,    name=None) 
```

Reduces  `input_tensor`  along the dimensions given in  `axis` .Unless  `keepdims`  is true, the rank of the tensor is reduced by 1 for eachentry in  `axis` . If  `keepdims`  is true, the reduced dimensionsare retained with length 1.

If  `axis`  is None, all dimensions are reduced, and atensor with a single element is returned.

#### 例如：


```
 x = tf.constant([[True,  True], [False, False]])tf.reduce_any(x)  # Truetf.reduce_any(x, 0)  # [True, True]tf.reduce_any(x, 1)  # [True, False] 
```

#### 参数：
- **`input_tensor`** : The boolean tensor to reduce.
- **`axis`** : The dimensions to reduce. If  `None`  (the default), reduces alldimensions. Must be in the range  `[-rank(input_tensor),rank(input_tensor))` .
- **`keepdims`** : If true, retains reduced dimensions with length 1.
- **`name`** : A name for the operation (optional).


#### 返回：
简化张量。

#### numpy兼容性
相当于np.any

