[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/split) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/array_ops.py#L1642-L1710)  
  
  
Splits a tensor into sub tensors.

### Aliases:

  * [`tf.compat.v1.split`](/api_docs/python/tf/split)
  * [`tf.compat.v2.split`](/api_docs/python/tf/split)

    
    
    tf.split(
        value,
        num_or_size_splits,
        axis=0,
        num=None,
        name='split'
    )
    

### Used in the guide:

  * [Masking and padding with Keras](https://tensorflow.google.cn/guide/keras/masking_and_padding)

### Used in the tutorials:

  * [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)

If `num_or_size_splits` is an integer, then `value` is split along dimension
`axis` into `num_split` smaller tensors. This requires that `num_split` evenly
divides `value.shape[axis]`.

If `num_or_size_splits` is a 1-D Tensor (or list), we call it `size_splits`
and `value` is split into `len(size_splits)` elements. The shape of the `i`-th
element has the same size as the `value` except along dimension `axis` where
the size is `size_splits[i]`.

#### For example:

    
    
    # 'value' is a tensor with shape [5, 30]
    # Split 'value' into 3 tensors with sizes [4, 15, 11] along dimension 1
    split0, split1, split2 = tf.split(value, [4, 15, 11], 1)
    tf.shape(split0)  # [5, 4]
    tf.shape(split1)  # [5, 15]
    tf.shape(split2)  # [5, 11]
    # Split 'value' into 3 tensors along dimension 1
    split0, split1, split2 = tf.split(value, num_or_size_splits=3, axis=1)
    tf.shape(split0)  # [5, 10]
    

#### Args:

  * **`value`** : The `Tensor` to split.
  * **`num_or_size_splits`** : Either an integer indicating the number of splits along split_dim or a 1-D integer `Tensor` or Python list containing the sizes of each output tensor along split_dim. If a scalar then it must evenly divide `value.shape[axis]`; otherwise the sum of sizes along the split dimension must match that of the `value`.
  * **`axis`** : An integer or scalar `int32` `Tensor`. The dimension along which to split. Must be in the range `[-rank(value), rank(value))`. Defaults to 0.
  * **`num`** : Optional, used to specify the number of outputs when it cannot be inferred from the shape of `size_splits`.
  * **`name`** : A name for the operation (optional).

#### Returns:

if `num_or_size_splits` is a scalar returns `num_or_size_splits` `Tensor`
objects; if `num_or_size_splits` is a 1-D Tensor returns
`num_or_size_splits.get_shape[0]` `Tensor` objects resulting from splitting
`value`.

#### Raises:

  * **`ValueError`** : If `num` is unspecified and cannot be inferred.

