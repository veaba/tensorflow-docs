Elementwise computes the bitwise OR of  `x`  and  `y` .

**别名** : [ `tf.compat.v1.bitwise.bitwise_or` ](/api_docs/python/tf/bitwise/bitwise_or), [ `tf.compat.v2.bitwise.bitwise_or` ](/api_docs/python/tf/bitwise/bitwise_or)

```
 tf.bitwise.bitwise_or(
    x,
    y,
    name=None
)
 
```

The result will have those bits set, that are set in  `x` ,  `y`  or both. Thecomputation is performed on the underlying representations of  `x`  and  `y` .

#### 例如：


```
 import tensorflow as tf
from tensorflow.python.ops import bitwise_ops
dtype_list = [tf.int8, tf.int16, tf.int32, tf.int64,
              tf.uint8, tf.uint16, tf.uint32, tf.uint64]

for dtype in dtype_list:
  lhs = tf.constant([0, 5, 3, 14], dtype=dtype)
  rhs = tf.constant([5, 0, 7, 11], dtype=dtype)
  exp = tf.constant([5, 5, 7, 15], dtype=tf.float32)

  res = bitwise_ops.bitwise_or(lhs, rhs)
  tf.assert_equal(tf.cast(res,  tf.float32), exp)  # TRUE
 
```

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `int8` ,  `int16` ,  `int32` ,  `int64` ,  `uint8` ,  `uint16` ,  `uint32` ,  `uint64` .
- **`y`** : A  `Tensor` . Must have the same type as  `x` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

