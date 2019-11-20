[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/broadcast_dynamic_shape) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/array_ops.py#L357-L379)  
  
  
Computes the shape of a broadcast given symbolic shapes.

### Aliases:

  * [`tf.compat.v1.broadcast_dynamic_shape`](/api_docs/python/tf/broadcast_dynamic_shape)
  * [`tf.compat.v2.broadcast_dynamic_shape`](/api_docs/python/tf/broadcast_dynamic_shape)

    
    
    tf.broadcast_dynamic_shape(
        shape_x,
        shape_y
    )
    

When shape_x and shape_y are Tensors representing shapes (i.e. the result of
calling tf.shape on another Tensor) this computes a Tensor which is the shape
of the result of a broadcasting op applied in tensors of shapes shape_x and
shape_y.

For example, if shape_x is [1, 2, 3] and shape_y is [5, 1, 3], the result is a
Tensor whose value is [5, 2, 3].

This is useful when validating the result of a broadcasting operation when the
tensors do not have statically known shapes.

#### Args:

  * **`shape_x`** : A rank 1 integer `Tensor`, representing the shape of x.
  * **`shape_y`** : A rank 1 integer `Tensor`, representing the shape of y.

#### Returns:

A rank 1 integer `Tensor` representing the broadcasted shape.

