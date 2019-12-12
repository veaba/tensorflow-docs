Provides a scope within which the learning phase is equal to  `value` .

**别名** : [ `tf.compat.v1.keras.backend.learning_phase_scope` ](/api_docs/python/tf/keras/backend/learning_phase_scope), [ `tf.compat.v2.keras.backend.learning_phase_scope` ](/api_docs/python/tf/keras/backend/learning_phase_scope)

```
 tf.keras.backend.learning_phase_scope(value)
 
```

在退出作用域时，学习阶段将恢复到其原始值。

#### 参数：
- **`value`** : Learning phase value, either 0 or 1 (integers).


#### 收益率：
None.

#### 加薪：
- **`ValueError`** : if  `value`  is neither  `0`  nor  `1` .
