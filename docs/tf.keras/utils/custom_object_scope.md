Provides a scope that changes to  `_GLOBAL_CUSTOM_OBJECTS`  cannot escape.

**别名** : [ `tf.compat.v1.keras.utils.custom_object_scope` ](/api_docs/python/tf/keras/utils/custom_object_scope), [ `tf.compat.v2.keras.utils.custom_object_scope` ](/api_docs/python/tf/keras/utils/custom_object_scope)

```
 tf.keras.utils.custom_object_scope(*args)
 
```

Convenience wrapper for  `CustomObjectScope` .Code within a  `with`  statement will be able to access custom objectsby name. Changes to global custom objects persistwithin the enclosing  `with`  statement. At end of the  `with`  statement,global custom objects are reverted to stateat beginning of the  `with`  statement.

#### 示例：
Consider a custom object  `MyObject` 

```
     with custom_object_scope({'MyObject':MyObject}):
        layer = Dense(..., kernel_regularizer='MyObject')
        # save, load, etc. will recognize custom object by name
 
```

#### 参数：
- **`*args`** : Variable length list of dictionaries of name,class pairs to add to custom objects.


#### 返回：
Object of type  `CustomObjectScope` .

