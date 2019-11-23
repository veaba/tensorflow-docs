
## Class  `AdditiveAttention` 

Additive attention layer, a.k.a. Bahdanau-style attention.

### Aliases:

- Class [ `tf.compat.v1.keras.layers.AdditiveAttention` ](/api_docs/python/tf/keras/layers/AdditiveAttention)

- Class [ `tf.compat.v2.keras.layers.AdditiveAttention` ](/api_docs/python/tf/keras/layers/AdditiveAttention)

Inputs are  `query`  tensor of shape  `[batch_size, Tq, dim]` ,  `value`  tensor ofshape  `[batch_size, Tv, dim]`  and  `key`  tensor of shape `[batch_size, Tv, dim]` . The calculation follows the steps:

- Reshape <code translate="no" dir="ltr">query</code> and <code translate="no" dir="ltr">value</code> into shapes <code translate="no" dir="ltr">[batch_size, Tq, 1, dim]</code>and <code translate="no" dir="ltr">[batch_size, 1, Tv, dim]</code> respectively.</li><li>Calculate scores with shape <code translate="no" dir="ltr">[batch_size, Tq, Tv]</code> as a non-linearsum: <code translate="no" dir="ltr">scores = tf.reduce_sum(tf.tanh(query + value), axis=-1)</code></li><li>Use scores to calculate a distribution with shape<code translate="no" dir="ltr">[batch_size, Tq, Tv]</code>: <code translate="no" dir="ltr">distribution = tf.nn.softmax(scores)</code>.</li><li>Use <code translate="no" dir="ltr">distribution</code> to create a linear combination of <code translate="no" dir="ltr">value</code> withshape <code translate="no" dir="ltr">batch_size, Tq, dim]</code>:<code translate="no" dir="ltr">return tf.matmul(distribution, value)</code>.
#### Args:

- **`use_scale`** : If  `True` , will create a variable to scale the attention scores.

- **`causal`** : Boolean. Set to  `True`  for decoder self-attention. Adds a mask suchthat position  `i`  cannot attend to positions  `j &gt; i` . This prevents theflow of information from the future towards the past.

#### Call Arguments:

- inputs</code></b>: List of the following tensors:<ul><li>query: Query <code translate="no" dir="ltr">Tensor</code> of shape <code translate="no" dir="ltr">[batch_size, Tq, dim]</code>.</li><li>value: Value <code translate="no" dir="ltr">Tensor</code> of shape <code translate="no" dir="ltr">[batch_size, Tv, dim]</code>.</li><li>key: Optional key <code translate="no" dir="ltr">Tensor</code> of shape <code translate="no" dir="ltr">[batch_size, Tv, dim]</code>. If notgiven, will use <code translate="no" dir="ltr">value</code> for both <code translate="no" dir="ltr">key</code> and <code translate="no" dir="ltr">value</code>, which is themost common case.</li></ul></li><li><b><code translate="no" dir="ltr">mask</code></b>: List of the following tensors:<ul><li>query_mask: A boolean mask <code translate="no" dir="ltr">Tensor</code> of shape <code translate="no" dir="ltr">[batch_size, Tq]</code>.If given, the output will be zero at the positions where<code translate="no" dir="ltr">mask==False</code>.</li><li>value_mask: A boolean mask <code translate="no" dir="ltr">Tensor</code> of shape <code translate="no" dir="ltr">[batch_size, Tv]</code>.If given, will apply the mask such that values at positions where<code translate="no" dir="ltr">mask==False</code> do not contribute to the result.
#### Output shape:

Attention outputs of shape  `[batch_size, Tq, dim]` .

The meaning of  `query` ,  `value`  and  `key`  depend on the application. In thecase of text similarity, for example,  `query`  is the sequence embeddings ofthe first piece of text and  `value`  is the sequence embeddings of the secondpiece of text.  `key`  is usually the same tensor as  `value` .

Here is a code example for using  `AdditiveAttention`  in a CNN+Attentionnetwork:


``` python
# Variable-length int sequences.
query_input = tf.keras.Input(shape=(None,), dtype='int32')
value_input = tf.keras.Input(shape=(None,), dtype='int32')

# Embedding lookup.
token_embedding = tf.keras.layers.Embedding(max_tokens, dimension)
# Query embeddings of shape [batch_size, Tq, dimension].
query_embeddings = token_embedding(query_input)
# Value embeddings of shape [batch_size, Tv, dimension].
value_embeddings = token_embedding(query_input)

# CNN layer.
cnn_layer = tf.keras.layers.Conv1D(
  filters=100,
  kernel_size=4,
  # Use 'same' padding so outputs have the same shape as inputs.
  padding='same')
# Query encoding of shape [batch_size, Tq, filters].
query_seq_encoding = cnn_layer(query_embeddings)
# Value encoding of shape [batch_size, Tv, filters].
value_seq_encoding = cnn_layer(value_embeddings)

# Query-value attention of shape [batch_size, Tq, filters].
query_value_attention_seq = tf.keras.layers.AdditiveAttention()(
  [query_seq_encoding, value_seq_encoding])

# Reduce over the sequence axis to produce encodings of shape
# [batch_size, filters].
query_encoding = tf.keras.layers.GlobalAveragePooling1D()(
  query_seq_encoding)
query_value_attention = tf.keras.layers.GlobalAveragePooling1D()(
  query_value_attention_seq)

# Concatenate query and document encodings to produce a DNN input layer.
input_layer = tf.keras.layers.Concatenate()(
  [query_encoding, query_value_attention])

# Add DNN layers, and create Model.
# ...

```


##  `__init__` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/dense_attention.py#L401-L403)


```
__init__(
  use_scale=True,
  **kwargs
)

```

