[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/constant) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/constant_op.py#L164-L227)  
---|---  
  
Creates a constant tensor.

### Aliases:

  * [`tf.compat.v2.constant`](/api_docs/python/tf/constant)

    
    
    tf.constant(
        value,
        dtype=None,
        shape=None,
        name='Const'
    )
    

### Used in the guide:

  * [Using the SavedModel format](https://tensorflow.google.cn/guide/saved_model)
  * [Use a GPU](https://tensorflow.google.cn/guide/gpu)
  * [Eager execution](https://tensorflow.google.cn/guide/eager)
  * [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)
  * [Ragged tensors](https://tensorflow.google.cn/guide/ragged_tensor)

### Used in the tutorials:

  * [Better performance with tf.function](https://tensorflow.google.cn/tutorials/customization/performance)
  * [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
  * [Unicode strings](https://tensorflow.google.cn/tutorials/load_data/unicode)
  * [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)
  * [Word embeddings](https://tensorflow.google.cn/tutorials/text/word_embeddings)

The resulting tensor is populated with values of type `dtype`, as specified by
arguments `value` and (optionally) `shape` (see examples below).

The argument `value` can be a constant value, or a list of values of type
`dtype`. If `value` is a list, then the length of the list must be less than
or equal to the number of elements implied by the `shape` argument (if
specified). In the case where the list length is less than the number of
elements specified by `shape`, the last element in the list will be used to
fill the remaining entries.

The argument `shape` is optional. If present, it specifies the dimensions of
the resulting tensor. If not present, the shape of `value` is used.

If the argument `dtype` is not specified, then the type is inferred from the
type of `value`.

#### For example:

    
    
    # Constant 1-D Tensor populated with value list.
    tensor = tf.constant([1, 2, 3, 4, 5, 6]) => [1 2 3 4 5 6]
    
    # Constant 1-D Tensor populated with value list.
    tensor = tf.constant([1, 2, 3, 4, 5, 6], shape=(2,3))
         => [[1 2 3], [4 5 6]]
    
    # Constant 2-D tensor populated with scalar value -1.
    tensor = tf.constant(-1.0, shape=[2, 3]) => [[-1. -1. -1.]
                                                 [-1. -1. -1.]]
    

[`tf.constant`](https://tensorflow.google.cn/api_docs/python/tf/constant)
differs from [`tf.fill`](https://tensorflow.google.cn/api_docs/python/tf/fill)
in a few ways:

  * [`tf.constant`](https://tensorflow.google.cn/api_docs/python/tf/constant) supports arbitrary constants, not just uniform scalar Tensors like [`tf.fill`](https://tensorflow.google.cn/api_docs/python/tf/fill).
  * [`tf.constant`](https://tensorflow.google.cn/api_docs/python/tf/constant) creates a `Const` node in the computation graph with the exact value at graph construction time. On the other hand, [`tf.fill`](https://tensorflow.google.cn/api_docs/python/tf/fill) creates an Op in the graph that is expanded at runtime.
  * Because [`tf.constant`](https://tensorflow.google.cn/api_docs/python/tf/constant) only embeds constant values in the graph, it does not support dynamic shapes based on other runtime Tensors, whereas [`tf.fill`](https://tensorflow.google.cn/api_docs/python/tf/fill) does.

#### Args:

  * **`value`** : A constant value (or list) of output type `dtype`.

  * **`dtype`** : The type of the elements of the resulting tensor.

  * **`shape`** : Optional dimensions of resulting tensor.

  * **`name`** : Optional name for the tensor.

#### Returns:

A Constant Tensor.

#### Raises:

  * **`TypeError`** : if shape is incorrectly specified or unsupported.

