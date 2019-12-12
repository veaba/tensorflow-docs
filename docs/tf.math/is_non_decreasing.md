Returns  `True`  if  `x`  is non-decreasing.

**别名** : [ `tf.compat.v1.debugging.is_non_decreasing` ](/api_docs/python/tf/math/is_non_decreasing), [ `tf.compat.v1.is_non_decreasing` ](/api_docs/python/tf/math/is_non_decreasing), [ `tf.compat.v1.math.is_non_decreasing` ](/api_docs/python/tf/math/is_non_decreasing), [ `tf.compat.v2.math.is_non_decreasing` ](/api_docs/python/tf/math/is_non_decreasing)

```
 tf.math.is_non_decreasing(
    x,
    name=None
)
 
```

Elements of  `x`  are compared in row-major order.  The tensor  `[x[0],...]` is non-decreasing if for every adjacent pair we have  `x[i] <= x[i+1]` .If  `x`  has less than two elements, it is trivially non-decreasing.

See also:   `is_strictly_increasing` 

#### 参数：
- **`x`** : Numeric  `Tensor` .
- **`name`** : A name for this operation (optional).  Defaults to "is_non_decreasing"


#### 返回：
Boolean  `Tensor` , equal to  `True`  iff  `x`  is non-decreasing.

#### 加薪：
- **`TypeError`** : if  `x`  is not a numeric tensor.
