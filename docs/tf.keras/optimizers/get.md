检索Keras优化器实例。

**别名** : [ `tf.compat.v1.keras.optimizers.get` ](/api_docs/python/tf/keras/optimizers/get), [ `tf.compat.v2.keras.optimizers.get` ](/api_docs/python/tf/keras/optimizers/get), [ `tf.compat.v2.optimizers.get` ](/api_docs/python/tf/keras/optimizers/get), [ `tf.optimizers.get` ](/api_docs/python/tf/keras/optimizers/get)

```
 tf.keras.optimizers.get(identifier)
 
```

#### 参数：
- **`identifier`** : Optimizer identifier, one of
    - String: name of an optimizer
    - Dictionary: configuration dictionary. - Keras Optimizer instance (itwill be returned unchanged). - TensorFlow Optimizer instance (itwill be wrapped as a Keras Optimizer).


#### 返回：
Keras优化器实例。

#### 加薪：
- **`ValueError`** : If  `identifier`  cannot be interpreted.
