[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/reduce_prod) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1978-L2011)  
  
  
Computes the product of elements across dimensions of a tensor.

### Aliases:

  * [`tf.compat.v2.math.reduce_prod`](/api_docs/python/tf/math/reduce_prod)
  * [`tf.compat.v2.reduce_prod`](/api_docs/python/tf/math/reduce_prod)
  * [`tf.reduce_prod`](/api_docs/python/tf/math/reduce_prod)

    
    
    tf.math.reduce_prod(
        input_tensor,
        axis=None,
        keepdims=False,
        name=None
    )
    

Reduces `input_tensor` along the dimensions given in `axis`. Unless `keepdims`
is true, the rank of the tensor is reduced by 1 for each entry in `axis`. If
`keepdims` is true, the reduced dimensions are retained with length 1.

If `axis` is None, all dimensions are reduced, and a tensor with a single
element is returned.

#### Args:

  * **`input_tensor`** : The tensor to reduce. Should have numeric type.
  * **`axis`** : The dimensions to reduce. If `None` (the default), reduces all dimensions. Must be in the range `[-rank(input_tensor), rank(input_tensor))`.
  * **`keepdims`** : If true, retains reduced dimensions with length 1.
  * **`name`** : A name for the operation (optional).

#### Returns:

The reduced tensor.

#### Numpy Compatibility

Equivalent to np.prod

