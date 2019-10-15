
Generates skipgram word pairs.
### Aliases:
- `tf.compat.v1.keras.preprocessing.sequence.skipgrams`
- `tf.compat.v2.keras.preprocessing.sequence.skipgrams`

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

This function transforms a sequence of word indexes (list of integers) into tuples of words of the form:
- ``(``w``o``r``d``,`` ``w``o``r``d`` ``i``n`` ``t``h``e`` ``s``a``m``e`` ``w``i``n``d``o``w``)``,`` ``w``i``t``h`` ``l``a``b``e``l`` ``1`` ``(``p``o``s``i``t``i``v``e`` ``s``a``m``p``l``e``s``)``.``
- ``(``w``o``r``d``,`` ``r``a``n``d``o``m`` ``w``o``r``d`` ``f``r``o``m`` ``t``h``e`` ``v``o``c``a``b``u``l``a``r``y``)``,`` ``w``i``t``h`` ``l``a``b``e``l`` ``0`` ``(``n``e``g``a``t``i``v``e`` ``s``a``m``p``l``e``s``)``.``
[Efficient Estimation of Word Representations in Vector Space](http://arxiv.org/pdf/1301.3781v3.pdf)Read more about Skipgram in this gnomic paper by Mikolov et al.: 

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
shuffle: Whether to shuffle the word couples before returning them.
categorical: bool. if False, labels will be
    integers (eg. `[0, 1, 1 .. ]`),
    if `True`, labels will be categorical, e.g.
    `[[1,0],[0,1],[0,1] .. ]`.
sampling_table: 1D array of size `vocabulary_size` where the entry i
    encodes the probability to sample a word of rank i.
seed: Random seed.
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
