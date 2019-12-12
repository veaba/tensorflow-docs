

## Class  `OpError` 
当TensorFlow执行失败时引发的一般性错误。

**别名** : [ `tf.compat.v1.OpError` ](/api_docs/python/tf/errors/OpError), [ `tf.compat.v1.errors.OpError` ](/api_docs/python/tf/errors/OpError), [ `tf.compat.v2.errors.OpError` ](/api_docs/python/tf/errors/OpError)

Whenever possible, the session will raise a more specific subclassof  `OpError`  from the [ `tf.errors` ](https://tensorflow.google.cn/api_docs/python/tf/errors) module.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/errors_impl.py#L66-L80)

```
 __init__(
    node_def,
    op,
    message,
    error_code
)
 
```

Creates a new  `OpError`  indicating that a particular op failed.

#### 参数：
- **`node_def`** : The  `node_def_pb2.NodeDef`  proto representing the op thatfailed, if known; otherwise None.
- **`op`** : The  `ops.Operation`  that failed, if known; otherwise None.
- **`message`** : The message string describing the failure.
- **`error_code`** : The  `error_codes_pb2.Code`  describing the error.


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

