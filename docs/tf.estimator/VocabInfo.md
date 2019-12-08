

## Class  `VocabInfo` 
Vocabulary information for warm-starting.



### Aliases:

- Class [ `tf.compat.v1.estimator.VocabInfo` ](/api_docs/python/tf/estimator/VocabInfo)

- Class [ `tf.compat.v1.train.VocabInfo` ](/api_docs/python/tf/estimator/VocabInfo)

- Class [ `tf.compat.v2.estimator.VocabInfo` ](/api_docs/python/tf/estimator/VocabInfo)

See [ `tf.estimator.WarmStartSettings` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/WarmStartSettings) for examples of using
  VocabInfo to warm-start.

Args:
    new_vocab: [Required] A path to the new vocabulary file (used with the model
      to be trained).
    new_vocab_size: [Required] An integer indicating how many entries of the new
      vocabulary will used in training.
    num_oov_buckets: [Required] An integer indicating how many OOV buckets are
      associated with the vocabulary.
    old_vocab: [Required] A path to the old vocabulary file (used with the
      checkpoint to be warm-started from).
    old_vocab_size: [Optional] An integer indicating how many entries of the old
      vocabulary were used in the creation of the checkpoint. If not provided,
      the entire old vocabulary will be used.
    backup_initializer: [Optional] A variable initializer used for variables
      corresponding to new vocabulary entries and OOV. If not provided, these
      entries will be zero-initialized.
    axis: [Optional] Denotes what axis the vocabulary corresponds to.  The
      default, 0, corresponds to the most common use case (embeddings or
      linear weights for binary classification / regression).  An axis of 1
      could be used for warm-starting output layers with class vocabularies.

Returns:
    A  `VocabInfo`  which represents the vocabulary information for warm-starting.

Raises:
    ValueError:  `axis`  is neither 0 or 1.



```
   Example Usage:
 
```



```
  > __new__ </h2>

<a target="_blank" href="https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/warm_starting_util.py#L113-L134">View source</a>

``` python
@staticmethod
__new__(
    cls,
    new_vocab,
    new_vocab_size,
    num_oov_buckets,
    old_vocab,
    old_vocab_size=-1,
    backup_initializer=None,
    axis=0
)
</code>
```

Create new instance of VocabInfo(new_vocab, new_vocab_size, num_oov_buckets, old_vocab, old_vocab_size, backup_initializer, axis)



## Properties


###  `new_vocab` 


###  `new_vocab_size` 


###  `num_oov_buckets` 


###  `old_vocab` 


###  `old_vocab_size` 


###  `backup_initializer` 


###  `axis` 
