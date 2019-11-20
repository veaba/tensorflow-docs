[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/debugging/assert_proper_iterable)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/check_ops.py#L93-L121)  
---|---  
  
Static assert that values is a "proper" iterable.

### Aliases:

  * [`tf.compat.v1.assert_proper_iterable`](/api_docs/python/tf/debugging/assert_proper_iterable)
  * [`tf.compat.v1.debugging.assert_proper_iterable`](/api_docs/python/tf/debugging/assert_proper_iterable)
  * [`tf.compat.v2.debugging.assert_proper_iterable`](/api_docs/python/tf/debugging/assert_proper_iterable)

    
    
    tf.debugging.assert_proper_iterable(values)
    

`Ops` that expect iterables of `Tensor` can call this to validate input.
Useful since `Tensor`, `ndarray`, byte/text type are all iterables themselves.

#### Args:

  * **`values`** : Object to be checked.

#### Raises:

  * **`TypeError`** : If `values` is not iterable or is one of `Tensor`, `SparseTensor`, `np.array`, [`tf.compat.bytes_or_text_types`](https://tensorflow.google.cn/api_docs/python/tf/compat#bytes_or_text_types).

