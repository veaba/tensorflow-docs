

a和b沿指定轴的张量收缩。

**别名** : [ `tf.compat.v1.linalg.tensordot` ](/api_docs/python/tf/tensordot), [ `tf.compat.v1.tensordot` ](/api_docs/python/tf/tensordot), [ `tf.compat.v2.linalg.tensordot` ](/api_docs/python/tf/tensordot), [ `tf.compat.v2.tensordot` ](/api_docs/python/tf/tensordot), [ `tf.linalg.tensordot` ](/api_docs/python/tf/tensordot)

```
 tf.tensordot(
    a,
    b,
    axes,
    name=None
)
 
```

Tensordot (also known as tensor contraction) sums the product of elementsfrom  `a`  and  `b`  over the indices specified by  `a_axes`  and  `b_axes` .The lists  `a_axes`  and  `b_axes`  specify those pairs of axes along which tocontract the tensors. The axis  `a_axes[i]`  of  `a`  must have the same dimensionas axis  `b_axes[i]`  of  `b`  for all  `i`  in  `range(0, len(a_axes))` . The lists `a_axes`  and  `b_axes`  must have identical length and consist of uniqueintegers that specify valid axes for each of the tensors.

This operation corresponds to  `numpy.tensordot(a, b, axes)` .

Example 1: When  `a`  and  `b`  are matrices (order 2), the case  `axes = 1` is equivalent to matrix multiplication.

Example 2: When  `a`  and  `b`  are matrices (order 2), the case `axes = [[1], [0]]`  is equivalent to matrix multiplication.

Example 3: Suppose that aijk and blmn represent twotensors of order 3. Then,  `contract(a, b, [[0], [2]])`  is the order 4 tensorcjklm whose entrycorresponding to the indices (j,k,l,m) is given by:

cjklm=∑iaijkblmi.

In general,  `order(c) = order(a) + order(b) - 2*len(axes[0])` .

#### 参数：
- **`a`** :  `Tensor`  of type  `float32`  or  `float64` .
- **`b`** :  `Tensor`  with the same type as  `a` .
- **`axes`** : Either a scalar  `N` , or a list or an  `int32`   `Tensor`  of shape [2, k].If axes is a scalar, sum over the last N axes of a and the first N axes ofb in order. If axes is a list or  `Tensor`  the first and second row containthe set of unique integers specifying axes along which the contraction iscomputed, for  `a`  and  `b` , respectively. The number of axes for  `a`  and `b`  must be equal.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  with the same type as  `a` .

#### 加薪：
- **`ValueError`** : If the shapes of  `a` ,  `b` , and  `axes`  are incompatible.
- **`IndexError`** : If the values in axes exceed the rank of the correspondingtensor.
