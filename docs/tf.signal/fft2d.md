[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/signal/fft2d)  
---  
  
Defined in generated file: `python/ops/gen_spectral_ops.py`

2D fast Fourier transform.

### Aliases:

  * [`tf.compat.v1.fft2d`](/api_docs/python/tf/signal/fft2d)
  * [`tf.compat.v1.signal.fft2d`](/api_docs/python/tf/signal/fft2d)
  * [`tf.compat.v1.spectral.fft2d`](/api_docs/python/tf/signal/fft2d)
  * [`tf.compat.v2.signal.fft2d`](/api_docs/python/tf/signal/fft2d)

    
    
    tf.signal.fft2d(
        input,
        name=None
    )
    

Computes the 2-dimensional discrete Fourier transform over the inner-most 2
dimensions of `input`.

#### Args:

  * **`input`** : A `Tensor`. Must be one of the following types: `complex64`, `complex128`. A complex tensor.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor`. Has the same type as `input`.

