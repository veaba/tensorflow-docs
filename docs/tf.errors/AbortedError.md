

## Class  `AbortedError` 
The operation was aborted, typically due to a concurrent action.

Inherits From: [ `OpError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OpError)

**别名** : [ `tf.compat.v1.errors.AbortedError` ](/api_docs/python/tf/errors/AbortedError), [ `tf.compat.v2.errors.AbortedError` ](/api_docs/python/tf/errors/AbortedError)

For example, running a `tf.QueueBase.enqueue` operation may raise  `AbortedError`  if a `tf.QueueBase.close`  operationpreviously ran.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/errors_impl.py#L401-L403)

```
 __init__(
    node_def,
    op,
    message
)
 
```

Creates an  `AbortedError` .

## 属性


###  `error_code` 
描述错误的整数错误代码。

###  `message` 
描述错误的错误消息。

###  `node_def` 
The  `NodeDef`  proto representing the op that failed.

###  `op` 
The operation that failed, if known.

*N.B.* If the failed op was synthesized at runtime, e.g. a  `Send` or  `Recv`  op, there will be no corresponding[ `tf.Operation` ](https://tensorflow.google.cn/api_docs/python/tf/Operation)object.  In that case, this will return  `None` , and you shouldinstead use the [ `tf.errors.OpError.node_def` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OpError#node_def) todiscover information about the op.

#### 返回：
The  `Operation`  that failed, or None.

