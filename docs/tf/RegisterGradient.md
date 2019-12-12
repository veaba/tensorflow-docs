

## Class  `RegisterGradient` 
用于为操作类型注册渐变函数的修饰程序。

**别名** : [ `tf.compat.v1.RegisterGradient` ](/api_docs/python/tf/RegisterGradient), [ `tf.compat.v2.RegisterGradient` ](/api_docs/python/tf/RegisterGradient)

This decorator is only used when defining a new op type. For an opwith  `m`  inputs and  `n`  outputs, the gradient function is a functionthat takes the original  `Operation`  and  `n`   `Tensor`  objects(representing the gradients with respect to each output of the op),and returns  `m`   `Tensor`  objects (representing the partial gradientswith respect to each input of the op).

For example, assuming that operations of type  `"Sub"`  take twoinputs  `x`  and  `y` , and return a single output  `x - y` , thefollowing gradient function would be registered:

```
 @tf.RegisterGradient("Sub")
def _sub_grad(unused_op, grad):
  return grad, tf.negative(grad)
 
```

The decorator argument  `op_type`  is the string type of anoperation. This corresponds to the  `OpDef.name`  field for the protothat defines the operation.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L2473-L2485)

```
 __init__(op_type)
 
```

Creates a new decorator with  `op_type`  as the Operation type.

#### 参数：
- **`op_type`** : The string type of an operation. This corresponds to the `OpDef.name`  field for the proto that defines the operation.


#### 加薪：
- **`TypeError`** : If  `op_type`  is not string.


## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L2487-L2490)

```
 __call__(f)
 
```

Registers the function  `f`  as gradient function for  `op_type` .

