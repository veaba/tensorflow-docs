返回复张量（或实张量）的实部。

**别名** : [ `tf.compat.v1.math.real` ](/api_docs/python/tf/math/real), [ `tf.compat.v1.real` ](/api_docs/python/tf/math/real), [ `tf.compat.v2.math.real` ](/api_docs/python/tf/math/real)

```
 tf.math.real(    input,    name=None) 
```

Given a tensor  `input` , this operation returns a tensor of type  `float`  thatis the real part of each element in  `input`  considered as a complex number.

#### 例如：


```
 x = tf.constant([-2.25 + 4.75j, 3.25 + 5.75j])tf.math.real(x)  # [-2.25, 3.25] 
```

If  `input`  is already real, it is returned unchanged.

#### 参数：
- **`input`** : A  `Tensor` . Must have numeric type.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `float32`  or  `float64` .

