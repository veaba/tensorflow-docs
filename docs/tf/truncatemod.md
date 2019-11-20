[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/truncatemod)  
---  
  
Defined in generated file: `python/ops/gen_math_ops.py`

Returns element-wise remainder of division. This emulates C semantics in that

### Aliases:

  * [`tf.compat.v1.truncatemod`](/api_docs/python/tf/truncatemod)
  * [`tf.compat.v2.truncatemod`](/api_docs/python/tf/truncatemod)

    
    
    tf.truncatemod(
        x,
        y,
        name=None
    )
    

the result here is consistent with a truncating divide. E.g. `truncate(x / y)
* y + truncate_mod(x, y) = x`.

_NOTE_ : `truncatemod` supports broadcasting. More about broadcasting
[here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)

#### Args:

  * **`x`** : A `Tensor`. Must be one of the following types: `int32`, `int64`, `bfloat16`, `half`, `float32`, `float64`.
  * **`y`** : A `Tensor`. Must have the same type as `x`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor`. Has the same type as `x`.

