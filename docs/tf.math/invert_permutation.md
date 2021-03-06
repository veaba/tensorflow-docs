计算张量的逆置换。

**别名** : [ `tf.compat.v1.invert_permutation` ](/api_docs/python/tf/math/invert_permutation), [ `tf.compat.v1.math.invert_permutation` ](/api_docs/python/tf/math/invert_permutation), [ `tf.compat.v2.math.invert_permutation` ](/api_docs/python/tf/math/invert_permutation)

```
 tf.math.invert_permutation(
    x,
    name=None
)
 
```

This operation computes the inverse of an index permutation. It takes a 1-Dinteger tensor  `x` , which represents the indices of a zero-based array, andswaps each value with its index position. In other words, for an output tensor `y`  and an input tensor  `x` , this operation computes the following:

 `y[x[i]] = i for i in [0, 1, ..., len(x) - 1]` 

The values must include 0. There can be no duplicate values or negative values.

#### 例如：


```
 # tensor `x` is [3, 4, 0, 2, 1]
invert_permutation(x) ==> [2, 4, 3, 0, 1]
 
```

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` . 1-D.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

