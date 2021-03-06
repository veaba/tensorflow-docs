Real-valued fast Fourier transform.

**别名** : [ `tf.compat.v1.signal.rfft` ](/api_docs/python/tf/signal/rfft), [ `tf.compat.v1.spectral.rfft` ](/api_docs/python/tf/signal/rfft), [ `tf.compat.v2.signal.rfft` ](/api_docs/python/tf/signal/rfft)

```
 tf.signal.rfft(
    input_tensor,
    fft_length=None,
    name=None
)
 
```

Computes the 1-dimensional discrete Fourier transform of a real-valued signalover the inner-most dimension of  `input` .

Since the DFT of a real signal is Hermitian-symmetric,  `RFFT`  only returns the `fft_length / 2 + 1`  unique components of the FFT: the zero-frequency term,followed by the  `fft_length / 2`  positive-frequency terms.

Along the axis  `RFFT`  is computed on, if  `fft_length`  is smaller than thecorresponding dimension of  `input` , the dimension is cropped. If it is larger,the dimension is padded with zeros.

#### 参数：
- **`input`** : A  `Tensor`  of type  `float32` . A float32 tensor.
- **`fft_length`** : A  `Tensor`  of type  `int32` .An int32 tensor of shape [1]. The FFT length.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `complex64` .

