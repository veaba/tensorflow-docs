Reduce elems using fn to combine them from left to right.



### Aliases:

- [ `tf.compat.v1.keras.backend.foldl` ](/api_docs/python/tf/keras/backend/foldl)

- [ `tf.compat.v2.keras.backend.foldl` ](/api_docs/python/tf/keras/backend/foldl)



```
 tf.keras.backend.foldl(
    fn,
    elems,
    initializer=None,
    name=None
)
 
```



#### Arguments:

- **`fn`** : Callable that will be called upon each element in elems and an
accumulator, for instance  `lambda acc, x: acc + x` 

- **`elems`** : tensor

- **`initializer`** : The first value used ( `elems[0]`  in case of None)

- **`name`** : A string name for the foldl node in the graph



#### Returns:
Tensor with same type and shape as  `initializer` .

