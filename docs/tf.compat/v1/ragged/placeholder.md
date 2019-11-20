[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_factory_ops.py#L314-L347)  
---  
  
Creates a placeholder for a
[`tf.RaggedTensor`](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor)
that will always be fed.

    
    
    tf.compat.v1.ragged.placeholder(
        dtype,
        ragged_rank,
        value_shape=None,
        name=None
    )
    

**Important** : This ragged tensor will produce an error if evaluated. Its
value must be fed using the `feed_dict` optional argument to `Session.run()`,
[`Tensor.eval()`](/api_docs/python/tf/Tensor#eval), or
[`Operation.run()`](/api_docs/python/tf/Operation#run).

@compatibility{eager} Placeholders are not compatible with eager execution.

#### Args:

  * **`dtype`** : The data type for the `RaggedTensor`.
  * **`ragged_rank`** : The ragged rank for the `RaggedTensor`
  * **`value_shape`** : The shape for individual flat values in the `RaggedTensor`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `RaggedTensor` that may be used as a handle for feeding a value, but not
evaluated directly.

#### Raises:

  * **`RuntimeError`** : if eager execution is enabled

