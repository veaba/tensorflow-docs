[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/zero_fraction) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/nn_impl.py#L677-L715)  
  
  
Returns the fraction of zeros in `value`.

### Aliases:

  * [`tf.compat.v1.math.zero_fraction`](/api_docs/python/tf/math/zero_fraction)
  * [`tf.compat.v1.nn.zero_fraction`](/api_docs/python/tf/math/zero_fraction)
  * [`tf.compat.v2.math.zero_fraction`](/api_docs/python/tf/math/zero_fraction)
  * [`tf.compat.v2.nn.zero_fraction`](/api_docs/python/tf/math/zero_fraction)
  * [`tf.nn.zero_fraction`](/api_docs/python/tf/math/zero_fraction)

    
    
    tf.math.zero_fraction(
        value,
        name=None
    )
    

If `value` is empty, the result is `nan`.

This is useful in summaries to measure and report sparsity. For example,

    
    
        z = tf.nn.relu(...)
        summ = tf.compat.v1.summary.scalar('sparsity', tf.nn.zero_fraction(z))
    

#### Args:

  * **`value`** : A tensor of numeric type.
  * **`name`** : A name for the operation (optional).

#### Returns:

The fraction of zeros in `value`, with type `float32`.

