[Inverse Discrete Cosine Transform (DCT)](https://en.wikipedia.org/wiki/Discrete_cosine_transform#Inverse_transforms)Computes the 1D  of input.

### Aliases:
- `tf.compat.v1.signal.idct`
- `tf.compat.v1.spectral.idct`
- `tf.compat.v2.signal.idct`

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

Currently only Types I, II and III are supported. Type III is the inverse of Type II, and vice versa.

Note that you must re-normalize by 1/(2n) to obtain an inverse if norm is not 'ortho'. That is: signal == idct(dct(signal)) * 0.5 / signal.shape[-1]. When norm='ortho', we have: signal == idct(dct(signal, norm='ortho'), norm='ortho').
#### Args:
- `input`:` `A` `[`.``.``.``,`` ``s``a``m``p``l``e``s`]` ``float32`` ``Tensor`` `cont`a`ining` `th`e`` ``s`ign`a``l``s`` `to` `t`a`k`e`` `th`e`` `DCT` `of`.`
- `type`:` `Th`e`` `IDCT` ``type`` `to` ``p``e`rfor`m``.`` `Mu`s`t` `b`e`` `1`,`` `2` `or` `3`.`
- `n`:` `For` `futur`e`` ``e`x`p``a``n``s`io`n``.`` `Th`e`` ``l``e``n`gth` `of` `th`e`` `tr`a``n``s`for`m``.`` `Mu`s`t` `b`e`` ``None``.`
- `a`xi`s`:` `For` `futur`e`` ``e`x`p``a``n``s`io`n``.`` `Th`e`` ``a`xi`s`` `to` `co`m``p`ut`e`` `th`e`` `DCT` ``a``l`o`n`g`.`` `Mu`s`t` `b`e`` ``-1``.`
- `n`or`m`:` `Th`e`` ``n`or`m``a``l`iz`a`tio`n`` `to` ``a``p``p``l`y`.`` ``None`` `for` ``n`o` ``n`or`m``a``l`iz`a`tio`n`` `or` ``'ortho'`` `for` `ortho`n`or`m``a``l`` ``n`or`m``a``l`iz`a`tio`n``.`
- `n``a``m``e`:` `A`n`` `o`p`tio`n``a``l`` ``n``a``m``e`` `for` `th`e`` `o`p``e`r`a`tio`n``.`
#### Returns:

A [..., samples] float32 Tensor containing the IDCT of input.
#### Raises:
- `ValueError`: If `type` `is not` `1`, `2` `or` `3`, `n` `is not` `None,`axis`is not`-`1``, or``n``or`m`is not`No`n`e`or`'`or`tho'`.
#### Scipy Compatibility
[scipy.fftpack.idct](https://docs.scipy.org/doc/scipy-0.14.0/reference/generated/scipy.fftpack.idct.html)Equivalent to  for Type-I, Type-II and Type-III DCT.

