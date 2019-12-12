Computes and returns the sampled softmax training loss.

```
 tf.compat.v1.nn.sampled_softmax_loss(
    weights,
    biases,
    labels,
    inputs,
    num_sampled,
    num_classes,
    num_true=1,
    sampled_values=None,
    remove_accidental_hits=True,
    partition_strategy='mod',
    name='sampled_softmax_loss',
    seed=None
)
 
```

This is a faster way to train a softmax classifier over a huge number ofclasses.

This operation is for training only.  It is generally an underestimate ofthe full softmax loss.

A common use case is to use this method for training, and calculate the fullsoftmax loss for evaluation or inference. In this case, you must set `partition_strategy="div"`  for the two losses to be consistent, as in thefollowing example:

```
 if)
elif mode == "eval":
  logits = tf.matmul(inputs, tf.transpose(weights))
  logits = tf.nn.bias_add(logits, biases)
  labels_one_hot = tf.one_hot(labels, n_classes)
  loss = tf.nn.softmax_cross_entropy_with_logits(
      labels=labels_one_hot,
      logits=logits)
 
```

See our [Candidate Sampling Algorithms Reference](https://tensorflow.google.cn/extras/candidate_sampling.pdf)

Also see Section 3 of [Jean et al., 2014](http://arxiv.org/abs/1412.2007)([pdf](http://arxiv.org/pdf/1412.2007.pdf)) for the math.

#### Args:
- **`weights`** : A  `Tensor`  of shape  `[num_classes, dim]` , or a list of  `Tensor` objects whose concatenation along dimension 0 has shape[num_classes, dim].  The (possibly-sharded) class embeddings.
- **`biases`** : A  `Tensor`  of shape  `[num_classes]` .  The class biases.
- **`labels`** : A  `Tensor`  of type  `int64`  and shape  `[batch_size,num_true]` . The target classes.  Note that this format differs fromthe  `labels`  argument of [ `nn.softmax_cross_entropy_with_logits` ](/api_docs/python/tf/nn/softmax_cross_entropy_with_logits).
- **`inputs`** : A  `Tensor`  of shape  `[batch_size, dim]` .  The forwardactivations of the input network.
- **`num_sampled`** : An  `int` .  The number of classes to randomly sample per batch.
- **`num_classes`** : An  `int` . The number of possible classes.
- **`num_true`** : An  `int` .  The number of target classes per training example.
- **`sampled_values`** : a tuple of ( `sampled_candidates` ,  `true_expected_count` , `sampled_expected_count` ) returned by a  `*_candidate_sampler`  function.(if None, we default to  `log_uniform_candidate_sampler` )
- **`remove_accidental_hits`** :  A  `bool` .  whether to remove "accidental hits"where a sampled class equals one of the target classes.  Default isTrue.
- **`partition_strategy`** : A string specifying the partitioning strategy, relevantif  `len(weights) > 1` . Currently  `"div"`  and  `"mod"`  are supported.Default is  `"mod"` . See  `tf.nn.embedding_lookup`  for more details.
- **`name`** : A name for the operation (optional).
- **`seed`** : random seed for candidate sampling. Default to None, which doesn't setthe op-level random seed for candidate sampling.


#### Returns:
A  `batch_size`  1-D tensor of per-example sampled softmax losses.

