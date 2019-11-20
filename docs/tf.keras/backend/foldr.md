[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/foldr) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L5824-L5838)  
---|---  
  
Reduce elems using fn to combine them from right to left.

### Aliases:

  * [`tf.compat.v1.keras.backend.foldr`](/api_docs/python/tf/keras/backend/foldr)
  * [`tf.compat.v2.keras.backend.foldr`](/api_docs/python/tf/keras/backend/foldr)

    
    
    tf.keras.backend.foldr(
        fn,
        elems,
        initializer=None,
        name=None
    )
    

#### Arguments:

  * **`fn`** : Callable that will be called upon each element in elems and an accumulator, for instance `lambda acc, x: acc + x`
  * **`elems`** : tensor
  * **`initializer`** : The first value used (`elems[-1]` in case of None)
  * **`name`** : A string name for the foldr node in the graph

#### Returns:

Same type and shape as initializer

