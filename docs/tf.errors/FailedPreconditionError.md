

## Class  `FailedPreconditionError` 
Operation was rejected because the system is not in a state to execute it.

Inherits From: [ `OpError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OpError)

**Aliases** : [ `tf.compat.v1.errors.FailedPreconditionError` ](/api_docs/python/tf/errors/FailedPreconditionError), [ `tf.compat.v2.errors.FailedPreconditionError` ](/api_docs/python/tf/errors/FailedPreconditionError)

This exception is most commonly raised when running an operationthat reads a [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable)before it has been initialized.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/errors_impl.py#L382-L385)

```
 __init__(
    node_def,
    op,
    message
)
 
```

Creates a  `FailedPreconditionError` .

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

