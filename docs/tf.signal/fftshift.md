[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/signal/fftshift) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/signal/fft_ops.py#L329-L367)  
  
  
Shift the zero-frequency component to the center of the spectrum.

### Aliases:

  * [`tf.compat.v1.signal.fftshift`](/api_docs/python/tf/signal/fftshift)
  * [`tf.compat.v2.signal.fftshift`](/api_docs/python/tf/signal/fftshift)

    
    
    tf.signal.fftshift(
        x,
        axes=None,
        name=None
    )
    

This function swaps half-spaces for all axes listed (defaults to all). Note
that `y[0]` is the Nyquist component only if `len(x)` is even.

#### For example:

    
    
    x = tf.signal.fftshift([ 0.,  1.,  2.,  3.,  4., -5., -4., -3., -2., -1.])
    x.numpy() # array([-5., -4., -3., -2., -1.,  0.,  1.,  2.,  3.,  4.])
    

#### Args:

  * **`x`** : `Tensor`, input tensor.
  * **`axes`** : `int` or shape `tuple`, optional Axes over which to shift. Default is None, which shifts all axes.
  * **`name`** : An optional name for the operation.

#### Returns:

A `Tensor`, The shifted tensor.

#### Numpy Compatibility

Equivalent to numpy.fft.fftshift.
https://docs.scipy.org/doc/numpy/reference/generated/numpy.fft.fftshift.html

