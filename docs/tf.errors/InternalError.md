

## Class  `InternalError` 
Raised when the system experiences an internal error.

Inherits From: [ `OpError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OpError)



### Aliases:

- Class [ `tf.compat.v1.errors.InternalError` ](/api_docs/python/tf/errors/InternalError)

- Class [ `tf.compat.v2.errors.InternalError` ](/api_docs/python/tf/errors/InternalError)

This exception is raised when some invariant expected by the runtime
has been broken. Catching this exception is not recommended.



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/errors_impl.py#L454-L456)



```
 __init__(
    node_def,
    op,
    message
)
 
```

Creates an  `InternalError` .



## Properties


###  `error_code` 
The integer error code that describes the error.



###  `message` 
The error message that describes the error.



###  `node_def` 
The  `NodeDef`  proto representing the op that failed.



###  `op` 
The operation that failed, if known.

<em>N.B.</em> If the failed op was synthesized at runtime, e.g. a  `Send` 
or  `Recv`  op, there will be no corresponding
[ `tf.Operation` ](https://tensorflow.google.cn/api_docs/python/tf/Operation)
object.  In that case, this will return  `None` , and you should
instead use the [ `tf.errors.OpError.node_def` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OpError#node_def) to
discover information about the op.



#### Returns:
The  `Operation`  that failed, or None.

