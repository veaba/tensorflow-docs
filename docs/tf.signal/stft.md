[Short-time Fourier Transform](https://en.wikipedia.org/wiki/Short-time_Fourier_transform)Computes the  of signals.

### Aliases:
- `tf.compat.v1.signal.stft`
- `tf.compat.v2.signal.stft`

```
 tf.signal.stft(
    signals,
    frame_length,
    frame_step,
    fft_length=None,
    window_fn=tf.signal.hann_window,
    pad_end=False,
    name=None
)
```

Implemented with GPU-compatible ops and supports gradients.
#### Args:
- `signals`:` `A` `[`.``.``.``,`` ``s``a``m``p``l``e``s`]` ``float32`` ``Tensor`` `of` `r`e``a``l`-v`a``l`u`e`d` ``signals``.`
- `frame_length`:` `An` `int`e`g`e`r` ``s`c`a``l``a`r` ``Tensor``.`` `Th`e`` `window` ``l``e`ngth` `in` ``s``a``m``p``l``e``s``.`
- `frame_step`:` `An` `int`e`g`e`r` ``s`c`a``l``a`r` ``Tensor``.`` `Th`e`` `nu`m`b`e`r` `of` ``s``a``m``p``l``e``s`` `to` ``s`t`e``p``.`
- `fft_length`:` `An` `int`e`g`e`r` ``s`c`a``l``a`r` ``Tensor``.`` `Th`e`` ``s`iz`e`` `of` `th`e`` `FFT` `to` ``a``p``p``l`y`.`` `If` `not` ``p`rovid`e`d`,`` `u`s``e``s`` `th`e`` ``s``m``a``l``l``e``s`t` ``p`ow`e`r` `of` `2` ``e`nc`l`o`s`ing` ``frame_length``.`
- `window_fn`:` `A` `c`a``l``l``a`b`l``e`` ``t``h``a``t`` ``t``a`k`e``s`` ``a`` ``w``i``n``d``o``w`` ``l``e``n``g``t``h`` ``a``n``d`` ``a`` ``dtype`` `k`e`y`w``o`r`d`` ``a`r`g`u`m``e``n``t`` ``a``n``d`` `r`e``t`ur`n``s`` ``a`` `[`w``i``n``d``o``w``_``l``e``n``g``t``h`]` ``Tensor`` ``o`f` ``s``a``m``p``l``e``s`` ``i``n`` ``t``h``e`` ``p`r`o`v`i``d``e``d`` ``d``a``t``a``t`y`p``e``.`` `If` ``s``e``t`` ``t``o`` ``None``,`` ``n``o`` ``w``i``n``d``o``w``i``n``g`` ``i``s`` `u`s``e``d``.`
- `p``a``d``_``e``n``d`:` `W`h``e``t``h``e`r` ``t``o`` ``p``a``d`` ``t``h``e`` ``e``n``d`` ``o`f` ``signals`` ``w``i``t``h`` `z`e`r`o``s`` ``w``h``e``n`` ``t``h``e`` ``p`r`o`v`i``d``e``d`` `fr`a``m``e`` ``l``e``n``g``t``h`` ``a``n``d`` ``s``t``e``p`` ``p`r`o``d`uc`e``s`` ``a`` `fr`a``m``e`` ``t``h``a``t`` ``l``i``e``s`` ``p``a`r`t``i``a``l``l`y` ``p``a``s``t`` ``i``t``s`` ``e``n``d``.`
- `n``a``m``e`:` `A`n`` ``o``p``t``i``o``n``a``l`` ``n``a``m``e`` `f`o`r` ``t``h``e`` ``o``p``e`r`a``t``i``o``n``.`
#### Returns:

A [..., frames, fft_unique_bins] Tensor of complex64 STFT values where fft_unique_bins is fft_length // 2 + 1 (the unique components of the FFT).
#### Raises:
- `ValueError`: If `signals` is not at least rank 1, `frame_length` is not scalar, or `frame_step` is not scalar.
