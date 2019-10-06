## Class InvalidArgumentError

Raised when an operation receives an invalid argument.
[OpError](https://www.tensorflow.org/api_docs/python/tf/errors/OpError)Inherits From: 

### Aliases:
- Class `tf.compat.v1.errors.InvalidArgumentError`
- Class `tf.compat.v2.errors.InvalidArgumentError`
[tf.matmul](https://www.tensorflow.org/api_docs/python/tf/linalg/matmul)This may occur, for example, if an operation is receives an input tensor that has an invalid value or shape. For example, the  op will raise this error if it receives an input that is not a matrix, and the tf.reshape op will raise this error if the new shape does not match the number of elements in the input tensor.

## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/errors_impl.py#L266-L269)


```
 __init__(
    node_def,
    op,
    message
)
```

Creates an InvalidArgumentError.
## Properties
### error_code

The integer error code that describes the error.
### message

The error message that describes the error.
### node_def

The NodeDef proto representing the op that failed.
### op

The operation that failed, if known.
[tf.Operation](https://www.tensorflow.org/api_docs/python/tf/Operation)N.B. If the failed op was synthesized at runtime, e.g. a Send or Recv op, there will be no corresponding  object. In that case, this will return None, and you should instead use the tf.errors.OpError.node_def to discover information about the op.

#### Returns:

The Operation that failed, or None.
