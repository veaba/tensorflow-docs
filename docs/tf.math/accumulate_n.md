[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/accumulate_n) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L3021-L3102)  
  
  
Returns the element-wise sum of a list of tensors.

### Aliases:

  * [`tf.compat.v1.accumulate_n`](/api_docs/python/tf/math/accumulate_n)
  * [`tf.compat.v1.math.accumulate_n`](/api_docs/python/tf/math/accumulate_n)
  * [`tf.compat.v2.math.accumulate_n`](/api_docs/python/tf/math/accumulate_n)

    
    
    tf.math.accumulate_n(
        inputs,
        shape=None,
        tensor_dtype=None,
        name=None
    )
    

Optionally, pass `shape` and `tensor_dtype` for shape and type checking,
otherwise, these are inferred.

`accumulate_n` performs the same operation as
[`tf.math.add_n`](https://tensorflow.google.cn/api_docs/python/tf/math/add_n),
but does not wait for all of its inputs to be ready before beginning to sum.
This approach can save memory if inputs are ready at different times, since
minimum temporary storage is proportional to the output size rather than the
inputs' size.

`accumulate_n` is differentiable (but wasn't previous to TensorFlow 1.7).

#### For example:

    
    
    a = tf.constant([[1, 2], [3, 4]])
    b = tf.constant([[5, 0], [0, 6]])
    tf.math.accumulate_n([a, b, a])  # [[7, 4], [6, 14]]
    
    # Explicitly pass shape and type
    tf.math.accumulate_n([a, b, a], shape=[2, 2], tensor_dtype=tf.int32)
                                                                   # [[7,  4],
                                                                   #  [6, 14]]
    

#### Args:

  * **`inputs`** : A list of `Tensor` objects, each with same shape and type.
  * **`shape`** : Expected shape of elements of `inputs` (optional). Also controls the output shape of this op, which may affect type inference in other ops. A value of `None` means "infer the input shape from the shapes in `inputs`".
  * **`tensor_dtype`** : Expected data type of `inputs` (optional). A value of `None` means "infer the input dtype from `inputs[0]`".
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of same shape and type as the elements of `inputs`.

#### Raises:

  * **`ValueError`** : If `inputs` don't all have same shape and dtype or the shape cannot be inferred.

