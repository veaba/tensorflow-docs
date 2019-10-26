Expands signal's axis dimension into frames of frame_length.
### Aliases:
- tf.compat.v1.signal.frame
- tf.compat.v2.signal.frame

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
- signal: A [..., samples, ...] Tensor. The rank and dimensions may be unknown. Rank must be at least 1.
- frame_length: The frame length in samples. An integer or scalar Tensor.
- frame_step: The frame hop size in samples. An integer or scalar Tensor.
- pad_end: Whether to pad the end of signal with pad_value.
- pad_value: An optional scalar Tensor to use where the input signal does not exist when pad_end is True.
- axis: A scalar integer Tensor indicating the axis to frame. Defaults to the last axis. Supports negative values for indexing from the end.
- name: An optional name for the operation.
#### Returns:
A Tensor of frames with shape [..., frames, frame_length, ...].
#### Raises:
- ValueError: If frame_length, frame_step, pad_value, or axis are not scalar.
