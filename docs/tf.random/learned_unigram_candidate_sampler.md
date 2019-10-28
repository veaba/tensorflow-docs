Samples a set of classes from a distribution learned during training.
### Aliases:
- `tf.compat.v1.nn.learned_unigram_candidate_sampler`
- `tf.compat.v1.random.learned_unigram_candidate_sampler`
- `tf.compat.v2.nn.learned_unigram_candidate_sampler`
- `tf.compat.v2.random.learned_unigram_candidate_sampler`
- `tf.nn.learned_unigram_candidate_sampler`

```
 tf.random.learned_unigram_candidate_sampler(
    true_classes,
    num_true,
    num_sampled,
    unique,
    range_max,
    seed=None,
    name=None
)
```
This operation randomly samples a tensor of sampled classes (`sampled_candidates`) from the range of integers `[0, range_max)`.
The elements of `sampled_candidates` are drawn without replacement (if `unique=True`) or with replacement (if `unique=False`) from the base distribution.
The base distribution for this operation is constructed on the fly during training. It is a unigram distribution over the target classes seen so far during training. Every integer in `[0, range_max)` begins with a weight of 1, and is incremented by 1 each time it is seen as a target class. The base distribution is not saved to checkpoints, so it is reset when the model is reloaded.
[this document](http://tensorflow.google.cn/extras/candidate_sampling.pdf)

#### Args:
- `true_classes`: A `Tensor` of type `int64` and shape `[batch_size, num_true]`. The target classes.
- `num_true`: An `int`. The number of target classes per training example.
- `num_sampled`: An `int`. The number of classes to randomly sample.
- `unique`: A `bool`. Determines whether all sampled classes in a batch are `unique`.
- `range_max`: An `int`. The number of possible classes.
- `seed`: An `int`. An operation-specific `seed`. Default is 0.
- `name`: A `name` for the operation (optional).
#### Returns:
- `sampled_candidates`: A tensor of type `int64` and shape `[num_sampled]`. The sampled classes.
- `true_expected_count`: A tensor of type `float`. Same shape as `true_classes`. The expected counts under the sampling distribution of each of `true_classes`.
- `sampled_expected_count`: A tensor of type `float`. Same shape as `sampled_candidates`. The expected counts under the sampling distribution of each of `sampled_candidates`.
