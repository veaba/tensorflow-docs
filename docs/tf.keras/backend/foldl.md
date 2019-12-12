使用fn从左到右合并元素来减少元素。

**别名** : [ `tf.compat.v1.keras.backend.foldl` ](/api_docs/python/tf/keras/backend/foldl), [ `tf.compat.v2.keras.backend.foldl` ](/api_docs/python/tf/keras/backend/foldl)

```
 tf.keras.backend.foldl(
    fn,
    elems,
    initializer=None,
    name=None
)
 
```

#### 参数：
- **`fn`** : Callable that will be called upon each element in elems and anaccumulator, for instance  `lambda acc, x: acc + x` 
- **`elems`** : tensor
- **`initializer`** : The first value used ( `elems[0]`  in case of None)
- **`name`** : A string name for the foldl node in the graph


#### 返回：
Tensor with same type and shape as  `initializer` .

