[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/clip_by_value) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/clip_ops.py#L36-L93)  
  
  
Clips tensor values to a specified min and max.

### Aliases:

  * [`tf.compat.v1.clip_by_value`](/api_docs/python/tf/clip_by_value)
  * [`tf.compat.v2.clip_by_value`](/api_docs/python/tf/clip_by_value)

    
    
    tf.clip_by_value(
        t,
        clip_value_min,
        clip_value_max,
        name=None
    )
    

### Used in the tutorials:

  * [DeepDream](https://tensorflow.google.cn/tutorials/generative/deepdream)
  * [Adversarial example using FGSM](https://tensorflow.google.cn/tutorials/generative/adversarial_fgsm)
  * [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)

Given a tensor `t`, this operation returns a tensor of the same type and shape
as `t` with its values clipped to `clip_value_min` and `clip_value_max`. Any
values less than `clip_value_min` are set to `clip_value_min`. Any values
greater than `clip_value_max` are set to `clip_value_max`.

**Note:** `clip_value_min` needs to be smaller or equal to `clip_value_max`
for correct results.

#### For example:

    
    
    A = tf.constant([[1, 20, 13], [3, 21, 13]])
    B = tf.clip_by_value(A, clip_value_min=0, clip_value_max=3) # [[1, 3, 3],[3, 3, 3]]
    C = tf.clip_by_value(A, clip_value_min=0., clip_value_max=3.) # throws `TypeError`
    as input and clip_values are of different dtype
    

#### Args:

  * **`t`** : A `Tensor` or `IndexedSlices`.
  * **`clip_value_min`** : A 0-D (scalar) `Tensor`, or a `Tensor` with the same shape as `t`. The minimum value to clip by.
  * **`clip_value_max`** : A 0-D (scalar) `Tensor`, or a `Tensor` with the same shape as `t`. The maximum value to clip by.
  * **`name`** : A name for the operation (optional).

#### Returns:

A clipped `Tensor` or `IndexedSlices`.

#### Raises:

  * **`ValueError`** : If the clip tensors would trigger array broadcasting that would make the returned tensor larger than the input.
  * **`TypeError`** : If dtype of the input is `int32` and dtype of the `clip_value_min' or`clip_value_max`is`float32`

