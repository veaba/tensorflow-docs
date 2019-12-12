2D fast Fourier transform.

**别名** : [ `tf.compat.v1.fft2d` ](/api_docs/python/tf/signal/fft2d), [ `tf.compat.v1.signal.fft2d` ](/api_docs/python/tf/signal/fft2d), [ `tf.compat.v1.spectral.fft2d` ](/api_docs/python/tf/signal/fft2d), [ `tf.compat.v2.signal.fft2d` ](/api_docs/python/tf/signal/fft2d)

```
 tf.signal.fft2d(
    input,
    name=None
)
 
```

Computes the 2-dimensional discrete Fourier transform over the inner-most2 dimensions of  `input` .

#### 参数：
- **`input`** : A  `Tensor` . Must be one of the following types:  `complex64` ,  `complex128` .A complex tensor.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `input` .

