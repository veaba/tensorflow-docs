逆快速傅里叶变换。

**别名** : [ `tf.compat.v1.ifft` ](/api_docs/python/tf/signal/ifft), [ `tf.compat.v1.signal.ifft` ](/api_docs/python/tf/signal/ifft), [ `tf.compat.v1.spectral.ifft` ](/api_docs/python/tf/signal/ifft), [ `tf.compat.v2.signal.ifft` ](/api_docs/python/tf/signal/ifft)

```
 tf.signal.ifft(
    input,
    name=None
)
 
```

Computes the inverse 1-dimensional discrete Fourier transform over theinner-most dimension of  `input` .

#### 参数：
- **`input`** : A  `Tensor` . Must be one of the following types:  `complex64` ,  `complex128` .A complex tensor.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `input` .

