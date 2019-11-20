[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/function) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L3752-L3782)  
  
  
Instantiates a Keras function.

### Aliases:

  * [`tf.compat.v1.keras.backend.function`](/api_docs/python/tf/keras/backend/function)
  * [`tf.compat.v2.keras.backend.function`](/api_docs/python/tf/keras/backend/function)

    
    
    tf.keras.backend.function(
        inputs,
        outputs,
        updates=None,
        name=None,
        **kwargs
    )
    

#### Arguments:

  * **`inputs`** : List of placeholder tensors.
  * **`outputs`** : List of output tensors.
  * **`updates`** : List of update ops.
  * **`name`** : String, name of function.
  * **`**kwargs`** : Passed to `tf.Session.run`.

#### Returns:

Output values as Numpy arrays.

#### Raises:

  * **`ValueError`** : if invalid kwargs are passed in or if in eager execution.

