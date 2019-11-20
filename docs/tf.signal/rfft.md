[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/signal/rfft) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/signal/fft_ops.py#L114-L125)  
---|---  
  
Real-valued fast Fourier transform.

### Aliases:

  * [`tf.compat.v1.signal.rfft`](/api_docs/python/tf/signal/rfft)
  * [`tf.compat.v1.spectral.rfft`](/api_docs/python/tf/signal/rfft)
  * [`tf.compat.v2.signal.rfft`](/api_docs/python/tf/signal/rfft)

    
    
    tf.signal.rfft(
        input_tensor,
        fft_length=None,
        name=None
    )
    

Computes the 1-dimensional discrete Fourier transform of a real-valued signal
over the inner-most dimension of `input`.

Since the DFT of a real signal is Hermitian-symmetric, `RFFT` only returns the
`fft_length / 2 + 1` unique components of the FFT: the zero-frequency term,
followed by the `fft_length / 2` positive-frequency terms.

Along the axis `RFFT` is computed on, if `fft_length` is smaller than the
corresponding dimension of `input`, the dimension is cropped. If it is larger,
the dimension is padded with zeros.

#### Args:

  * **`input`** : A `Tensor` of type `float32`. A float32 tensor.
  * **`fft_length`** : A `Tensor` of type `int32`. An int32 tensor of shape [1]. The FFT length.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of type `complex64`.

