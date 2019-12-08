Retrieves a live reference to the global dictionary of custom objects.



### Aliases:

- [ `tf.compat.v1.keras.utils.get_custom_objects` ](/api_docs/python/tf/keras/utils/get_custom_objects)

- [ `tf.compat.v2.keras.utils.get_custom_objects` ](/api_docs/python/tf/keras/utils/get_custom_objects)



```
 tf.keras.utils.get_custom_objects()
 
```

Updating and clearing custom objects using  `custom_object_scope` 
is preferred, but  `get_custom_objects`  can
be used to directly access  `_GLOBAL_CUSTOM_OBJECTS` .



#### Example:


```
     get_custom_objects().clear()
    get_custom_objects()['MyObject'] = MyObject
 
```



#### Returns:
Global dictionary of names to classes ( `_GLOBAL_CUSTOM_OBJECTS` ).

