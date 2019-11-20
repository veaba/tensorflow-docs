[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/manual_variable_initialization)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L252-L266)  
  
  
Sets the manual variable initialization flag.

### Aliases:

  * [`tf.compat.v1.keras.backend.manual_variable_initialization`](/api_docs/python/tf/keras/backend/manual_variable_initialization)
  * [`tf.compat.v2.keras.backend.manual_variable_initialization`](/api_docs/python/tf/keras/backend/manual_variable_initialization)

    
    
    tf.keras.backend.manual_variable_initialization(value)
    

This boolean flag determines whether variables should be initialized as they
are instantiated (default), or if the user should handle the initialization
(e.g. via
[`tf.compat.v1.initialize_all_variables()`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/initialize_all_variables)).

#### Arguments:

  * **`value`** : Python boolean.

