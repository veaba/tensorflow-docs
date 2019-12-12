3D real-valued fast Fourier transform.

**别名** : [ `tf.compat.v1.signal.rfft3d` ](/api_docs/python/tf/signal/rfft3d), [ `tf.compat.v1.spectral.rfft3d` ](/api_docs/python/tf/signal/rfft3d), [ `tf.compat.v2.signal.rfft3d` ](/api_docs/python/tf/signal/rfft3d)

```
 tf.signal.rfft3d(
    input_tensor,
    fft_length=None,
    name=None
)
 
```

Computes the 3-dimensional discrete Fourier transform of a real-valued signalover the inner-most 3 dimensions of  `input` .

Since the DFT of a real signal is Hermitian-symmetric,  `RFFT3D`  only returns the `fft_length / 2 + 1`  unique components of the FFT for the inner-most dimensionof  `output` : the zero-frequency term, followed by the  `fft_length / 2` positive-frequency terms.

Along each axis  `RFFT3D`  is computed on, if  `fft_length`  is smaller than thecorresponding dimension of  `input` , the dimension is cropped. If it is larger,the dimension is padded with zeros.

#### 参数：
- **`input`** : A  `Tensor`  of type  `float32` . A float32 tensor.
- **`fft_length`** : A  `Tensor`  of type  `int32` .An int32 tensor of shape [3]. The FFT length for each dimension.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `complex64` .

