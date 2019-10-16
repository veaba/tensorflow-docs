[Short-time Fourier Transform](https://en.wikipedia.org/wiki/Short-time_Fourier_transform)Computes the inverse  of stfts.

### Aliases:
- `tf.compat.v1.signal.inverse_stft`
- `tf.compat.v2.signal.inverse_stft`

```
 tf.signal.inverse_stft(
    stfts,
    frame_length,
    frame_step,
    fft_length=None,
    window_fn=tf.signal.hann_window,
    name=None
)
```

To reconstruct an original waveform, a complimentary window function should be used in inverse_stft. Such a window function can be constructed with tf.signal.inverse_stft_window_fn.
#### Example:

```
 frame_length = 400
frame_step = 160
waveform = tf.compat.v1.placeholder(dtype=tf.float32, shape=[1000])
stft = tf.signal.stft(waveform, frame_length, frame_step)
inverse_stft = tf.signal.inverse_stft(
    stft, frame_length, frame_step,
    window_fn=tf.signal.inverse_stft_window_fn(frame_step))
```

if a custom window_fn is used in stft, it must be passed to inverse_stft_window_fn:

```
 frame_length = 400
frame_step = 160
window_fn = functools.partial(window_ops.hamming_window, periodic=True),
waveform = tf.compat.v1.placeholder(dtype=tf.float32, shape=[1000])
stft = tf.signal.stft(
    waveform, frame_length, frame_step, window_fn=window_fn)
inverse_stft = tf.signal.inverse_stft(
    stft, frame_length, frame_step,
    window_fn=tf.signal.inverse_stft_window_fn(
       frame_step, forward_window_fn=window_fn))
```

Implemented with GPU-compatible ops and supports gradients.
#### Args:
- `stfts`:` `A` ``complex64`` `[`.``.``.``,`` ``f``r``a``m``e``s``,`` ``f``f``t``_``u``n``i``q``u``e``_``b``i``n``s`]` ``Tensor`` `o`f`` `STFT` ``b``i``n``s`` ``r``e`p`r``e``s``e``n``t``i``n`g` ``a`` ``b``a``t`ch` `o`f`` ``f``f``t``_`l`e``n`g`t`h-po`i``n``t`` `STFT`s`` `wh`e``r``e`` ``f``f``t``_``u``n``i``q``u``e``_``b``i``n``s`` ``i``s`` ``f``f``t``_`l`e``n`g`t`h` `//` `2` `+` `1
- `f``r``a``m``e``_`l`e``n`g`t`h:` `A`n`` ``i``n``t``e`g`e``r`` ``s`c`a`l`a``r`` ``Tensor``.`` `Th`e`` `w`i``n`dow` `l`e``n`g`t`h` ``i``n`` ``s``a``m`pl`e``s``.`
- `f``r``a``m``e``_``s``t``e`p:` `A`n`` ``i``n``t``e`g`e``r`` ``s`c`a`l`a``r`` ``Tensor``.`` `Th`e`` ``n``u``m``b``e``r`` `o`f`` ``s``a``m`pl`e``s`` ``t`o` ``s``t``e`p`.`
- `f``f``t``_`l`e``n`g`t`h:` `A`n`` ``i``n``t``e`g`e``r`` ``s`c`a`l`a``r`` ``Tensor``.`` `Th`e`` ``s``i`z`e`` `o`f`` ``t`h`e`` `FFT` ``t`h`a``t`` `p`r`od`u`c`e`d` ``stfts``.`` `I`f`` ``n`o`t`` `p`r`ov`i`d`e`d`,`` ``u``s``e``s`` ``t`h`e`` ``s``m``a`ll`e``s``t`` `pow`e``r`` `o`f`` `2` ``e``n`clo`s``i``n`g` ``f``r``a``m``e``_`l`e``n`g`t`h`.`
- `window_fn`:` `A` `c`a``l``l``a``b``l``e`` ``t``h``a``t`` ``t``a`k`e``s`` ``a`` ``w``i``n``d``o``w`` ``l``e``n``g``t``h`` ``a``n``d`` ``a`` ``dtype`` `k`e`y`w``o``r``d`` ``a``r``g``u``m``e``n``t`` ``a``n``d`` ``r``e``t``u``r``n``s`` ``a`` `[`w``i``n``d``o``w``_``l``e``n``g``t``h`]` ``Tensor`` ``o``f`` ``s``a``m`p`l``e``s`` ``i``n`` ``t``h``e`` `p`r``o`v`i``d``e``d`` ``d``a``t``a``t`yp`e``.`` `I`f`` ``s``e``t`` ``t``o`` ``None``,`` ``n``o`` ``w``i``n``d``o``w``i``n``g`` ``i``s`` ``u``s``e``d``.`
- `n``a``m``e`:` `A`n`` ``o`p`t``i``o``n``a``l`` ``n``a``m``e`` ``f``o``r`` ``t``h``e`` ``o`p`e``r``a``t``i``o``n``.`
#### Returns:

A [..., samples] Tensor of float32 signals representing the inverse STFT for each input STFT in stfts.
#### Raises:
- `ValueError`: If `stfts` is not at least rank 2, `frame_length` is not scalar, `frame_step` is not scalar, or `fft_length` is not scalar.
