[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/array_ops.py#L2633-L2646)  
---  
  
A placeholder op that passes through `input` when its output is not fed.

    
    
    tf.compat.v1.placeholder_with_default(
        input,
        shape,
        name=None
    )
    

#### Args:

  * **`input`** : A `Tensor`. The default value to produce when output is not fed.
  * **`shape`** : A [`tf.TensorShape`](https://tensorflow.google.cn/api_docs/python/tf/TensorShape) or list of `int`s. The (possibly partial) shape of the tensor.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor`. Has the same type as `input`.

