[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/squeeze) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/array_ops.py#L3652-L3701)  
  
  
Removes dimensions of size 1 from the shape of a tensor.

### Aliases:

  * [`tf.compat.v2.squeeze`](/api_docs/python/tf/squeeze)

    
    
    tf.squeeze(
        input,
        axis=None,
        name=None
    )
    

### Used in the tutorials:

  * [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
  * [Text generation with an RNN](https://tensorflow.google.cn/tutorials/text/text_generation)
  * [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)
  * [Unicode strings](https://tensorflow.google.cn/tutorials/load_data/unicode)

Given a tensor `input`, this operation returns a tensor of the same type with
all dimensions of size 1 removed. If you don't want to remove all size 1
dimensions, you can remove specific size 1 dimensions by specifying `axis`.

#### For example:

    
    
    # 't' is a tensor of shape [1, 2, 1, 3, 1, 1]
    tf.shape(tf.squeeze(t))  # [2, 3]
    

Or, to remove specific size 1 dimensions:

    
    
    # 't' is a tensor of shape [1, 2, 1, 3, 1, 1]
    tf.shape(tf.squeeze(t, [2, 4]))  # [1, 2, 3, 1]
    

Unlike the older op
[`tf.compat.v1.squeeze`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/squeeze),
this op does not accept a deprecated `squeeze_dims` argument.

**Note:** if `input` is a
[`tf.RaggedTensor`](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor),
then this operation takes `O(N)` time, where `N` is the number of elements in
the squeezed dimensions.

#### Args:

  * **`input`** : A `Tensor`. The `input` to squeeze.
  * **`axis`** : An optional list of `ints`. Defaults to `[]`. If specified, only squeezes the dimensions listed. The dimension index starts at 0. It is an error to squeeze a dimension that is not 1. Must be in the range `[-rank(input), rank(input))`. Must be specified if `input` is a `RaggedTensor`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor`. Has the same type as `input`. Contains the same data as `input`,
but has one or more dimensions of size 1 removed.

#### Raises:

  * **`ValueError`** : The input cannot be converted to a tensor, or the specified axis cannot be squeezed.

