Merges summaries.

```
 tf.compat.v1.summary.merge(    inputs,    collections=None,    name=None) 
```

This op creates a[ `Summary` ](https://tensorflow.google.cn/code/tensorflow/core/framework/summary.proto)protocol buffer that contains the union of all the values in the inputsummaries.

When the Op is run, it reports an  `InvalidArgument`  error if multiple valuesin the summaries to merge use the same tag.

#### Args:
- **`inputs`** : A list of  `string`   `Tensor`  objects containing serialized  `Summary` protocol buffers.
- **`collections`** : Optional list of graph collections keys. The new summary op isadded to these collections. Defaults to  `[]` .
- **`name`** : A name for the operation (optional).


#### Returns:
A scalar  `Tensor`  of type  `string` . The serialized  `Summary`  protocolbuffer resulting from the merging.

#### Raises:
- **`RuntimeError`** : If called with eager mode enabled.


#### Eager Compatibility
Not compatible with eager execution. To write TensorBoardsummaries under eager execution, use  `tf.contrib.summary`  instead.

