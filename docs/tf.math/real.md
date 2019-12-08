Returns the real part of a complex (or real) tensor.



### Aliases:

- [ `tf.compat.v1.math.real` ](/api_docs/python/tf/math/real)

- [ `tf.compat.v1.real` ](/api_docs/python/tf/math/real)

- [ `tf.compat.v2.math.real` ](/api_docs/python/tf/math/real)



```
 tf.math.real(
    input,
    name=None
)
 
```

Given a tensor  `input` , this operation returns a tensor of type  `float`  that
is the real part of each element in  `input`  considered as a complex number.



#### For example:


```
 x = tf.constant([-2.25 + 4.75j, 3.25 + 5.75j])
tf.math.real(x)  # [-2.25, 3.25]
 
```

If  `input`  is already real, it is returned unchanged.



#### Args:

- **`input`** : A  `Tensor` . Must have numeric type.

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor`  of type  `float32`  or  `float64` .

