[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/constraints/UnitNorm) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/constraints.py#L91-L118)  
  
  
## Class `UnitNorm`

Constrains the weights incident to each hidden unit to have unit norm.

Inherits From:
[`Constraint`](https://tensorflow.google.cn/api_docs/python/tf/keras/constraints/Constraint)

### Aliases:

  * Class [`tf.compat.v1.keras.constraints.UnitNorm`](/api_docs/python/tf/keras/constraints/UnitNorm)
  * Class [`tf.compat.v1.keras.constraints.unit_norm`](/api_docs/python/tf/keras/constraints/UnitNorm)
  * Class [`tf.compat.v2.keras.constraints.UnitNorm`](/api_docs/python/tf/keras/constraints/UnitNorm)
  * Class [`tf.compat.v2.keras.constraints.unit_norm`](/api_docs/python/tf/keras/constraints/UnitNorm)
  * Class [`tf.keras.constraints.unit_norm`](/api_docs/python/tf/keras/constraints/UnitNorm)

#### Arguments:

  * **`axis`** : integer, axis along which to calculate weight norms. For instance, in a `Dense` layer the weight matrix has shape `(input_dim, output_dim)`, set `axis` to `0` to constrain each weight vector of length `(input_dim,)`. In a `Conv2D` layer with `data_format="channels_last"`, the weight tensor has shape `(rows, cols, input_depth, output_depth)`, set `axis` to `[0, 1, 2]` to constrain the weights of each filter tensor of size `(rows, cols, input_depth)`.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/constraints.py#L108-L109)

    
    
    __init__(axis=0)
    

Initialize self. See help(type(self)) for accurate signature.

## Methods

### `__call__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/constraints.py#L111-L115)

    
    
    __call__(w)
    

Call self as a function.

### `get_config`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/constraints.py#L117-L118)

    
    
    get_config()
    

