![](https://tensorflow.google.cn/images/tf_logo_32px.png)
Inserts a dimension of 1 into a tensor's shape.

### Aliases:

- [ `tf.compat.v2.expand_dims` ](/api_docs/python/tf/expand_dims)


```python
tf.expand_dims(
  input,
  axis,
  name=None
)

```


### Used in the guide:

- [Masking and padding with Keras](https://tensorflow.google.cn/guide/keras/masking_and_padding)

- [Recurrent Neural Networks (RNN) with Keras](https://tensorflow.google.cn/guide/keras/rnn)

### Used in the tutorials:

- [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)

- [Neural machine translation with attention](https://tensorflow.google.cn/tutorials/text/nmt_with_attention)

- [Text generation with an RNN](https://tensorflow.google.cn/tutorials/text/text_generation)

- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)

- [DeepDream](https://tensorflow.google.cn/tutorials/generative/deepdream)

Given a tensor  `input` , this operation inserts a dimension of 1 at thedimension index  `axis`  of  `input` 's shape. The dimension index  `axis`  startsat zero; if you specify a negative number for  `axis`  it is counted backwardfrom the end.

This operation is useful if you want to add a batch dimension to a singleelement. For example, if you have a single image of shape  `[height, width,channels]` , you can make it a batch of 1 image with  `expand_dims(image, 0)` ,which will make the shape  `[1, height, width, channels]` .

#### Other examples:


```python
# 't' is a tensor of shape [2]
tf.shape(tf.expand_dims(t, 0)) &nbsp;# [1, 2]
tf.shape(tf.expand_dims(t, 1)) &nbsp;# [2, 1]
tf.shape(tf.expand_dims(t, -1)) &nbsp;# [2, 1]

# 't2' is a tensor of shape [2, 3, 5]
tf.shape(tf.expand_dims(t2, 0)) &nbsp;# [1, 2, 3, 5]
tf.shape(tf.expand_dims(t2, 2)) &nbsp;# [2, 3, 1, 5]
tf.shape(tf.expand_dims(t2, 3)) &nbsp;# [2, 3, 5, 1]

```


This operation requires that:

 `-1-input.dims() &lt;= dim &lt;= input.dims()` 

This operation is related to  `squeeze()` , which removes dimensions ofsize 1.

#### Args:

- **`input`** : A  `Tensor` .

- **`axis`** : 0-D (scalar). Specifies the dimension index at which to expand theshape of  `input` . Must be in the range  `[-rank(input) - 1, rank(input)]` .

- **`name`** : The name of the output  `Tensor`  (optional).

#### Returns:

A  `Tensor`  with the same data as  `input` , but its shape has an additionaldimension of size 1 added.
