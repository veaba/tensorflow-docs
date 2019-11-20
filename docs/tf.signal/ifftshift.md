[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/signal/ifftshift) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/signal/fft_ops.py#L370-L408)  
---|---  
  
The inverse of fftshift.

### Aliases:

  * [`tf.compat.v1.signal.ifftshift`](/api_docs/python/tf/signal/ifftshift)
  * [`tf.compat.v2.signal.ifftshift`](/api_docs/python/tf/signal/ifftshift)

    
    
    tf.signal.ifftshift(
        x,
        axes=None,
        name=None
    )
    

Although identical for even-length x, the functions differ by one sample for
odd-length x.

#### For example:

    
    
    x = tf.signal.ifftshift([[ 0.,  1.,  2.],[ 3.,  4., -4.],[-3., -2., -1.]])
    x.numpy() # array([[ 4., -4.,  3.],[-2., -1., -3.],[ 1.,  2.,  0.]])
    

#### Args:

  * **`x`** : `Tensor`, input tensor.
  * **`axes`** : `int` or shape `tuple` Axes over which to calculate. Defaults to None, which shifts all axes.
  * **`name`** : An optional name for the operation.

#### Returns:

A `Tensor`, The shifted tensor.

#### Numpy Compatibility

Equivalent to numpy.fft.ifftshift.
https://docs.scipy.org/doc/numpy/reference/generated/numpy.fft.ifftshift.html

