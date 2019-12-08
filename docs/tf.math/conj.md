

Returns the complex conjugate of a complex number.



### Aliases:

- [ `tf.compat.v1.conj` ](/api_docs/python/tf/math/conj)

- [ `tf.compat.v1.math.conj` ](/api_docs/python/tf/math/conj)

- [ `tf.compat.v2.math.conj` ](/api_docs/python/tf/math/conj)



```
 tf.math.conj(
    x,
    name=None
)
 
```

Given a tensor  `input`  of complex numbers, this operation returns a tensor of
complex numbers that are the complex conjugate of each element in  `input` . The
complex numbers in  `input`  must be of the form a+bj, where <em>a</em> is the
real part and <em>b</em> is the imaginary part.

The complex conjugate returned by this operation is of the form a−bj.



#### For example:


# tensor 'input' is [-2.25 + 4.75j, 3.25 + 5.75j]
tf.math.conj(input) ==> [-2.25 - 4.75j, 3.25 - 5.75j]

If  `x`  is real, it is returned unchanged.



#### Args:

- **`x`** :  `Tensor`  to conjugate.  Must have numeric or variant type.

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor`  that is the conjugate of  `x`  (with the same type).



#### Raises:

- **`TypeError`** : If  `x`  is not a numeric tensor.

