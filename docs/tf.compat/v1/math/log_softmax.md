[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/nn_ops.py#L2988-L3015)  
---  
  
Computes log softmax activations. (deprecated arguments)

### Aliases:

  * [`tf.compat.v1.nn.log_softmax`](/api_docs/python/tf/compat/v1/math/log_softmax)

    
    
    tf.compat.v1.math.log_softmax(
        logits,
        axis=None,
        name=None,
        dim=None
    )
    

**Warning:** SOME ARGUMENTS ARE DEPRECATED: `(dim)`. They will be removed in a
future version. Instructions for updating: dim is deprecated, use axis instead

For each batch `i` and class `j` we have

    
    
    logsoftmax = logits - log(reduce_sum(exp(logits), axis))
    

#### Args:

  * **`logits`** : A non-empty `Tensor`. Must be one of the following types: `half`, `float32`, `float64`.
  * **`axis`** : The dimension softmax would be performed on. The default is -1 which indicates the last dimension.
  * **`name`** : A name for the operation (optional).
  * **`dim`** : Deprecated alias for `axis`.

#### Returns:

A `Tensor`. Has the same type as `logits`. Same shape as `logits`.

#### Raises:

  * **`InvalidArgumentError`** : if `logits` is empty or `axis` is beyond the last dimension of `logits`.

