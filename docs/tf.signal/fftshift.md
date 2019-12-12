Shift the zero-frequency component to the center of the spectrum.

**别名** : [ `tf.compat.v1.signal.fftshift` ](/api_docs/python/tf/signal/fftshift), [ `tf.compat.v2.signal.fftshift` ](/api_docs/python/tf/signal/fftshift)

```
 tf.signal.fftshift(
    x,
    axes=None,
    name=None
)
 
```

This function swaps half-spaces for all axes listed (defaults to all).Note that  `y[0]`  is the Nyquist component only if  `len(x)`  is even.

#### 例如：


```
 x = tf.signal.fftshift([ 0.,  1.,  2.,  3.,  4., -5., -4., -3., -2., -1.])
x.numpy() # array([-5., -4., -3., -2., -1.,  0.,  1.,  2.,  3.,  4.])
 
```

#### 参数：
- **`x`** :  `Tensor` , input tensor.
- **`axes`** :  `int`  or shape  `tuple` , optional Axes over which to shift.  Default isNone, which shifts all axes.
- **`name`** : An optional name for the operation.


#### 返回：
A  `Tensor` , The shifted tensor.

#### numpy兼容性
Equivalent to numpy.fft.fftshift.https://docs.scipy.org/doc/numpy/reference/generated/numpy.fft.fftshift.html

