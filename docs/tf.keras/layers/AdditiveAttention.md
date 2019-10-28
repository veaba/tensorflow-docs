## Class AdditiveAttention
Additive attention layer, a.k.a. Bahdanau-style attention.
### Aliases:
- Class `tf.compat.v1.keras.layers.AdditiveAttention`
- Class `tf.compat.v2.keras.layers.AdditiveAttention`
Inputs are `query` tensor of shape `[batch_size, Tq, dim]`, `value` tensor of shape `[batch_size, Tv, dim]` and `key` tensor of shape `[batch_size, Tv, dim]`. The calculation follows the steps:
#### Args:
- `use_scale`: If `True`, will create a variable to scale the attention scores.
- `causal`: Boolean. Set to `True` for decoder self-attent`i`on. Adds a mask such that pos`i`t`i`on `i` cannot attend to pos`i`t`i`ons `j > i`. Th`i`s prevents the flow of `i`nformat`i`on from the future towards the past.
#### Call Arguments:
- `inputs`: List of the following tensors:
query: Query `Tensor` of shape `[batch_size, Tq, dim]`.
`value`: Value `Tensor` of shape `[batch_size, Tv, dim]`.
`key`: Optional `key` `Tensor` of shape `[batch_size, Tv, dim]`. If not given, will use `value` for both `key` and `value`, which is the most common case.
- query: Query `Tensor` of shape `[batch_size, Tq, dim]`.
- value: Value `Tensor` of shape `[batch_size, Tv, dim]`.
- `key`: Optional `key` `Tensor` of shape `[batch_size, Tv, dim]`. If not given, will use `value` for both `key` and `value`, which is the most common case.
- `mask`: List of the following tensors:
query_`mask`: A boolean `mask` `Tensor` of shape `[batch_size, Tq]`. If given, the output will be zero at the positions where `mask`==False.
value_`mask`: A boolean `mask` `Tensor` of shape `[batch_size, Tv]`. If given, will apply the `mask` such that values at positions where `mask`==False do not contribute to the result.
- query_mask: A boolean mask `Tensor` of shape `[batch_size, Tq]`. If given, the output will be zero at the positions where `mask==False`.
- value_mask: A boolean mask `Tensor` of shape `[batch_size, Tv]`. If given, will apply the mask such that values at positions where `mask==False` do not contribute to the result.
#### Output shape:
Attention outputs of shape `[batch_size, Tq, dim]`.
The meaning of `query`, `value` and `key` depend on the application. In the case of text similarity, for example, `query` is the sequence embeddings of the first piece of text and `value` is the sequence embeddings of the second piece of text. `key` is usually the same tensor as `value`.
Here is a code example for using `AdditiveAttention` in a CNN+Attention network:

```
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
## __init__
View source

```
 __init__(
    use_scale=True,
    **kwargs
)
```
