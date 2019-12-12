Create a tensor of n-grams based on  `data` .

**Aliases** : [ `tf.compat.v1.strings.ngrams` ](/api_docs/python/tf/strings/ngrams), [ `tf.compat.v2.strings.ngrams` ](/api_docs/python/tf/strings/ngrams)

```
 tf.strings.ngrams(
    data,
    ngram_width,
    separator=' ',
    pad_values=None,
    padding_width=None,
    preserve_short_sequences=False,
    name=None
)
 
```

Creates a tensor of n-grams based on  `data` . The n-grams are created byjoining windows of  `width`  adjacent strings from the inner axis of  `data` using  `separator` .

The input data can be padded on both the start and end of the sequence, ifdesired, using the  `pad_values`  argument. If set,  `pad_values`  should containeither a tuple of strings or a single string; the 0th element of the tuplewill be used to pad the left side of the sequence and the 1st element of thetuple will be used to pad the right side of the sequence. The  `padding_width` arg controls how many padding values are added to each side; it defaults to `ngram_width-1` .

If this op is configured to not have padding, or if it is configured to addpadding with  `padding_width`  set to less than ngram_width-1, it is possiblethat a sequence, or a sequence plus padding, is smaller than the ngramwidth. In that case, no ngrams will be generated for that sequence. This canbe prevented by setting  `preserve_short_sequences` , which will cause the opto always generate at least one ngram per non-empty sequence.

#### Args:
- **`data`** : A Tensor or RaggedTensor containing the source data for the ngrams.
- **`ngram_width`** : The width(s) of the ngrams to create. If this is a list ortuple, the op will return ngrams of all specified arities in list order.Values must be non-Tensor integers greater than 0.
- **`separator`** : The separator string used between ngram elements. Must be astring constant, not a Tensor.
- **`pad_values`** : A tuple of (left_pad_value, right_pad_value), a single string,or None. If None, no padding will be added; if a single string, then thatstring will be used for both left and right padding. Values must be Pythonstrings.
- **`padding_width`** : If set,  `padding_width`  pad values will be added to bothsides of each sequence. Defaults to  `ngram_width` -1. Must be greater than
- **`preserve_short_sequences`** : If true, then ensure that at least one ngram isgenerated for each input sequence.  In particular, if an input sequence isshorter than  `min(ngram_width) + 2*pad_width` , then generate a singlengram containing the entire sequence.  If false, then no ngrams aregenerated for these short input sequences.
- **`name`** : The op name.
    1. (Note that 1-grams are never padded, regardless of this value.)


#### Returns:
A RaggedTensor of ngrams. If  `data.shape=[D1...DN, S]` , then `output.shape=[D1...DN, NUM_NGRAMS]` , where `NUM_NGRAMS=S-ngram_width+1+2*padding_width` .

#### Raises:
- **`TypeError`** : if  `pad_values`  is set to an invalid type.
- **`ValueError`** : if  `pad_values` ,  `padding_width` , or  `ngram_width`  is set to aninvalid value.
