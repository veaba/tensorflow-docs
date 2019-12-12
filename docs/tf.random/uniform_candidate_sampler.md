Samples a set of classes using a uniform base distribution.

**Aliases** : [ `tf.compat.v1.nn.uniform_candidate_sampler` ](/api_docs/python/tf/random/uniform_candidate_sampler), [ `tf.compat.v1.random.uniform_candidate_sampler` ](/api_docs/python/tf/random/uniform_candidate_sampler), [ `tf.compat.v2.random.uniform_candidate_sampler` ](/api_docs/python/tf/random/uniform_candidate_sampler)

```
 tf.random.uniform_candidate_sampler(
    true_classes,
    num_true,
    num_sampled,
    unique,
    range_max,
    seed=None,
    name=None
)
 
```

This operation randomly samples a tensor of sampled classes( `sampled_candidates` ) from the range of integers  `[0, range_max)` .

The elements of  `sampled_candidates`  are drawn without replacement(if  `unique=True` ) or with replacement (if  `unique=False` ) fromthe base distribution.

The base distribution for this operation is the uniform distributionover the range of integers  `[0, range_max)` .

In addition, this operation returns tensors  `true_expected_count` and  `sampled_expected_count`  representing the number of times eachof the target classes ( `true_classes` ) and the sampledclasses ( `sampled_candidates` ) is expected to occur in an averagetensor of sampled classes.  These values correspond to  `Q(y|x)` defined in [thisdocument](http://tensorflow.google.cn/extras/candidate_sampling.pdf).If  `unique=True` , then these are post-rejection probabilities and wecompute them approximately.

#### Args:
- **`true_classes`** : A  `Tensor`  of type  `int64`  and shape  `[batch_size,num_true]` . The target classes.
- **`num_true`** : An  `int` .  The number of target classes per training example.
- **`num_sampled`** : An  `int` .  The number of classes to randomly sample. The `sampled_candidates`  return value will have shape  `[num_sampled]` . If `unique=True` ,  `num_sampled`  must be less than or equal to  `range_max` .
- **`unique`** : A  `bool` . Determines whether all sampled classes in a batch areunique.
- **`range_max`** : An  `int` . The number of possible classes.
- **`seed`** : An  `int` . An operation-specific seed. Default is 0.
- **`name`** : A name for the operation (optional).


#### Returns:
- **`sampled_candidates`** : A tensor of type  `int64`  and shape  `[num_sampled]` .  Thesampled classes, either with possible duplicates ( `unique=False` ) or allunique ( `unique=True` ). In either case,  `sampled_candidates`  isindependent of the true classes.
- **`true_expected_count`** : A tensor of type  `float` .  Same shape as `true_classes` . The expected counts under the sampling distributionof each of  `true_classes` .
- **`sampled_expected_count`** : A tensor of type  `float` . Same shape as `sampled_candidates` . The expected counts under the sampling distributionof each of  `sampled_candidates` .
