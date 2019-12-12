3D fast Fourier transform.

**别名** : [ `tf.compat.v1.fft3d` ](/api_docs/python/tf/signal/fft3d), [ `tf.compat.v1.signal.fft3d` ](/api_docs/python/tf/signal/fft3d), [ `tf.compat.v1.spectral.fft3d` ](/api_docs/python/tf/signal/fft3d), [ `tf.compat.v2.signal.fft3d` ](/api_docs/python/tf/signal/fft3d)

```
 tf.signal.fft3d(
    input,
    name=None
)
 
```

Computes the 3-dimensional discrete Fourier transform over the inner-most 3dimensions of  `input` .

#### 参数：
- **`input`** : A  `Tensor` . Must be one of the following types:  `complex64` ,  `complex128` .A complex64 tensor.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `input` .

