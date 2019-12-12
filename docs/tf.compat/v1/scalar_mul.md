Multiplies a scalar times a  `Tensor`  or  `IndexedSlices`  object.

```
 tf.compat.v1.scalar_mul(    scalar,    x,    name=None) 
```

Intended for use in gradient code which might deal with  `IndexedSlices` objects, which are easy to multiply by a scalar but more expensive tomultiply with arbitrary tensors.

#### 参数：
- **`scalar`** : A 0-D scalar  `Tensor` . Must have known shape.
- **`x`** : A  `Tensor`  or  `IndexedSlices`  to be scaled.
- **`name`** : A name for the operation (optional).


#### 返回：
 `scalar * x`  of the same type ( `Tensor`  or  `IndexedSlices` ) as  `x` .

#### 加薪：
- **`ValueError`** : if scalar is not a 0-D  `scalar` .
