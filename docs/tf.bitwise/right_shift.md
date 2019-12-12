Elementwise computes the bitwise right-shift of  `x`  and  `y` .

**别名** : [ `tf.compat.v1.bitwise.right_shift` ](/api_docs/python/tf/bitwise/right_shift), [ `tf.compat.v2.bitwise.right_shift` ](/api_docs/python/tf/bitwise/right_shift)

```
 tf.bitwise.right_shift(
    x,
    y,
    name=None
)
 
```

Performs a logical shift for unsigned integer types, and an arithmetic shiftfor signed integer types.

If  `y`  is negative, or greater than or equal to than the width of  `x`  in bitsthe result is implementation defined.

#### 示例：


```
 import tensorflow as tf
from tensorflow.python.ops import bitwise_ops
import numpy as np
dtype_list = [tf.int8, tf.int16, tf.int32, tf.int64]

for dtype in dtype_list:
  lhs = tf.constant([-1, -5, -3, -14], dtype=dtype)
  rhs = tf.constant([5, 0, 7, 11], dtype=dtype)
  
  right_shift_result = bitwise_ops.right_shift(lhs, rhs)
  
  print(right_shift_result)
  
# This will print:
# tf.Tensor([-1 -5 -1 -1], shape=(4,), dtype=int8)
# tf.Tensor([-1 -5 -1 -1], shape=(4,), dtype=int16)
# tf.Tensor([-1 -5 -1 -1], shape=(4,), dtype=int32)
# tf.Tensor([-1 -5 -1 -1], shape=(4,), dtype=int64)

lhs = np.array([-2, 64, 101, 32], dtype=np.int8)
rhs = np.array([-1, -5, -3, -14], dtype=np.int8)
bitwise_ops.right_shift(lhs, rhs)
# <tf.Tensor: id=151, shape=(4,), dtype=int8, numpy=array([ -2,  64, 101,  32], dtype=int8)>
 
```

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `int8` ,  `int16` ,  `int32` ,  `int64` ,  `uint8` ,  `uint16` ,  `uint32` ,  `uint64` .
- **`y`** : A  `Tensor` . Must have the same type as  `x` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

