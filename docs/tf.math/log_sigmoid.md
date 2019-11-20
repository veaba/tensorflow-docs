[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/log_sigmoid) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L3135-L3153)  
  
  
Computes log sigmoid of `x` element-wise.

### Aliases:

  * [`tf.compat.v1.log_sigmoid`](/api_docs/python/tf/math/log_sigmoid)
  * [`tf.compat.v1.math.log_sigmoid`](/api_docs/python/tf/math/log_sigmoid)
  * [`tf.compat.v2.math.log_sigmoid`](/api_docs/python/tf/math/log_sigmoid)

    
    
    tf.math.log_sigmoid(
        x,
        name=None
    )
    

Specifically, `y = log(1 / (1 + exp(-x)))`. For numerical stability, we use `y
= -tf.nn.softplus(-x)`.

#### Args:

  * **`x`** : A Tensor with type `float32` or `float64`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A Tensor with the same type as `x`.

