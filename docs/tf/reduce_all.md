计算元素在张量维度上的“逻辑和”。

**别名** : [ `tf.compat.v2.math.reduce_all` ](/api_docs/python/tf/reduce_all), [ `tf.compat.v2.reduce_all` ](/api_docs/python/tf/reduce_all), [ `tf.math.reduce_all` ](/api_docs/python/tf/reduce_all)

```
 tf.reduce_all(
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
 x = tf.constant([[True,  True], [False, False]])
tf.reduce_all(x)  # False
tf.reduce_all(x, 0)  # [False, False]
tf.reduce_all(x, 1)  # [True, False]
 
```

#### 参数：
- **`input_tensor`** : The boolean tensor to reduce.
- **`axis`** : The dimensions to reduce. If  `None`  (the default), reduces alldimensions. Must be in the range  `[-rank(input_tensor),rank(input_tensor))` .
- **`keepdims`** : If true, retains reduced dimensions with length 1.
- **`name`** : A name for the operation (optional).


#### 返回：
简化张量。

#### numpy兼容性
相当于np.all

