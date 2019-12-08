Return the elements, either from  `x`  or  `y` , depending on the  `condition` .



### Aliases:

- [ `tf.compat.v1.where_v2` ](/api_docs/python/tf/where)

- [ `tf.compat.v2.where` ](/api_docs/python/tf/where)



```
 tf.where(
    condition,
    x=None,
    y=None,
    name=None
)
 
```



### Used in the guide:

- [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)



### Used in the tutorials:

- [Better performance with tf.function](https://tensorflow.google.cn/tutorials/customization/performance)

- [Unicode strings](https://tensorflow.google.cn/tutorials/load_data/unicode)

If both  `x`  and  `y`  are None, then this operation returns the coordinates of
true elements of  `condition` .  The coordinates are returned in a 2-D tensor
where the first dimension (rows) represents the number of true elements, and
the second dimension (columns) represents the coordinates of the true
elements. Keep in mind, the shape of the output tensor can vary depending on
how many true values there are in input. Indices are output in row-major
order.

If both non-None,  `condition` ,  `x`  and  `y`  must be broadcastable to the same
shape.

The  `condition`  tensor acts as a mask that chooses, based on the value at each
element, whether the corresponding element / row in the output should be taken
from  `x`  (if true) or  `y`  (if false).



#### Args:

- **`condition`** : A  `Tensor`  of type  `bool` 

- **`x`** : A Tensor which is of the same type as  `y` , and may be broadcastable with
 `condition`  and  `y` .

- **`y`** : A Tensor which is of the same type as  `x` , and may be broadcastable with
 `condition`  and  `x` .

- **`name`** : A name of the operation (optional).



#### Returns:
A  `Tensor`  with the same type as  `x`  and  `y` , and shape that
  is broadcast from  `condition` ,  `x` , and  `y` , if  `x` ,  `y`  are non-None.
A  `Tensor`  with shape  `(num_true, dim_size(condition))` .



#### Raises:

- **`ValueError`** : When exactly one of  `x`  or  `y`  is non-None.

