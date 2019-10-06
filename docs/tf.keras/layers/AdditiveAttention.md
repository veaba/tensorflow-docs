## Class AdditiveAttention

Additive attention layer, a.k.a. Bahdanau-style attention.
### Aliases:
- Class `tf.compat.v1.keras.layers.AdditiveAttention`
- Class `tf.compat.v2.keras.layers.AdditiveAttention`

Inputs are query tensor of shape [batch_size, Tq, dim], value tensor of shape [batch_size, Tv, dim] and key tensor of shape [batch_size, Tv, dim]. The calculation follows the steps:
#### Args:
- `use_scale`: If `True`, will create a variable to scale the attention scores.
- `causal`: Boolean. Set to `True` for decoder self-attent`i`on. Adds a mask such that pos`i`t`i`on `i` cannot attend to pos`i`t`i`ons `j > i`. Th`i`s prevents the flow of `i`nformat`i`on from the future towards the past.
#### Call Arguments:
- `inputs`:` `L`i``s``t`` `of` ``t``h``e`` `follow`i`ng` ``t``e`n`s`or`s`:
`q`u`e`ry:` `Qu`e`ry` ``Tensor`` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``T``q``,`` ``d``i``m`].
`v``a`lu`e`:` `V`a`lu`e`` ``Tensor`` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``T``v``,`` ``d``i``m`].
`key`:` `Op`t``i`on`a`l` ``key`` ``Tensor`` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``T``v``,`` ``d``i``m`].` `If` `no`t`` `g`i``v``e`n`,`` `w`i`ll` `u`s``e`` ``v``a`lu`e`` `for` ``b`o`t``h`` ``key`` ``a`n`d`` ``v``a`lu`e``,`` `w`h``i``c``h`` ``i``s`` ``t``h``e`` ``m`o`s``t`` ``c`o`m``m`on` ``c``a``s``e`.
- `q`u`e`ry:` `Qu`e`ry` ``Tensor`` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``T``q``,`` ``d``i``m`].
- `v``a`lu`e`:` `V`a`lu`e`` ``Tensor`` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``T``v``,`` ``d``i``m`].
- `key`:` `Op`t``i`on`a`l` ``key`` ``Tensor`` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``T``v``,`` ``d``i``m`].` `If` `no`t`` `g`i``v``e`n`,`` `w`i`ll` `u`s``e`` ``v``a`lu`e`` `for` ``b`o`t``h`` ``key`` ``a`n`d`` ``v``a`lu`e``,`` `w`h``i``c``h`` ``i``s`` ``t``h``e`` ``m`o`s``t`` ``c`o`m``m`on` ``c``a``s``e`.
- `m``a``s`k:` `L`i``s``t`` `of` ``t``h``e`` `follow`i`ng` ``t``e`n`s`or`s`:
`q`u`e`ry`_``m``a``s`k:` `A` ``b`ool`e``a`n` ``m``a``s`k` ``Tensor`` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``T``q`].` `If` `g`i``v``e`n`,`` ``t``h``e`` `ou`t`pu`t`` `w`i`ll` ``b``e`` ``z``e`ro` ``a``t`` ``t``h``e`` `po`s``i``t``i`on`s`` `w`h``e`r`e`` ``m``a``s`k==F`a`l`s``e`.
`v``a`lu`e``_``m``a``s`k:` `A` ``b`ool`e``a`n` ``m``a``s`k` ``Tensor`` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``T``v`].` `If` `g`i``v``e`n`,`` `w`i`ll` ``a`pply` ``t``h``e`` ``m``a``s`k` ``s`u`c``h`` ``t``h``a``t`` ``v``a`lu`e``s`` ``a``t`` `po`s``i``t``i`on`s`` `w`h``e`r`e`` ``m``a``s`k==F`a`l`s``e`` ``d`o` `no`t`` ``c`on`t`r`i``b`u`t``e`` ``t`o` ``t``h``e`` `r`e``s`ul`t`.
- `q`u`e`ry`_``m``a``s`k:` `A` ``b`ool`e``a`n` ``m``a``s`k` ``Tensor`` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``T``q`].` `If` `g`i``v``e`n`,`` ``t``h``e`` `ou`t`pu`t`` `w`i`ll` ``b``e`` ``z``e`ro` ``a``t`` ``t``h``e`` `po`s``i``t``i`on`s`` `w`h``e`r`e`` ``m``a``s`k==F`a`l`s``e`.
- `v``a`lu`e``_``m``a``s`k:` `A` ``b`ool`e``a`n` ``m``a``s`k` ``Tensor`` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``T``v`].` `If` `g`i``v``e`n`,`` `w`i`ll` ``a`pply` ``t``h``e`` ``m``a``s`k` ``s`u`c``h`` ``t``h``a``t`` ``v``a`lu`e``s`` ``a``t`` `po`s``i``t``i`on`s`` `w`h``e`r`e`` ``m``a``s`k==F`a`l`s``e`` ``d`o` `no`t`` ``c`on`t`r`i``b`u`t``e`` ``t`o` ``t``h``e`` `r`e``s`ul`t`.
#### Output shape:

Attention outputs of shape [batch_size, Tq, dim].

The meaning of query, value and key depend on the application. In the case of text similarity, for example, query is the sequence embeddings of the first piece of text and value is the sequence embeddings of the second piece of text. key is usually the same tensor as value.

Here is a code example for using AdditiveAttention in a CNN+Attention network:

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/dense_attention.py#L401-L403)


```
 __init__(
    use_scale=True,
    **kwargs
)
```
