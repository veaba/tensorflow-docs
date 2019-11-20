[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/dtypes/saturate_cast) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L710-L740)  
---|---  
  
Performs a safe saturating cast of `value` to `dtype`.

### Aliases:

  * [`tf.compat.v1.dtypes.saturate_cast`](/api_docs/python/tf/dtypes/saturate_cast)
  * [`tf.compat.v1.saturate_cast`](/api_docs/python/tf/dtypes/saturate_cast)
  * [`tf.compat.v2.dtypes.saturate_cast`](/api_docs/python/tf/dtypes/saturate_cast)
  * [`tf.compat.v2.saturate_cast`](/api_docs/python/tf/dtypes/saturate_cast)
  * [`tf.saturate_cast`](/api_docs/python/tf/dtypes/saturate_cast)

    
    
    tf.dtypes.saturate_cast(
        value,
        dtype,
        name=None
    )
    

This function casts the input to `dtype` without applying any scaling. If
there is a danger that values would over or underflow in the cast, this op
applies the appropriate clamping before the cast.

#### Args:

  * **`value`** : A `Tensor`.
  * **`dtype`** : The desired output `DType`.
  * **`name`** : A name for the operation (optional).

#### Returns:

`value` safely cast to `dtype`.

