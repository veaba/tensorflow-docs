生成skipgram词对。

**别名** : [ `tf.compat.v1.keras.preprocessing.sequence.skipgrams` ](/api_docs/python/tf/keras/preprocessing/sequence/skipgrams), [ `tf.compat.v2.keras.preprocessing.sequence.skipgrams` ](/api_docs/python/tf/keras/preprocessing/sequence/skipgrams)

```
 tf.keras.preprocessing.sequence.skipgrams(
    sequence,
    vocabulary_size,
    window_size=4,
    negative_samples=1.0,
    shuffle=True,
    categorical=False,
    sampling_table=None,
    seed=None
)
 
```

This function transforms a sequence of word indexes (list of integers)into tuples of words of the form:

- (word, word in the same window), with label 1 (positive samples).
- (word, random word from the vocabulary), with label 0 (negative samples).
Read more about Skipgram in this gnomic paper by Mikolov et al.:[Efficient Estimation of Word Representations inVector Space](http://arxiv.org/pdf/1301.3781v3.pdf)

# Arguments


```
 sequence: A word sequence (sentence), encoded as a list
    of word indices (integers). If using a `sampling_table`,
    word indices are expected to match the rank
    of the words in a reference dataset (e.g. 10 would encode
    the 10-th most frequently occurring token).
    Note that index 0 is expected to be a non-word and will be skipped.
vocabulary_size: Int, maximum possible word index + 1
window_size: Int, size of sampling windows (technically half-window).
    The window of a word `w_i` will be
    `[i - window_size, i + window_size+1]`.
negative_samples: Float >= 0. 0 for no negative (i.e. random) samples.
    1 for same number as positive samples.
shuffle：在返回单词couples之前是否对其进行shuffle。
categorical: bool. if False, labels will be
    integers (eg. `[0, 1, 1 .. ]`),
    if `True`, labels will be categorical, e.g.
    `[[1,0],[0,1],[0,1] .. ]`.
sampling_table: 1D array of size `vocabulary_size` where the entry i
    encodes the probability to sample a word of rank i.
种子：随机种子。
 
```

# Returns


```
 couples, labels: where `couples` are int pairs and
    `labels` are either 0 or 1.
 
```

# Note


```
 By convention, index 0 in the vocabulary is
a non-word and will be skipped.
 
```

