

## Class  `UnimplementedError` 
未实现操作时引发。

Inherits From: [ `OpError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OpError)

**别名** : [ `tf.compat.v1.errors.UnimplementedError` ](/api_docs/python/tf/errors/UnimplementedError), [ `tf.compat.v2.errors.UnimplementedError` ](/api_docs/python/tf/errors/UnimplementedError)

Some operations may raise this error when passed otherwise-validarguments that it does not currently support. For example, runningthe [ `tf.nn.max_pool2d` ](https://tensorflow.google.cn/api_docs/python/tf/nn/max_pool2d) operationwould raise this error if pooling was requested on the batch dimension,because this is not yet supported.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/errors_impl.py#L438-L441)

```
 __init__(
    node_def,
    op,
    message
)
 
```

Creates an  `UnimplementedError` .

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

