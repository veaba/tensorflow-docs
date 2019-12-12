Returns  `variables`  but with zero gradient w.r.t. every other variable.

**别名** : [ `tf.compat.v1.keras.backend.stop_gradient` ](/api_docs/python/tf/keras/backend/stop_gradient), [ `tf.compat.v2.keras.backend.stop_gradient` ](/api_docs/python/tf/keras/backend/stop_gradient)

```
 tf.keras.backend.stop_gradient(variables)
 
```

#### 参数：
- **`variables`** : Tensor or list of tensors to consider constant with respectto any other variable.


#### 返回：
A single tensor or a list of tensors (depending on the passed argument)that has no gradient with respect to any other variable.

