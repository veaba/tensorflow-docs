

## Class  `NotFoundError` 
Raised when a requested entity (e.g., a file or directory) was not found.

Inherits From: [ `OpError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OpError)

**别名** : [ `tf.compat.v1.errors.NotFoundError` ](/api_docs/python/tf/errors/NotFoundError), [ `tf.compat.v2.errors.NotFoundError` ](/api_docs/python/tf/errors/NotFoundError)

For example, running the `tf.WholeFileReader.read` operation could raise  `NotFoundError`  if it receives the name of a file thatdoes not exist.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/errors_impl.py#L299-L301)

```
 __init__(
    node_def,
    op,
    message
)
 
```

Creates a  `NotFoundError` .

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

