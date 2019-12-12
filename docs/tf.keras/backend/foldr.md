使用fn从右到左合并元素来减少元素。

**别名** : [ `tf.compat.v1.keras.backend.foldr` ](/api_docs/python/tf/keras/backend/foldr), [ `tf.compat.v2.keras.backend.foldr` ](/api_docs/python/tf/keras/backend/foldr)

```
 tf.keras.backend.foldr(
    fn,
    elems,
    initializer=None,
    name=None
)
 
```

#### 参数：
- **`fn`** : Callable that will be called upon each element in elems and anaccumulator, for instance  `lambda acc, x: acc + x` 
- **`elems`** : tensor
- **`initializer`** : The first value used ( `elems[-1]`  in case of None)
- **`name`** : A string name for the foldr node in the graph


#### 返回：
与初始值设定项相同的类型和形状

