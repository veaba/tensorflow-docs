[Discrete Cosine Transform (DCT)](https://en.wikipedia.org/wiki/Discrete_cosine_transform)Computes the 1D  of input.

### Aliases:
- `tf.compat.v1.signal.dct`
- `tf.compat.v1.spectral.dct`
- `tf.compat.v2.signal.dct`

```
 tf.signal.dct(
    input,
    type=2,
    n=None,
    axis=-1,
    norm=None,
    name=None
)
```
[tf.signal.rfft](https://www.tensorflow.org/api_docs/python/tf/signal/rfft)Currently only Types I, II and III are supported. Type I is implemented using a length 2N padded . Type II is implemented using a length 2N padded , as described here: Type 2 DCT using 2N FFT padded (Makhoul). Type III is a fairly straightforward inverse of Type II (i.e. using a length 2N padded tf.signal.irfft).

#### Args:
- `input`:` `A` `[`.``.``.``,`` ``s``a``m``p``l``e``s`]` ``float32`` ``Tensor`` `cont`a`ining` `th`e`` ``s`ign`a``l``s`` `to` `t`a`k`e`` `th`e`` `DCT` `of`.`
- `type`:` `Th`e`` `DCT` ``type`` `to` ``p``e`rfor`m``.`` `Mu`s`t` `b`e`` `1`,`` `2` `or` `3`.`
- `n`:` `Th`e`` ``l``e``n`gth` `of` `th`e`` `tr`a``n``s`for`m``.`` `If` ``l``e``n`gth` `i`s`` ``l``e``s``s`` `th`a``n`` ``s``e`qu`e``n`c`e`` ``l``e``n`gth`,`` `o`n``l`y` `th`e`` `fir`s`t` ``n`` ``e``l``e``m``e``n`t`s`` `of` `th`e`` ``s``e`qu`e``n`c`e`` ``a`r`e`` `co`n``s`id`e`r`e`d` `for` `th`e`` `DCT`.`` `If` ``n`` `i`s`` `gr`e``a`t`e`r` `th`a``n`` `th`e`` ``s``e`qu`e``n`c`e`` ``l``e``n`gth`,`` `z`e`ro`s`` ``a`r`e`` ``p``a`dd`e`d` ``a``n`d` `th`e``n`` `th`e`` `DCT` `i`s`` `co`m``p`ut`e`d` ``a``s`` `u`s`u`a``l``.`
- `a`xi`s`:` `For` `futur`e`` ``e`x`p``a``n``s`io`n``.`` `Th`e`` ``a`xi`s`` `to` `co`m``p`ut`e`` `th`e`` `DCT` ``a``l`o`n`g`.`` `Mu`s`t` `b`e`` ``-1``.`
- `n`or`m`:` `Th`e`` ``n`or`m``a``l`iz`a`tio`n`` `to` ``a``p``p``l`y`.`` ``None`` `for` ``n`o` ``n`or`m``a``l`iz`a`tio`n`` `or` ``'ortho'`` `for` `ortho`n`or`m``a``l`` ``n`or`m``a``l`iz`a`tio`n``.`
- `n``a``m``e`:` `A`n`` `o`p`tio`n``a``l`` ``n``a``m``e`` `for` `th`e`` `o`p``e`r`a`tio`n``.`
#### Returns:

A [..., samples] float32 Tensor containing the DCT of input.
#### Raises:
- `ValueError`: If `type` is `n`ot `1`, `2` or `3`, `axis` is `n`ot `-1`, `n` is `n`ot `None` or greater tha`n` 0, or `n`orm is `n`ot `None` or `'ortho'`.
- `ValueError`: If `type` is `1` a`n`d `n`orm is `ortho`.
#### Scipy Compatibility
[scipy.fftpack.dct](https://docs.scipy.org/doc/scipy-0.14.0/reference/generated/scipy.fftpack.dct.html)Equivalent to  for Type-I, Type-II and Type-III DCT.

