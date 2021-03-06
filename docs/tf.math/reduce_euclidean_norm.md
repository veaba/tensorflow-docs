计算元素在张量维度上的欧几里德范数。

**别名** : [ `tf.compat.v1.math.reduce_euclidean_norm` ](/api_docs/python/tf/math/reduce_euclidean_norm), [ `tf.compat.v2.math.reduce_euclidean_norm` ](/api_docs/python/tf/math/reduce_euclidean_norm)

```
 tf.math.reduce_euclidean_norm(    input_tensor,    axis=None,    keepdims=False,    name=None) 
```

Reduces  `input_tensor`  along the dimensions given in  `axis` .Unless  `keepdims`  is true, the rank of the tensor is reduced by 1 for eachentry in  `axis` . If  `keepdims`  is true, the reduced dimensionsare retained with length 1.

If  `axis`  is None, all dimensions are reduced, and atensor with a single element is returned.

#### 例如：


```
 x = tf.constant([[1, 2, 3], [1, 1, 1]])
tf.reduce_euclidean_norm(x)  # sqrt(17)
tf.reduce_euclidean_norm(x, 0)  # [sqrt(2), sqrt(5), sqrt(10)]
tf.reduce_euclidean_norm(x, 1)  # [sqrt(14), sqrt(3)]
tf.reduce_euclidean_norm(x, 1, keepdims=True)  # [[sqrt(14)], [sqrt(3)]]
tf.reduce_euclidean_norm(x, [0, 1])  # sqrt(17)
 
```

#### 参数：
- **`input_tensor`** : The tensor to reduce. Should have numeric type.
- **`axis`** : The dimensions to reduce. If  `None`  (the default), reduces alldimensions. Must be in the range  `[-rank(input_tensor),rank(input_tensor))` .
- **`keepdims`** : If true, retains reduced dimensions with length 1.
- **`name`** : A name for the operation (optional).


#### 返回：
The reduced tensor, of the same dtype as the input_tensor.

