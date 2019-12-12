Samples a set of classes using the provided (fixed) base distribution.

**Aliases** : [ `tf.compat.v1.nn.fixed_unigram_candidate_sampler` ](/api_docs/python/tf/random/fixed_unigram_candidate_sampler), [ `tf.compat.v1.random.fixed_unigram_candidate_sampler` ](/api_docs/python/tf/random/fixed_unigram_candidate_sampler), [ `tf.compat.v2.nn.fixed_unigram_candidate_sampler` ](/api_docs/python/tf/random/fixed_unigram_candidate_sampler), [ `tf.compat.v2.random.fixed_unigram_candidate_sampler` ](/api_docs/python/tf/random/fixed_unigram_candidate_sampler), [ `tf.nn.fixed_unigram_candidate_sampler` ](/api_docs/python/tf/random/fixed_unigram_candidate_sampler)

```
 tf.random.fixed_unigram_candidate_sampler(
    true_classes,
    num_true,
    num_sampled,
    unique,
    range_max,
    vocab_file='',
    distortion=1.0,
    num_reserved_ids=0,
    num_shards=1,
    shard=0,
    unigrams=(),
    seed=None,
    name=None
)
 
```

This operation randomly samples a tensor of sampled classes( `sampled_candidates` ) from the range of integers  `[0, range_max)` .

The elements of  `sampled_candidates`  are drawn without replacement(if  `unique=True` ) or with replacement (if  `unique=False` ) fromthe base distribution.

The base distribution is read from a file or passed in as anin-memory array. There is also an option to skew the distribution byapplying a distortion power to the weights.

In addition, this operation returns tensors  `true_expected_count` and  `sampled_expected_count`  representing the number of times eachof the target classes ( `true_classes` ) and the sampledclasses ( `sampled_candidates` ) is expected to occur in an averagetensor of sampled classes.  These values correspond to  `Q(y|x)` defined in [thisdocument](http://tensorflow.google.cn/extras/candidate_sampling.pdf).If  `unique=True` , then these are post-rejection probabilities and wecompute them approximately.

#### Args:
- **`true_classes`** : A  `Tensor`  of type  `int64`  and shape  `[batch_size,num_true]` . The target classes.
- **`num_true`** : An  `int` .  The number of target classes per training example.
- **`num_sampled`** : An  `int` .  The number of classes to randomly sample.
- **`unique`** : A  `bool` . Determines whether all sampled classes in a batch areunique.
- **`range_max`** : An  `int` . The number of possible classes.
- **`vocab_file`** : Each valid line in this file (which should have a CSV-likeformat) corresponds to a valid word ID. IDs are in sequential order,starting from num_reserved_ids. The last entry in each line is expectedto be a value corresponding to the count or relative probability. Exactlyone of  `vocab_file`  and  `unigrams`  needs to be passed to this operation.
- **`distortion`** : The distortion is used to skew the unigram probabilitydistribution.  Each weight is first raised to the distortion's powerbefore adding to the internal unigram distribution. As a result, `distortion = 1.0`  gives regular unigram sampling (as defined by the vocabfile), and  `distortion = 0.0`  gives a uniform distribution.
- **`num_reserved_ids`** : Optionally some reserved IDs can be added in the range `[0, num_reserved_ids)`  by the users. One use case is that a specialunknown word token is used as ID 0. These IDs will have a samplingprobability of 0.
- **`num_shards`** : A sampler can be used to sample from a subset of the originalrange in order to speed up the whole computation through parallelism. Thisparameter (together with  `shard` ) indicates the number of partitions thatare being used in the overall computation.
- **`shard`** : A sampler can be used to sample from a subset of the original rangein order to speed up the whole computation through parallelism. Thisparameter (together with  `num_shards` ) indicates the particular partitionnumber of the operation, when partitioning is being used.
- **`unigrams`** : A list of unigram counts or probabilities, one per ID insequential order. Exactly one of  `vocab_file`  and  `unigrams`  should bepassed to this operation.
- **`seed`** : An  `int` . An operation-specific seed. Default is 0.
- **`name`** : A name for the operation (optional).


#### Returns:
- **`sampled_candidates`** : A tensor of type  `int64`  and shape  `[num_sampled]` .The sampled classes.
- **`true_expected_count`** : A tensor of type  `float` .  Same shape as `true_classes` . The expected counts under the sampling distributionof each of  `true_classes` .
- **`sampled_expected_count`** : A tensor of type  `float` . Same shape as `sampled_candidates` . The expected counts under the sampling distributionof each of  `sampled_candidates` .
