[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/constraints/RadialConstraint)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/constraints.py#L176-L249)  
---|---  
  
## Class `RadialConstraint`

Constrains `Conv2D` kernel weights to be the same for each radius.

Inherits From:
[`Constraint`](https://tensorflow.google.cn/api_docs/python/tf/keras/constraints/Constraint)

### Aliases:

  * Class [`tf.compat.v1.keras.constraints.RadialConstraint`](/api_docs/python/tf/keras/constraints/RadialConstraint)
  * Class [`tf.compat.v1.keras.constraints.radial_constraint`](/api_docs/python/tf/keras/constraints/RadialConstraint)
  * Class [`tf.compat.v2.keras.constraints.RadialConstraint`](/api_docs/python/tf/keras/constraints/RadialConstraint)
  * Class [`tf.compat.v2.keras.constraints.radial_constraint`](/api_docs/python/tf/keras/constraints/RadialConstraint)
  * Class [`tf.keras.constraints.radial_constraint`](/api_docs/python/tf/keras/constraints/RadialConstraint)

For example, the desired output for the following 4-by-4 kernel::

    
    
        kernel = [[v_00, v_01, v_02, v_03],
                  [v_10, v_11, v_12, v_13],
                  [v_20, v_21, v_22, v_23],
                  [v_30, v_31, v_32, v_33]]
    

is this::

    
    
        kernel = [[v_11, v_11, v_11, v_11],
                  [v_11, v_33, v_33, v_11],
                  [v_11, v_33, v_33, v_11],
                  [v_11, v_11, v_11, v_11]]
    

This constraint can be applied to any `Conv2D` layer version, including
`Conv2DTranspose` and `SeparableConv2D`, and with either `"channels_last"` or
`"channels_first"` data format. The method assumes the weight tensor is of
shape `(rows, cols, input_depth, output_depth)`.

## Methods

### `__call__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/constraints.py#L203-L217)

    
    
    __call__(w)
    

Call self as a function.

### `get_config`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/constraints.py#L40-L41)

    
    
    get_config()
    

