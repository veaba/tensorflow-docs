将函数fn映射到元素元素上并返回输出。

**别名** : [ `tf.compat.v1.keras.backend.map_fn` ](/api_docs/python/tf/keras/backend/map_fn), [ `tf.compat.v2.keras.backend.map_fn` ](/api_docs/python/tf/keras/backend/map_fn)

```
 tf.keras.backend.map_fn(
    fn,
    elems,
    name=None,
    dtype=None
)
 
```

#### 参数：
- **`fn`** : Callable that will be called upon each element in elems
- **`elems`** : tensor
- **`name`** : A string name for the map node in the graph
- **`dtype`** : Output data type.


#### 返回：
Tensor with dtype  `dtype` .

