Inverse 3D fast Fourier transform.

**Aliases** : [ `tf.compat.v1.ifft3d` ](/api_docs/python/tf/signal/ifft3d), [ `tf.compat.v1.signal.ifft3d` ](/api_docs/python/tf/signal/ifft3d), [ `tf.compat.v1.spectral.ifft3d` ](/api_docs/python/tf/signal/ifft3d), [ `tf.compat.v2.signal.ifft3d` ](/api_docs/python/tf/signal/ifft3d)

```
 tf.signal.ifft3d(
    input,
    name=None
)
 
```

Computes the inverse 3-dimensional discrete Fourier transform over theinner-most 3 dimensions of  `input` .

#### Args:
- **`input`** : A  `Tensor` . Must be one of the following types:  `complex64` ,  `complex128` .A complex64 tensor.
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor` . Has the same type as  `input` .

