从训练期间所学的分布中抽取一组类。

**别名** : [ `tf.compat.v1.nn.learned_unigram_candidate_sampler` ](/api_docs/python/tf/random/learned_unigram_candidate_sampler), [ `tf.compat.v1.random.learned_unigram_candidate_sampler` ](/api_docs/python/tf/random/learned_unigram_candidate_sampler), [ `tf.compat.v2.nn.learned_unigram_candidate_sampler` ](/api_docs/python/tf/random/learned_unigram_candidate_sampler), [ `tf.compat.v2.random.learned_unigram_candidate_sampler` ](/api_docs/python/tf/random/learned_unigram_candidate_sampler), [ `tf.nn.learned_unigram_candidate_sampler` ](/api_docs/python/tf/random/learned_unigram_candidate_sampler)

```
 tf.random.learned_unigram_candidate_sampler(    true_classes,    num_true,    num_sampled,    unique,    range_max,    seed=None,    name=None) 
```

This operation randomly samples a tensor of sampled classes( `sampled_candidates` ) from the range of integers  `[0, range_max)` .

The elements of  `sampled_candidates`  are drawn without replacement(if  `unique=True` ) or with replacement (if  `unique=False` ) fromthe base distribution.

The base distribution for this operation is constructed on the flyduring training.  It is a unigram distribution over the targetclasses seen so far during training.  Every integer in  `[0, range_max)` begins with a weight of 1, and is incremented by 1 each time it isseen as a target class.  The base distribution is not saved to checkpoints,so it is reset when the model is reloaded.

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
