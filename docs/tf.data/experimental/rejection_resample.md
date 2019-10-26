A transformation that resamples a dataset to achieve a target distribution.
### Aliases:
- tf.compat.v1.data.experimental.rejection_resample
- tf.compat.v2.data.experimental.rejection_resample

```
 tf.data.experimental.rejection_resample(
    class_func,
    target_dist,
    initial_dist=None,
    seed=None
)
```
### Used in the guide:
- tf.data: Build TensorFlow input pipelines
NOTE Resampling is performed via rejection sampling; some fraction of the input values will be dropped.
#### Args:
- class_func: A function mapping an element of the input dataset to a scalar tf.int32 tensor. Values should be in [0, num_classes).
- target_dist: A floating point type tensor, shaped [num_classes].
- initial_dist: (Optional.) A floating point type tensor, shaped [num_classes]. If not provided, the true class distribution is estimated live in a streaming fashion.
- seed: (Optional.) Python integer seed for the resampler.
#### Returns:
[tf.data.Dataset.apply](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply)A Dataset transformation function, which can be passed to .

