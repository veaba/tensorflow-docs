返回学习阶段标志。

**别名** : [ `tf.compat.v1.keras.backend.learning_phase` ](/api_docs/python/tf/keras/backend/learning_phase), [ `tf.compat.v2.keras.backend.learning_phase` ](/api_docs/python/tf/keras/backend/learning_phase)

```
 tf.keras.backend.learning_phase()
 
```

The learning phase flag is a bool tensor (0 = test, 1 = train)to be passed as input to any Keras functionthat uses a different behavior at train time and test time.

#### 返回：
学习阶段（标量整数张量或python整数）。

