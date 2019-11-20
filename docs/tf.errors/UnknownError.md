[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/errors/UnknownError) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/errors_impl.py#L234-L248)  
---|---  
  
## Class `UnknownError`

Unknown error.

Inherits From:
[`OpError`](https://tensorflow.google.cn/api_docs/python/tf/errors/OpError)

### Aliases:

  * Class [`tf.compat.v1.errors.UnknownError`](/api_docs/python/tf/errors/UnknownError)
  * Class [`tf.compat.v2.errors.UnknownError`](/api_docs/python/tf/errors/UnknownError)

An example of where this error may be returned is if a Status value received
from another address space belongs to an error-space that is not known to this
address space. Also errors raised by APIs that do not return enough error
information may be converted to this error.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/errors_impl.py#L246-L248)

    
    
    __init__(
        node_def,
        op,
        message,
        error_code=UNKNOWN
    )
    

Creates an `UnknownError`.

## Properties

### `error_code`

The integer error code that describes the error.

### `message`

The error message that describes the error.

### `node_def`

The `NodeDef` proto representing the op that failed.

### `op`

The operation that failed, if known.

_N.B._ If the failed op was synthesized at runtime, e.g. a `Send` or `Recv`
op, there will be no corresponding
[`tf.Operation`](https://tensorflow.google.cn/api_docs/python/tf/Operation)
object. In that case, this will return `None`, and you should instead use the
[`tf.errors.OpError.node_def`](https://tensorflow.google.cn/api_docs/python/tf/errors/OpError#node_def)
to discover information about the op.

#### Returns:

The `Operation` that failed, or None.

