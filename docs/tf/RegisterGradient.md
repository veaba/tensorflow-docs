![](https://tensorflow.google.cn/images/tf_logo_32px.png)
## Class  `RegisterGradient` 

A decorator for registering the gradient function for an op type.

### Aliases:

- Class [ `tf.compat.v1.RegisterGradient` ](/api_docs/python/tf/RegisterGradient)

- Class [ `tf.compat.v2.RegisterGradient` ](/api_docs/python/tf/RegisterGradient)

This decorator is only used when defining a new op type. For an opwith  `m`  inputs and  `n`  outputs, the gradient function is a functionthat takes the original  `Operation`  and  `n`   `Tensor`  objects(representing the gradients with respect to each output of the op),and returns  `m`   `Tensor`  objects (representing the partial gradientswith respect to each input of the op).

For example, assuming that operations of type  `"Sub"`  take twoinputs  `x`  and  `y` , and return a single output  `x - y` , thefollowing gradient function would be registered:


```python
@tf.RegisterGradient("Sub")
def _sub_grad(unused_op, grad):
&nbsp; return grad, tf.negative(grad)

```


The decorator argument  `op_type`  is the string type of anoperation. This corresponds to the  `OpDef.name`  field for the protothat defines the operation.

##  `__init__` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L2473-L2485)


```python
__init__(op_type)

```


Creates a new decorator with  `op_type`  as the Operation type.

#### Args:

- **`op_type`** : The string type of an operation. This corresponds to the `OpDef.name`  field for the proto that defines the operation.

#### Raises:

- **`TypeError`** : If  `op_type`  is not string.

## Methods

###  `__call__` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L2487-L2490)


```python
__call__(f)

```


Registers the function  `f`  as gradient function for  `op_type` .
