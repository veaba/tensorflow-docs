Shuffles and repeats a Dataset returning a new permutation for each epoch. (deprecated)
### Aliases:
- tf.compat.v1.data.experimental.shuffle_and_repeat
- tf.compat.v2.data.experimental.shuffle_and_repeat

```
 tf.data.experimental.shuffle_and_repeat(
    buffer_size,
    count=None,
    seed=None
)
```
dataset.apply(tf.data.experimental.shuffle_and_repeat(buffer_size, count))
is equivalent to
dataset.shuffle(buffer_size, reshuffle_each_iteration=True).repeat(count)
The difference is that the latter dataset is not serializable. So, if you need to checkpoint an input pipeline with reshuffling you must use this implementation.
#### Args:
- buffer_size: A tf.int64 scalar tf.Tensor, representing the maximum number elements that will be buffered when prefetching.
- count: (Optional.) A tf.int64 scalar tf.Tensor, representing the number of times the dataset should be repeated. The default behavior (if count is None or -1) is for the dataset be repeated indefinitely.
- seed: (Optional.) A tf.int64 scalar tf.Tensor, representing the random seed that will be used to create the distribution. See tf.compat.v1.set_random_seed for behavior.
#### Returns:
[tf.data.Dataset.apply](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply)A Dataset transformation function, which can be passed to .

