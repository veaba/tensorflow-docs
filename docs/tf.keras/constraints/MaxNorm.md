## Class MaxNorm
MaxNorm weight constraint.
[Constraint](https://tensorflow.google.cn/api_docs/python/tf/keras/constraints/Constraint)Inherits From: 

### Aliases:
- Class tf.compat.v1.keras.constraints.MaxNorm
- Class tf.compat.v1.keras.constraints.max_norm
- Class tf.compat.v2.keras.constraints.MaxNorm
- Class tf.compat.v2.keras.constraints.max_norm
- Class tf.keras.constraints.max_norm
Constrains the weights incident to each hidden unit to have a norm less than or equal to a desired value.
#### Arguments:
- m: the maximum norm for the incoming weights.
- axis: integer, axis along which to calculate weight norms. For instance, in a Dense layer the weight matrix has shape (input_dim, output_dim), set axis to 0 to constrain each weight vector of length (input_dim,). In a Conv2D layer with data_format="channels_last", the weight tensor has shape (rows, cols, input_depth, output_depth), set axis to [0, 1, 2] to constrain the weights of each filter tensor of size (rows, cols, input_depth).
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/constraints.py#L67-L69)


```
 __init__(
    max_value=2,
    axis=0
)
```
Initialize self. See help(type(self)) for accurate signature.
## Methods
### __call__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/constraints.py#L71-L75)


```
 __call__(w)
```
Call self as a function.
### get_config
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/constraints.py#L77-L78)


```
 get_config()
```
