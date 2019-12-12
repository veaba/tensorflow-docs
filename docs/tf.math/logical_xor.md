逻辑异或函数。

**别名** : [ `tf.compat.v1.logical_xor` ](/api_docs/python/tf/math/logical_xor), [ `tf.compat.v1.math.logical_xor` ](/api_docs/python/tf/math/logical_xor), [ `tf.compat.v2.math.logical_xor` ](/api_docs/python/tf/math/logical_xor)

```
 tf.math.logical_xor(    x,    y,    name='LogicalXor') 
```

x ^ y = (x | y) &amp; ~(x &amp; y)

Inputs are tensor and if the tensors contains more than one element, anelement-wise logical XOR is computed.

#### 用法：


```
 x)
#  here z = [False  True  True False]
 
```

#### 参数：
- **`x`** : A  `Tensor`  type bool.
- **`y`** : A  `Tensor`  of type bool.


#### 返回：
A  `Tensor`  of type bool with the same size as that of x or y.

