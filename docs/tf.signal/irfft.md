Inverse real-valued fast Fourier transform.

**别名** : [ `tf.compat.v1.signal.irfft` ](/api_docs/python/tf/signal/irfft), [ `tf.compat.v1.spectral.irfft` ](/api_docs/python/tf/signal/irfft), [ `tf.compat.v2.signal.irfft` ](/api_docs/python/tf/signal/irfft)

```
 tf.signal.irfft(
    input_tensor,
    fft_length=None,
    name=None
)
 
```

Computes the inverse 1-dimensional discrete Fourier transform of a real-valuedsignal over the inner-most dimension of  `input` .

The inner-most dimension of  `input`  is assumed to be the result of  `RFFT` : the `fft_length / 2 + 1`  unique components of the DFT of a real-valued signal. If `fft_length`  is not provided, it is computed from the size of the inner-mostdimension of  `input`  ( `fft_length = 2 * (inner - 1)` ). If the FFT length used tocompute  `input`  is odd, it should be provided since it cannot be inferredproperly.

Along the axis  `IRFFT`  is computed on, if  `fft_length / 2 + 1`  is smallerthan the corresponding dimension of  `input` , the dimension is cropped. If it islarger, the dimension is padded with zeros.

#### 参数：
- **`input`** : A  `Tensor`  of type  `complex64` . A complex64 tensor.
- **`fft_length`** : A  `Tensor`  of type  `int32` .An int32 tensor of shape [1]. The FFT length.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `float32` .

