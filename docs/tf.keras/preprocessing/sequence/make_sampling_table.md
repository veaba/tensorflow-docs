Generates a word rank-based probabilistic sampling table.

**别名** : [ `tf.compat.v1.keras.preprocessing.sequence.make_sampling_table` ](/api_docs/python/tf/keras/preprocessing/sequence/make_sampling_table), [ `tf.compat.v2.keras.preprocessing.sequence.make_sampling_table` ](/api_docs/python/tf/keras/preprocessing/sequence/make_sampling_table)

```
 tf.keras.preprocessing.sequence.make_sampling_table(
    size,
    sampling_factor=1e-05
)
 
```

Used for generating the  `sampling_table`  argument for  `skipgrams` . `sampling_table[i]`  is the probability of samplingthe word i-th most common word in a dataset(more common words should be sampled less frequently, for balance).

The sampling probabilities are generated accordingto the sampling distribution used in word2vec:

```
 p(word) = (min(1, sqrt(word_frequency / sampling_factor) /
    (word_frequency / sampling_factor)))
 
```

We assume that the word frequencies follow Zipf's law (s=1) to derivea numerical approximation of frequency(rank):

 `frequency(rank) ~ 1/(rank * (log(rank) + gamma) + 1/2 - 1/(12*rank))` where  `gamma`  is the Euler-Mascheroni constant.

# Arguments


```
 size: Int, number of possible words to sample.
sampling_factor: The sampling factor in the word2vec formula.
 
```

# Returns


```
长度为“size”的1d numpy数组，其中第i个条目
是一个等级i的单词被抽样的概率。
 
```

