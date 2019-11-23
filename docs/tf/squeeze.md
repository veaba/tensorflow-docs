
Removes dimensions of size 1 from the shape of a tensor.


### Aliases:
- [ `tf.compat.v2.squeeze` ](/api_docs/python/tf/squeeze)


```
tf.squeeze(
    input,
    axis=None,
    name=None
)

```



### Used in the tutorials:
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
- [Text generation with an RNN](https://tensorflow.google.cn/tutorials/text/text_generation)
- [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)
- [Unicode strings](https://tensorflow.google.cn/tutorials/load_data/unicode)

Given a tensor  `input` , this operation returns a tensor of the same type withall dimensions of size 1 removed. If you don't want to remove all size 1dimensions, you can remove specific size 1 dimensions by specifying `axis` .


#### For example:


```
# 't' is a tensor of shape [1, 2, 1, 3, 1, 1]
tf.shape(tf.squeeze(t))  # [2, 3]

```


Or, to remove specific size 1 dimensions:


```
# 't' is a tensor of shape [1, 2, 1, 3, 1, 1]
tf.shape(tf.squeeze(t, [2, 4]))  # [1, 2, 3, 1]

```


Unlike the older op [ `tf.compat.v1.squeeze` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/squeeze), this op does not accept adeprecated  `squeeze_dims`  argument.

>**Note:**  if  `input`  is a <a href="https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor"> `tf.RaggedTensor` </a>, then this operation takes  `O(N)` time, where  `N`  is the number of elements in the squeezed dimensions.


#### Args:
- **`input`** : A  `Tensor` . The  `input`  to squeeze.
- **`axis`** : An optional list of  `ints` . Defaults to  `[]` . If specified, onlysqueezes the dimensions listed. The dimension index starts at 0. It is anerror to squeeze a dimension that is not 1. Must be in the range `[-rank(input), rank(input))` . Must be specified if  `input`  is a `RaggedTensor` .
- **`name`** : A name for the operation (optional).


#### Returns:

A  `Tensor` . Has the same type as  `input` .Contains the same data as  `input` , but has one or more dimensions ofsize 1 removed.


#### Raises:
- **`ValueError`** : The input cannot be converted to a tensor, or the specifiedaxis cannot be squeezed.
