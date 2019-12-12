Compute number of unique elements along last dimension of  `a` .

**别名** : [ `tf.compat.v1.sets.set_size` ](/api_docs/python/tf/sets/size), [ `tf.compat.v1.sets.size` ](/api_docs/python/tf/sets/size), [ `tf.compat.v2.sets.size` ](/api_docs/python/tf/sets/size)

```
 tf.sets.size(
    a,
    validate_indices=True
)
 
```

#### 参数：
- **`a`** :  `SparseTensor` , with indices sorted in row-major order.
- **`validate_indices`** : Whether to validate the order and range of sparse indicesin  `a` .


#### 返回：
 `int32`   `Tensor`  of set sizes. For  `a`  ranked  `n` , this is a  `Tensor`  withrank  `n-1` , and the same 1st  `n-1`  dimensions as  `a` . Each value is thenumber of unique elements in the corresponding  `[0...n-1]`  dimension of  `a` .

#### 加薪：
- **`TypeError`** : If  `a`  is an invalid types.
