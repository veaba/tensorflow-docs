

## Class  `DataLossError` 
遇到无法恢复的数据丢失或损坏时引发。

Inherits From: [ `OpError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OpError)

**别名** : [ `tf.compat.v1.errors.DataLossError` ](/api_docs/python/tf/errors/DataLossError), [ `tf.compat.v2.errors.DataLossError` ](/api_docs/python/tf/errors/DataLossError)

For example, this may be raised by running a `tf.WholeFileReader.read` operation, if the file is truncated while it is being read.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/errors_impl.py#L485-L487)

```
 __init__(
    node_def,
    op,
    message
)
 
```

Creates a  `DataLossError` .

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

