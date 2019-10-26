[tf.RaggedTensor](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor)Creates a placeholder for a  that will always be fed.


```
 tf.compat.v1.ragged.placeholder(
    dtype,
    ragged_rank,
    value_shape=None,
    name=None
)
```
[Tensor.eval()](https://tensorflow.google.cn/api_docs/python/tf/Tensor#eval)Important: This ragged tensor will produce an error if evaluated. Its value must be fed using the feed_dict optional argument to Session.run(), , or Operation.run().

@compatibility{eager} Placeholders are not compatible with eager execution.
#### Args:
- dtype: The data type for the RaggedTensor.
- ragged_rank: The ragged rank for the RaggedTensor
- value_shape: The shape for individual flat values in the RaggedTensor.
- name: A name for the operation (optional).
#### Returns:
A RaggedTensor that may be used as a handle for feeding a value, but not evaluated directly.
#### Raises:
- RuntimeError: if eager execution is enabled
