

## Class  `OutOfRangeError` 
当操作迭代超过有效输入范围时引发。

Inherits From: [ `OpError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OpError)

**别名** : [ `tf.compat.v1.errors.OutOfRangeError` ](/api_docs/python/tf/errors/OutOfRangeError), [ `tf.compat.v2.errors.OutOfRangeError` ](/api_docs/python/tf/errors/OutOfRangeError)

This exception is raised in "end-of-file" conditions, such as when a `tf.QueueBase.dequeue` operation is blocked on an empty queue, and a `tf.QueueBase.close` operation executes.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/errors_impl.py#L419-L422)

```
 __init__(
    node_def,
    op,
    message
)
 
```

Creates an  `OutOfRangeError` .

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

