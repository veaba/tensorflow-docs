[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/utils/get_custom_objects) |
[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/generic_utils.py#L107-L125)  
---|---  
  
Retrieves a live reference to the global dictionary of custom objects.

### Aliases:

  * [`tf.compat.v1.keras.utils.get_custom_objects`](/api_docs/python/tf/keras/utils/get_custom_objects)
  * [`tf.compat.v2.keras.utils.get_custom_objects`](/api_docs/python/tf/keras/utils/get_custom_objects)

    
    
    tf.keras.utils.get_custom_objects()
    

Updating and clearing custom objects using `custom_object_scope` is preferred,
but `get_custom_objects` can be used to directly access
`_GLOBAL_CUSTOM_OBJECTS`.

#### Example:

    
    
        get_custom_objects().clear()
        get_custom_objects()['MyObject'] = MyObject
    

#### Returns:

Global dictionary of names to classes (`_GLOBAL_CUSTOM_OBJECTS`).

