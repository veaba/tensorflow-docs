[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/random/all_candidate_sampler) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/candidate_sampling_ops.py#L307-L340)  
---|---  
  
Generate the set of all classes.

### Aliases:

  * [`tf.compat.v1.nn.all_candidate_sampler`](/api_docs/python/tf/random/all_candidate_sampler)
  * [`tf.compat.v1.random.all_candidate_sampler`](/api_docs/python/tf/random/all_candidate_sampler)
  * [`tf.compat.v2.nn.all_candidate_sampler`](/api_docs/python/tf/random/all_candidate_sampler)
  * [`tf.compat.v2.random.all_candidate_sampler`](/api_docs/python/tf/random/all_candidate_sampler)
  * [`tf.nn.all_candidate_sampler`](/api_docs/python/tf/random/all_candidate_sampler)

    
    
    tf.random.all_candidate_sampler(
        true_classes,
        num_true,
        num_sampled,
        unique,
        seed=None,
        name=None
    )
    

Deterministically generates and returns the set of all possible classes. For
testing purposes. There is no need to use this, since you might as well use
full softmax or full logistic regression.

#### Args:

  * **`true_classes`** : A `Tensor` of type `int64` and shape `[batch_size, num_true]`. The target classes.
  * **`num_true`** : An `int`. The number of target classes per training example.
  * **`num_sampled`** : An `int`. The number of possible classes.
  * **`unique`** : A `bool`. Ignored. unique.
  * **`seed`** : An `int`. An operation-specific seed. Default is 0.
  * **`name`** : A name for the operation (optional).

#### Returns:

  * **`sampled_candidates`** : A tensor of type `int64` and shape `[num_sampled]`. This operation deterministically returns the entire range `[0, num_sampled]`.
  * **`true_expected_count`** : A tensor of type `float`. Same shape as `true_classes`. The expected counts under the sampling distribution of each of `true_classes`. All returned values are 1.0.
  * **`sampled_expected_count`** : A tensor of type `float`. Same shape as `sampled_candidates`. The expected counts under the sampling distribution of each of `sampled_candidates`. All returned values are 1.0.

