Computes and returns the sampled softmax training loss.
### Aliases:
- tf.compat.v2.nn.sampled_softmax_loss

```
 tf.nn.sampled_softmax_loss(
    weights,
    biases,
    labels,
    inputs,
    num_sampled,
    num_classes,
    num_true=1,
    sampled_values=None,
    remove_accidental_hits=True,
    seed=None,
    name='sampled_softmax_loss'
)
```
This is a faster way to train a softmax classifier over a huge number of classes.
This operation is for training only. It is generally an underestimate of the full softmax loss.
A common use case is to use this method for training, and calculate the full sigmoid loss for evaluation or inference as in the following example:

```
 if mode == "train":
  loss = tf.nn.sampled_softmax_loss(
      weights=weights,
      biases=biases,
      labels=labels,
      inputs=inputs,
      ...)
elif mode == "eval":
  logits = tf.matmul(inputs, tf.transpose(weights))
  logits = tf.nn.bias_add(logits, biases)
  labels_one_hot = tf.one_hot(labels, n_classes)
  loss = tf.nn.softmax_cross_entropy_with_logits(
      labels=labels_one_hot,
      logits=logits)
```
[Candidate Sampling Algorithms Reference](https://tensorflow.google.cn/extras/candidate_sampling.pdf)See our 

[Jean et al., 2014](http://arxiv.org/abs/1412.2007)Also see Section 3 of  (pdf) for the math.

#### Args:
- weights: A Tensor of shape [num_classes, dim], or a list of Tensor objects whose concatenation along dimension 0 has shape [num_classes, dim]. The (possibly-sharded) class embeddings.
- biases: A Tensor of shape [num_classes]. The class biases.
- labels: A Tensor of type int64 and shape [batch_size, num_true]. The target classes. Note that this format differs from the labels argument of nn.softmax_cross_entropy_with_logits.
- inputs: A Tensor of shape [batch_size, dim]. The forward activations of the input network.
- num_sampled: An int. The number of classes to randomly sample per batch.
- num_classes: An int. The number of possible classes.
- num_true: An int. The number of target classes per training example.
- sampled_values: a tuple of (sampled_candidates, true_expected_count, sampled_expected_count) returned by a *_candidate_sampler function. (if None, we default to log_uniform_candidate_sampler)
- remove_accidental_hits: A bool. whether to remove "accidental hits" where a sampled class equals one of the target classes. Default is True.
- seed: random seed for candidate sampling. Default to None, which doesn't set the op-level random seed for candidate sampling.
- name: A name for the operation (optional).
#### Returns:
A batch_size 1-D tensor of per-example sampled softmax losses.
