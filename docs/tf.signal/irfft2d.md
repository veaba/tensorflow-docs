[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/signal/irfft2d) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/signal/fft_ops.py#L133-L145)  
---|---  
  
Inverse 2D real-valued fast Fourier transform.

### Aliases:

  * [`tf.compat.v1.signal.irfft2d`](/api_docs/python/tf/signal/irfft2d)
  * [`tf.compat.v1.spectral.irfft2d`](/api_docs/python/tf/signal/irfft2d)
  * [`tf.compat.v2.signal.irfft2d`](/api_docs/python/tf/signal/irfft2d)

    
    
    tf.signal.irfft2d(
        input_tensor,
        fft_length=None,
        name=None
    )
    

Computes the inverse 2-dimensional discrete Fourier transform of a real-valued
signal over the inner-most 2 dimensions of `input`.

The inner-most 2 dimensions of `input` are assumed to be the result of
`RFFT2D`: The inner-most dimension contains the `fft_length / 2 + 1` unique
components of the DFT of a real-valued signal. If `fft_length` is not
provided, it is computed from the size of the inner-most 2 dimensions of
`input`. If the FFT length used to compute `input` is odd, it should be
provided since it cannot be inferred properly.

Along each axis `IRFFT2D` is computed on, if `fft_length` (or `fft_length / 2
+ 1` for the inner-most dimension) is smaller than the corresponding dimension
of `input`, the dimension is cropped. If it is larger, the dimension is padded
with zeros.

#### Args:

  * **`input`** : A `Tensor` of type `complex64`. A complex64 tensor.
  * **`fft_length`** : A `Tensor` of type `int32`. An int32 tensor of shape [2]. The FFT length for each dimension.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of type `float32`.

