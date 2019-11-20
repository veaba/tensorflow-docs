[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/linalg/global_norm) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/clip_ops.py#L187-L234)  
  
  
Computes the global norm of multiple tensors.

### Aliases:

  * [`tf.compat.v1.global_norm`](/api_docs/python/tf/linalg/global_norm)
  * [`tf.compat.v1.linalg.global_norm`](/api_docs/python/tf/linalg/global_norm)
  * [`tf.compat.v2.linalg.global_norm`](/api_docs/python/tf/linalg/global_norm)

    
    
    tf.linalg.global_norm(
        t_list,
        name=None
    )
    

Given a tuple or list of tensors `t_list`, this operation returns the global
norm of the elements in all tensors in `t_list`. The global norm is computed
as:

`global_norm = sqrt(sum([l2norm(t)**2 for t in t_list]))`

Any entries in `t_list` that are of type None are ignored.

#### Args:

  * **`t_list`** : A tuple or list of mixed `Tensors`, `IndexedSlices`, or None.
  * **`name`** : A name for the operation (optional).

#### Returns:

A 0-D (scalar) `Tensor` of type `float`.

#### Raises:

  * **`TypeError`** : If `t_list` is not a sequence.

