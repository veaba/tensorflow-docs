[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/is_non_decreasing) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/check_ops.py#L2011-L2042)  
  
  
Returns `True` if `x` is non-decreasing.

### Aliases:

  * [`tf.compat.v1.debugging.is_non_decreasing`](/api_docs/python/tf/math/is_non_decreasing)
  * [`tf.compat.v1.is_non_decreasing`](/api_docs/python/tf/math/is_non_decreasing)
  * [`tf.compat.v1.math.is_non_decreasing`](/api_docs/python/tf/math/is_non_decreasing)
  * [`tf.compat.v2.math.is_non_decreasing`](/api_docs/python/tf/math/is_non_decreasing)

    
    
    tf.math.is_non_decreasing(
        x,
        name=None
    )
    

Elements of `x` are compared in row-major order. The tensor `[x[0],...]` is
non-decreasing if for every adjacent pair we have `x[i] <= x[i+1]`. If `x` has
less than two elements, it is trivially non-decreasing.

See also: `is_strictly_increasing`

#### Args:

  * **`x`** : Numeric `Tensor`.
  * **`name`** : A name for this operation (optional). Defaults to "is_non_decreasing"

#### Returns:

Boolean `Tensor`, equal to `True` iff `x` is non-decreasing.

#### Raises:

  * **`TypeError`** : if `x` is not a numeric tensor.

