[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/foldl) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L5807-L5821)  
---|---  
  
Reduce elems using fn to combine them from left to right.

### Aliases:

  * [`tf.compat.v1.keras.backend.foldl`](/api_docs/python/tf/keras/backend/foldl)
  * [`tf.compat.v2.keras.backend.foldl`](/api_docs/python/tf/keras/backend/foldl)

    
    
    tf.keras.backend.foldl(
        fn,
        elems,
        initializer=None,
        name=None
    )
    

#### Arguments:

  * **`fn`** : Callable that will be called upon each element in elems and an accumulator, for instance `lambda acc, x: acc + x`
  * **`elems`** : tensor
  * **`initializer`** : The first value used (`elems[0]` in case of None)
  * **`name`** : A string name for the foldl node in the graph

#### Returns:

Tensor with same type and shape as `initializer`.

