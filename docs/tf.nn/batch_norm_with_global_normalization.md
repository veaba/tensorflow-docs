[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/nn/batch_norm_with_global_normalization)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/nn_impl.py#L1577-L1618)  
---|---  
  
Batch normalization.

### Aliases:

  * [`tf.compat.v2.nn.batch_norm_with_global_normalization`](/api_docs/python/tf/nn/batch_norm_with_global_normalization)

    
    
    tf.nn.batch_norm_with_global_normalization(
        input,
        mean,
        variance,
        beta,
        gamma,
        variance_epsilon,
        scale_after_normalization,
        name=None
    )
    

This op is deprecated. See
[`tf.nn.batch_normalization`](https://tensorflow.google.cn/api_docs/python/tf/nn/batch_normalization).

#### Args:

  * **`input`** : A 4D input Tensor.
  * **`mean`** : A 1D mean Tensor with size matching the last dimension of t. This is the first output from tf.nn.moments, or a saved moving average thereof.
  * **`variance`** : A 1D variance Tensor with size matching the last dimension of t. This is the second output from tf.nn.moments, or a saved moving average thereof.
  * **`beta`** : A 1D beta Tensor with size matching the last dimension of t. An offset to be added to the normalized tensor.
  * **`gamma`** : A 1D gamma Tensor with size matching the last dimension of t. If "scale_after_normalization" is true, this tensor will be multiplied with the normalized tensor.
  * **`variance_epsilon`** : A small float number to avoid dividing by 0.
  * **`scale_after_normalization`** : A bool indicating whether the resulted tensor needs to be multiplied with gamma.
  * **`name`** : A name for this operation (optional).

#### Returns:

A batch-normalized `t`.

