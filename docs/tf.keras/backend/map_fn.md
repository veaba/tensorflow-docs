[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/map_fn) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L5791-L5804)  
---|---  
  
Map the function fn over the elements elems and return the outputs.

### Aliases:

  * [`tf.compat.v1.keras.backend.map_fn`](/api_docs/python/tf/keras/backend/map_fn)
  * [`tf.compat.v2.keras.backend.map_fn`](/api_docs/python/tf/keras/backend/map_fn)

    
    
    tf.keras.backend.map_fn(
        fn,
        elems,
        name=None,
        dtype=None
    )
    

#### Arguments:

  * **`fn`** : Callable that will be called upon each element in elems
  * **`elems`** : tensor
  * **`name`** : A string name for the map node in the graph
  * **`dtype`** : Output data type.

#### Returns:

Tensor with dtype `dtype`.

