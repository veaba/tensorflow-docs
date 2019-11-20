[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/input.py#L81-L114)  
---  
  
Returns tensor `num_epochs` times and then raises an `OutOfRange` error.
(deprecated)

    
    
    tf.compat.v1.train.limit_epochs(
        tensor,
        num_epochs=None,
        name=None
    )
    

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Queue-based input pipelines have been
replaced by [`tf.data`](https://tensorflow.google.cn/api_docs/python/tf/data).
Use `tf.data.Dataset.from_tensors(tensor).repeat(num_epochs)`. **Note:**
creates local counter `epochs`. Use `local_variables_initializer()` to
initialize local variables.

#### Args:

  * **`tensor`** : Any `Tensor`.
  * **`num_epochs`** : A positive integer (optional). If specified, limits the number of steps the output tensor may be evaluated.
  * **`name`** : A name for the operations (optional).

#### Returns:

tensor or `OutOfRange`.

#### Raises:

  * **`ValueError`** : if `num_epochs` is invalid.

