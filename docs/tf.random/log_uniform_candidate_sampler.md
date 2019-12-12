Samples a set of classes using a log-uniform (Zipfian) base distribution.

**别名** : [ `tf.compat.v1.nn.log_uniform_candidate_sampler` ](/api_docs/python/tf/random/log_uniform_candidate_sampler), [ `tf.compat.v1.random.log_uniform_candidate_sampler` ](/api_docs/python/tf/random/log_uniform_candidate_sampler), [ `tf.compat.v2.random.log_uniform_candidate_sampler` ](/api_docs/python/tf/random/log_uniform_candidate_sampler)

```
 tf.random.log_uniform_candidate_sampler(
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

The base distribution for this operation is an approximately log-uniformor Zipfian distribution:

 `P(class) = (log(class + 2) - log(class + 1)) / log(range_max + 1)` 

This sampler is useful when the target classes approximately follow sucha distribution - for example, if the classes represent words in a lexiconsorted in decreasing order of frequency. If your classes are not ordered bydecreasing frequency, do not use this op.

In addition, this operation returns tensors  `true_expected_count` and  `sampled_expected_count`  representing the number of times eachof the target classes ( `true_classes` ) and the sampledclasses ( `sampled_candidates` ) is expected to occur in an averagetensor of sampled classes.  These values correspond to  `Q(y|x)` defined in [thisdocument](http://tensorflow.google.cn/extras/candidate_sampling.pdf).If  `unique=True` , then these are post-rejection probabilities and wecompute them approximately.

#### 参数：
- **`true_classes`** : A  `Tensor`  of type  `int64`  and shape  `[batch_size,num_true]` . The target classes.
- **`num_true`** : An  `int` .  The number of target classes per training example.
- **`num_sampled`** : An  `int` .  The number of classes to randomly sample.
- **`unique`** : A  `bool` . Determines whether all sampled classes in a batch areunique.
- **`range_max`** : An  `int` . The number of possible classes.
- **`seed`** : An  `int` . An operation-specific seed. Default is 0.
- **`name`** : A name for the operation (optional).


#### 返回：
- **`sampled_candidates`** : A tensor of type  `int64`  and shape  `[num_sampled]` .The sampled classes.
- **`true_expected_count`** : A tensor of type  `float` .  Same shape as `true_classes` . The expected counts under the sampling distributionof each of  `true_classes` .
- **`sampled_expected_count`** : A tensor of type  `float` . Same shape as `sampled_candidates` . The expected counts under the sampling distributionof each of  `sampled_candidates` .
