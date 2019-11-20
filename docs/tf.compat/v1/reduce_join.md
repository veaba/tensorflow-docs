[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/string_ops.py#L321-L344)  
---  
  
Joins a string Tensor across the given dimensions.

### Aliases:

  * [`tf.compat.v1.strings.reduce_join`](/api_docs/python/tf/compat/v1/reduce_join)

    
    
    tf.compat.v1.reduce_join(
        inputs,
        axis=None,
        keep_dims=None,
        separator='',
        name=None,
        reduction_indices=None,
        keepdims=None
    )
    

Computes the string join across dimensions in the given string Tensor of shape
`[\\(d_0, d_1, ..., d_{n-1}\\)]`. Returns a new Tensor created by joining the
input strings with the given separator (default: empty string). Negative
indices are counted backwards from the end, with `-1` being equivalent to `n -
1`. If indices are not specified, joins across all dimensions beginning from
`n - 1` through `0`.

#### For example:

    
    
    # tensor `a` is [["a", "b"], ["c", "d"]]
    tf.strings.reduce_join(a, 0) ==> ["ac", "bd"]
    tf.strings.reduce_join(a, 1) ==> ["ab", "cd"]
    tf.strings.reduce_join(a, -2) = tf.strings.reduce_join(a, 0) ==> ["ac", "bd"]
    tf.strings.reduce_join(a, -1) = tf.strings.reduce_join(a, 1) ==> ["ab", "cd"]
    tf.strings.reduce_join(a, 0, keep_dims=True) ==> [["ac", "bd"]]
    tf.strings.reduce_join(a, 1, keep_dims=True) ==> [["ab"], ["cd"]]
    tf.strings.reduce_join(a, 0, separator=".") ==> ["a.c", "b.d"]
    tf.strings.reduce_join(a, [0, 1]) ==> "acbd"
    tf.strings.reduce_join(a, [1, 0]) ==> "abcd"
    tf.strings.reduce_join(a, []) ==> [["a", "b"], ["c", "d"]]
    tf.strings.reduce_join(a) = tf.strings.reduce_join(a, [1, 0]) ==> "abcd"
    

#### Args:

  * **`inputs`** : A `Tensor` of type `string`. The input to be joined. All reduced indices must have non-zero size.
  * **`axis`** : A `Tensor` of type `int32`. The dimensions to reduce over. Dimensions are reduced in the order specified. Omitting `axis` is equivalent to passing `[n-1, n-2, ..., 0]`. Negative indices from `-n` to `-1` are supported.
  * **`keep_dims`** : An optional `bool`. Defaults to `False`. If `True`, retain reduced dimensions with length `1`.
  * **`separator`** : An optional `string`. Defaults to `""`. The separator to use when joining.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of type `string`.

