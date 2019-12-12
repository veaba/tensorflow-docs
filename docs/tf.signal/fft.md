Fast Fourier transform.

**Aliases** : [ `tf.compat.v1.fft` ](/api_docs/python/tf/signal/fft), [ `tf.compat.v1.signal.fft` ](/api_docs/python/tf/signal/fft), [ `tf.compat.v1.spectral.fft` ](/api_docs/python/tf/signal/fft), [ `tf.compat.v2.signal.fft` ](/api_docs/python/tf/signal/fft)

```
 tf.signal.fft(    input,    name=None) 
```

Computes the 1-dimensional discrete Fourier transform over the inner-mostdimension of  `input` .

#### Args:
- **`input`** : A  `Tensor` . Must be one of the following types:  `complex64` ,  `complex128` .A complex tensor.
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor` . Has the same type as  `input` .

