[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/RegisterGradient) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L2448-L2490)  
  
  
## Class `RegisterGradient`

A decorator for registering the gradient function for an op type.

### Aliases:

  * Class [`tf.compat.v1.RegisterGradient`](/api_docs/python/tf/RegisterGradient)
  * Class [`tf.compat.v2.RegisterGradient`](/api_docs/python/tf/RegisterGradient)

This decorator is only used when defining a new op type. For an op with `m`
inputs and `n` outputs, the gradient function is a function that takes the
original `Operation` and `n` `Tensor` objects (representing the gradients with
respect to each output of the op), and returns `m` `Tensor` objects
(representing the partial gradients with respect to each input of the op).

For example, assuming that operations of type `"Sub"` take two inputs `x` and
`y`, and return a single output `x - y`, the following gradient function would
be registered:

    
    
    @tf.RegisterGradient("Sub")
    def _sub_grad(unused_op, grad):
      return grad, tf.negative(grad)
    

The decorator argument `op_type` is the string type of an operation. This
corresponds to the `OpDef.name` field for the proto that defines the
operation.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L2473-L2485)

    
    
    __init__(op_type)
    

Creates a new decorator with `op_type` as the Operation type.

#### Args:

  * **`op_type`** : The string type of an operation. This corresponds to the `OpDef.name` field for the proto that defines the operation.

#### Raises:

  * **`TypeError`** : If `op_type` is not string.

## Methods

### `__call__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L2487-L2490)

    
    
    __call__(f)
    

Registers the function `f` as gradient function for `op_type`.

