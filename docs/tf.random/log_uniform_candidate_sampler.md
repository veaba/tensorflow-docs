[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/random/log_uniform_candidate_sampler)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/candidate_sampling_ops.py#L89-L151)  
  
  
Samples a set of classes using a log-uniform (Zipfian) base distribution.

### Aliases:

  * [`tf.compat.v1.nn.log_uniform_candidate_sampler`](/api_docs/python/tf/random/log_uniform_candidate_sampler)
  * [`tf.compat.v1.random.log_uniform_candidate_sampler`](/api_docs/python/tf/random/log_uniform_candidate_sampler)
  * [`tf.compat.v2.random.log_uniform_candidate_sampler`](/api_docs/python/tf/random/log_uniform_candidate_sampler)

    
    
    tf.random.log_uniform_candidate_sampler(
        true_classes,
        num_true,
        num_sampled,
        unique,
        range_max,
        seed=None,
        name=None
    )
    

This operation randomly samples a tensor of sampled classes
(`sampled_candidates`) from the range of integers `[0, range_max)`.

The elements of `sampled_candidates` are drawn without replacement (if
`unique=True`) or with replacement (if `unique=False`) from the base
distribution.

The base distribution for this operation is an approximately log-uniform or
Zipfian distribution:

`P(class) = (log(class + 2) - log(class + 1)) / log(range_max + 1)`

This sampler is useful when the target classes approximately follow such a
distribution - for example, if the classes represent words in a lexicon sorted
in decreasing order of frequency. If your classes are not ordered by
decreasing frequency, do not use this op.

In addition, this operation returns tensors `true_expected_count` and
`sampled_expected_count` representing the number of times each of the target
classes (`true_classes`) and the sampled classes (`sampled_candidates`) is
expected to occur in an average tensor of sampled classes. These values
correspond to `Q(y|x)` defined in [this
document](http://tensorflow.google.cn/extras/candidate_sampling.pdf). If
`unique=True`, then these are post-rejection probabilities and we compute them
approximately.

#### Args:

  * **`true_classes`** : A `Tensor` of type `int64` and shape `[batch_size, num_true]`. The target classes.
  * **`num_true`** : An `int`. The number of target classes per training example.
  * **`num_sampled`** : An `int`. The number of classes to randomly sample.
  * **`unique`** : A `bool`. Determines whether all sampled classes in a batch are unique.
  * **`range_max`** : An `int`. The number of possible classes.
  * **`seed`** : An `int`. An operation-specific seed. Default is 0.
  * **`name`** : A name for the operation (optional).

#### Returns:

  * **`sampled_candidates`** : A tensor of type `int64` and shape `[num_sampled]`. The sampled classes.
  * **`true_expected_count`** : A tensor of type `float`. Same shape as `true_classes`. The expected counts under the sampling distribution of each of `true_classes`.
  * **`sampled_expected_count`** : A tensor of type `float`. Same shape as `sampled_candidates`. The expected counts under the sampling distribution of each of `sampled_candidates`.

