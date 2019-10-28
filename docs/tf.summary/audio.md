Write an audio summary.
### Aliases:
- `tf.compat.v2.summary.audio`

```
 tf.summary.audio(
    name,
    data,
    sample_rate,
    step=None,
    max_outputs=3,
    encoding=None,
    description=None
)
```
#### Arguments:
- `name`: A `name` for this summary. The summary tag used for TensorBoard will be this `name` prefixed by any active `name` scopes.
- `data`: A `Tensor` represen`t`ing audio `data` wi`t`h shape `[k, t, c]`, where `k` is `t`he number of audio `c`lips, `t` is `t`he number of frames, and `c` is `t`he number of `c`hannels. Elemen`t`s should be floa`t`ing-poin`t` values in `[-1.0, 1.0]`. Any of `t`he dimensions may be s`t`a`t`i`c`ally un`k`nown (i.e., `None`).
- `sample_rate`: An `int` or rank-0 `int`32 `Tensor` that represents the sample rate, in Hz. Must be positive.
#### Returns:
True on success, or false if no summary was emitted because no default summary writer was available.
#### Raises:
