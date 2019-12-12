与fftshift相反。

**别名** : [ `tf.compat.v1.signal.ifftshift` ](/api_docs/python/tf/signal/ifftshift), [ `tf.compat.v2.signal.ifftshift` ](/api_docs/python/tf/signal/ifftshift)

```
 tf.signal.ifftshift(
    x,
    axes=None,
    name=None
)
 
```

Although identical for even-length x,the functions differ by one sample for odd-length x.

#### 例如：


```
 x = tf.signal.ifftshift([[ 0.,  1.,  2.],[ 3.,  4., -4.],[-3., -2., -1.]])
x.numpy() # array([[ 4., -4.,  3.],[-2., -1., -3.],[ 1.,  2.,  0.]])
 
```

#### 参数：
- **`x`** :  `Tensor` , input tensor.
- **`axes`** :  `int`  or shape  `tuple`  Axes over which to calculate. Defaults to None,which shifts all axes.
- **`name`** : An optional name for the operation.


#### 返回：
A  `Tensor` , The shifted tensor.

#### numpy兼容性
Equivalent to numpy.fft.ifftshift.https://docs.scipy.org/doc/numpy/reference/generated/numpy.fft.ifftshift.html

