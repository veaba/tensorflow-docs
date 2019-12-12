检索对自定义对象的全局词典的实时引用。

**别名** : [ `tf.compat.v1.keras.utils.get_custom_objects` ](/api_docs/python/tf/keras/utils/get_custom_objects), [ `tf.compat.v2.keras.utils.get_custom_objects` ](/api_docs/python/tf/keras/utils/get_custom_objects)

```
 tf.keras.utils.get_custom_objects()
 
```

Updating and clearing custom objects using  `custom_object_scope` is preferred, but  `get_custom_objects`  canbe used to directly access  `_GLOBAL_CUSTOM_OBJECTS` .

#### 示例：


```
     get_custom_objects().clear()
    get_custom_objects()['MyObject'] = MyObject
 
```

#### 返回：
Global dictionary of names to classes ( `_GLOBAL_CUSTOM_OBJECTS` ).

