
Expands signal's axis dimension into frames of frame_length.
### Aliases:
- `tf.compat.v1.signal.frame`
- `tf.compat.v2.signal.frame`

```
 tf.signal.frame(
    signal,
    frame_length,
    frame_step,
    pad_end=False,
    pad_value=0,
    axis=-1,
    name=None
)
```

Slides a window of size frame_length over signal's axis dimension with a stride of frame_step, replacing the axis dimension with [frames, frame_length] frames.

If pad_end is True, window positions that are past the end of the axis dimension are padded with pad_value until the window moves fully past the end of the dimension. Otherwise, only window positions that fully overlap the axis dimension are produced.
#### For example:

```
 pcm = tf.compat.v1.placeholder(tf.float32, [None, 9152])
frames = tf.signal.frame(pcm, 512, 180)
magspec = tf.abs(tf.signal.rfft(frames, [512]))
image = tf.expand_dims(magspec, 3)
```
#### Args:
- `signal`:` `A` `[`.``.``.``,`` ``s``a``m``p``l``e``s``,`` ``.``.``.`]` ``Tensor``.`` `Th`e`` `r`a`nk` ``a`nd` `di`m``e`n`s`ion`s`` ``m``a`y` `b`e`` `unknown`.`` `R`a`nk` ``m`u`s`t` `b`e`` ``a`t` ``l``e``a``s`t` `1`.`
- `frame_length`:` `Th`e`` `fr`a``m``e`` ``l``e`ngth` `in` ``s``a``m``p``l``e``s``.`` `An` `int`e`g`e`r` `or` ``s`c`a``l``a`r` ``Tensor``.`
- `frame_step`:` `Th`e`` `fr`a``m``e`` `ho`p`` ``s`iz`e`` `in` ``s``a``m``p``l``e``s``.`` `An` `int`e`g`e`r` `or` ``s`c`a``l``a`r` ``Tensor``.`
- `p``a`d_`e`nd:` `Wh`e`th`e`r` `to` ``p``a`d` `th`e`` ``e`nd` `of` ``signal`` `with` ``p``a`d_v`a``l`u`e``.`
- `p``a`d_v`a``l`u`e`:` `An` `o`p`tion`a``l`` ``s`c`a``l``a`r` ``Tensor`` `to` `u`s``e`` `wh`e`r`e`` `th`e`` `in`p`ut` ``signal`` `do`e``s`` `not` ``e`xi`s`t` `wh`e`n` ``p``a`d_`e`nd` `i`s`` `Tru`e``.`
- `a`xi`s`:` `A` ``s`c`a``l``a`r` `int`e`g`e`r` ``Tensor`` `indic`a`ting` `th`e`` ``a`xi`s`` `to` `fr`a``m``e``.`` `D`e`f`a`u`l`t`s`` `to` `th`e`` ``l``a``s`t` ``a`xi`s``.`` `Su`p``p`ort`s`` `n`e`g`a`tiv`e`` `v`a``l`u`e``s`` `for` `ind`e`xing` `fro`m`` `th`e`` ``e`nd`.`
- `name`:` `An` `o`p`tion`a``l`` ``name`` `for` `th`e`` `o`p``e`r`a`tion`.`
#### Returns:

A Tensor of frames with shape [..., frames, frame_length, ...].
#### Raises:
- `ValueError`: If `frame_length`, `frame_step`, `pad_value`, or `axis` are not scalar.
