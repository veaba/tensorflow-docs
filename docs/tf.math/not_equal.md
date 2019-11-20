[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/not_equal) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1309-L1325)  
  
  
Returns the truth value of (x != y) element-wise.

### Aliases:

  * [`tf.compat.v1.math.not_equal`](/api_docs/python/tf/math/not_equal)
  * [`tf.compat.v1.not_equal`](/api_docs/python/tf/math/not_equal)
  * [`tf.compat.v2.math.not_equal`](/api_docs/python/tf/math/not_equal)
  * [`tf.compat.v2.not_equal`](/api_docs/python/tf/math/not_equal)
  * [`tf.not_equal`](/api_docs/python/tf/math/not_equal)

    
    
    tf.math.not_equal(
        x,
        y,
        name=None
    )
    

### Used in the guide:

  * [tf.data: Build TensorFlow input pipelines](https://tensorflow.google.cn/guide/data)
  * [Masking and padding with Keras](https://tensorflow.google.cn/guide/keras/masking_and_padding)

### Used in the tutorials:

  * [Unicode strings](https://tensorflow.google.cn/tutorials/load_data/unicode)

**NOTE** : `NotEqual` supports broadcasting. More about broadcasting
[here](https://docs.scipy.org/doc/numpy-1.13.0/user/basics.broadcasting.html)

#### Args:

  * **`x`** : A `Tensor` or `SparseTensor` or `IndexedSlices`.
  * **`y`** : A `Tensor` or `SparseTensor` or `IndexedSlices`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of type bool with the same size as that of x or y.

