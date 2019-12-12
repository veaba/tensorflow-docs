Returns  `True`  if  `x`  is strictly increasing.

**别名** : [ `tf.compat.v1.debugging.is_strictly_increasing` ](/api_docs/python/tf/math/is_strictly_increasing), [ `tf.compat.v1.is_strictly_increasing` ](/api_docs/python/tf/math/is_strictly_increasing), [ `tf.compat.v1.math.is_strictly_increasing` ](/api_docs/python/tf/math/is_strictly_increasing), [ `tf.compat.v2.math.is_strictly_increasing` ](/api_docs/python/tf/math/is_strictly_increasing)

```
 tf.math.is_strictly_increasing(
    x,
    name=None
)
 
```

Elements of  `x`  are compared in row-major order.  The tensor  `[x[0],...]` is strictly increasing if for every adjacent pair we have  `x[i] < x[i+1]` .If  `x`  has less than two elements, it is trivially strictly increasing.

See also:   `is_non_decreasing` 

#### 参数：
- **`x`** : Numeric  `Tensor` .
- **`name`** : A name for this operation (optional).Defaults to "is_strictly_increasing"


#### 返回：
Boolean  `Tensor` , equal to  `True`  iff  `x`  is strictly increasing.

#### 加薪：
- **`TypeError`** : if  `x`  is not a numeric tensor.
