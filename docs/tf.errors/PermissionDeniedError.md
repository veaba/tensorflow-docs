

## Class  `PermissionDeniedError` 
调用方没有运行操作的权限时引发。

Inherits From: [ `OpError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OpError)

**别名** : [ `tf.compat.v1.errors.PermissionDeniedError` ](/api_docs/python/tf/errors/PermissionDeniedError), [ `tf.compat.v2.errors.PermissionDeniedError` ](/api_docs/python/tf/errors/PermissionDeniedError)

For example, running the `tf.WholeFileReader.read` operation could raise  `PermissionDeniedError`  if it receives the name of afile for which the user does not have the read file permission.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/errors_impl.py#L334-L337)

```
 __init__(
    node_def,
    op,
    message
)
 
```

Creates a  `PermissionDeniedError` .

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

