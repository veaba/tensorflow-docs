Computes the 1D [Inverse Discrete Cosine Transform (DCT)](https://en.wikipedia.org/wiki/Discrete_cosine_transform#Inverse_transforms) of  `input` .

**别名** : [ `tf.compat.v1.signal.idct` ](/api_docs/python/tf/signal/idct), [ `tf.compat.v1.spectral.idct` ](/api_docs/python/tf/signal/idct), [ `tf.compat.v2.signal.idct` ](/api_docs/python/tf/signal/idct)

```
 tf.signal.idct(
    input,
    type=2,
    n=None,
    axis=-1,
    norm=None,
    name=None
)
 
```

Currently only Types I, II and III are supported. Type III is the inverse ofType II, and vice versa.

Note that you must re-normalize by 1/(2n) to obtain an inverse if  `norm`  isnot  `'ortho'` . That is: `signal == idct(dct(signal)) * 0.5 / signal.shape[-1]` .When  `norm='ortho'` , we have: `signal == idct(dct(signal, norm='ortho'), norm='ortho')` .

#### 参数：
- **`input`** : A  `[..., samples]`   `float32`   `Tensor`  containing the signals to takethe DCT of.
- **`type`** : The IDCT type to perform. Must be 1, 2 or 3.
- **`n`** : For future expansion. The length of the transform. Must be  `None` .
- **`axis`** : For future expansion. The axis to compute the DCT along. Must be  `-1` .
- **`norm`** : The normalization to apply.  `None`  for no normalization or  `'ortho'` for orthonormal normalization.
- **`name`** : An optional name for the operation.


#### 返回：
A  `[..., samples]`   `float32`   `Tensor`  containing the IDCT of  `input` .

#### 加薪：
- **`ValueError`** : If  `type`  is not  `1` ,  `2`  or  `3` ,  `n`  is not  `None,` axis `isnot` -1 `, or` norm `is not` None `or` 'ortho'`.


#### scipy兼容性
Equivalent to [scipy.fftpack.idct](https://docs.scipy.org/doc/scipy-0.14.0/reference/generated/scipy.fftpack.idct.html) for Type-I, Type-II and Type-III DCT.

