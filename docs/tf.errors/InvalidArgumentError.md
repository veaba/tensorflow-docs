

## Class  `InvalidArgumentError` 
Raised when an operation receives an invalid argument.

Inherits From: [ `OpError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OpError)

**Aliases** : [ `tf.compat.v1.errors.InvalidArgumentError` ](/api_docs/python/tf/errors/InvalidArgumentError), [ `tf.compat.v2.errors.InvalidArgumentError` ](/api_docs/python/tf/errors/InvalidArgumentError)

This may occur, for example, if an operation is receives an inputtensor that has an invalid value or shape. For example, the[ `tf.matmul` ](https://tensorflow.google.cn/api_docs/python/tf/linalg/matmul) op will raise thiserror if it receives an input that is not a matrix, and the[ `tf.reshape` ](https://tensorflow.google.cn/api_docs/python/tf/reshape) op will raisethis error if the new shape does not match the number of elements in the inputtensor.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/errors_impl.py#L266-L269)

```
 __init__(
    node_def,
    op,
    message
)
 
```

Creates an  `InvalidArgumentError` .

## Properties


###  `error_code` 
The integer error code that describes the error.

###  `message` 
The error message that describes the error.

###  `node_def` 
The  `NodeDef`  proto representing the op that failed.

###  `op` 
The operation that failed, if known.

*N.B.* If the failed op was synthesized at runtime, e.g. a  `Send` or  `Recv`  op, there will be no corresponding[ `tf.Operation` ](https://tensorflow.google.cn/api_docs/python/tf/Operation)object.  In that case, this will return  `None` , and you shouldinstead use the [ `tf.errors.OpError.node_def` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OpError#node_def) todiscover information about the op.

#### Returns:
The  `Operation`  that failed, or None.

