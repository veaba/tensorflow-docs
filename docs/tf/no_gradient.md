[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/no_gradient) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L2493-L2525)  
  
  
Specifies that ops of type `op_type` is not differentiable.

### Aliases:

  * [`tf.compat.v1.NoGradient`](/api_docs/python/tf/no_gradient)
  * [`tf.compat.v1.NotDifferentiable`](/api_docs/python/tf/no_gradient)
  * [`tf.compat.v1.no_gradient`](/api_docs/python/tf/no_gradient)
  * [`tf.compat.v2.no_gradient`](/api_docs/python/tf/no_gradient)

    
    
    tf.no_gradient(op_type)
    

This function should _not_ be used for operations that have a well-defined
gradient that is not yet implemented.

This function is only used when defining a new op type. It may be used for ops
such as [`tf.size()`](https://tensorflow.google.cn/api_docs/python/tf/size)
that are not differentiable. For example:

    
    
    tf.no_gradient("Size")
    

The gradient computed for 'op_type' will then propagate zeros.

For ops that have a well-defined gradient but are not yet implemented, no
declaration should be made, and an error _must_ be thrown if an attempt to
request its gradient is made.

#### Args:

  * **`op_type`** : The string type of an operation. This corresponds to the `OpDef.name` field for the proto that defines the operation.

#### Raises:

  * **`TypeError`** : If `op_type` is not a string.

