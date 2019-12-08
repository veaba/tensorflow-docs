Casts a tensor to type  `int32` . (deprecated)



```
 tf.compat.v1.to_int32(
    x,
    name='ToInt32'
)
 
```


<aside class="warning">**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.
Instructions for updating:
Use [ `tf.cast` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/cast) instead.</aside>


#### Args:

- **`x`** : A  `Tensor`  or  `SparseTensor`  or  `IndexedSlices` .

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor`  or  `SparseTensor`  or  `IndexedSlices`  with same shape as  `x`  with
type  `int32` .



#### Raises:

- **`TypeError`** : If  `x`  cannot be cast to the  `int32` .

