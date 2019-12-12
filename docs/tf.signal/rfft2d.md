2D real-valued fast Fourier transform.

**别名** : [ `tf.compat.v1.signal.rfft2d` ](/api_docs/python/tf/signal/rfft2d), [ `tf.compat.v1.spectral.rfft2d` ](/api_docs/python/tf/signal/rfft2d), [ `tf.compat.v2.signal.rfft2d` ](/api_docs/python/tf/signal/rfft2d)

```
 tf.signal.rfft2d(
    input_tensor,
    fft_length=None,
    name=None
)
 
```

Computes the 2-dimensional discrete Fourier transform of a real-valued signalover the inner-most 2 dimensions of  `input` .

Since the DFT of a real signal is Hermitian-symmetric,  `RFFT2D`  only returns the `fft_length / 2 + 1`  unique components of the FFT for the inner-most dimensionof  `output` : the zero-frequency term, followed by the  `fft_length / 2` positive-frequency terms.

Along each axis  `RFFT2D`  is computed on, if  `fft_length`  is smaller than thecorresponding dimension of  `input` , the dimension is cropped. If it is larger,the dimension is padded with zeros.

#### 参数：
- **`input`** : A  `Tensor`  of type  `float32` . A float32 tensor.
- **`fft_length`** : A  `Tensor`  of type  `int32` .An int32 tensor of shape [2]. The FFT length for each dimension.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `complex64` .

