从张量中提取一片。

**别名** : [ `tf.compat.v1.slice` ](/api_docs/python/tf/slice), [ `tf.compat.v2.slice` ](/api_docs/python/tf/slice)

```
 tf.slice(
    input_,
    begin,
    size,
    name=None
)
 
```

This operation extracts a slice of size  `size`  from a tensor  `input_`  startingat the location specified by  `begin` . The slice  `size`  is represented as atensor shape, where  `size[i]`  is the number of elements of the 'i'th dimensionof  `input_`  that you want to slice. The starting location ( `begin` ) for theslice is represented as an offset in each dimension of  `input_` . In otherwords,  `begin[i]`  is the offset into the i'th dimension of  `input_`  that youwant to slice from.

Note that [ `tf.Tensor.**getitem** ` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor#__getitem__) is typically a more pythonic way toperform slices, as it allows you to write  `foo[3:7, :-2]`  instead of `tf.slice(foo, [3, 0], [4, foo.get_shape()[1]-2])` .

 `begin`  is zero-based;  `size`  is one-based. If  `size[i]`  is -1,all remaining elements in dimension i are included in theslice. In other words, this is equivalent to setting:

 `size[i] = input_.dim_size(i) - begin[i]` 

此操作要求：

 `0 <= begin[i] <= begin[i] + size[i] <= Di  for i in [0, n]` 

#### 例如：


```
 t = tf.constant([[[1, 1, 1], [2, 2, 2]],
                 [[3, 3, 3], [4, 4, 4]],
                 [[5, 5, 5], [6, 6, 6]]])
tf.slice(t, [1, 0, 0], [1, 1, 3])  # [[[3, 3, 3]]]
tf.slice(t, [1, 0, 0], [1, 2, 3])  # [[[3, 3, 3],
                                   #   [4, 4, 4]]]
tf.slice(t, [1, 0, 0], [2, 1, 3])  # [[[3, 3, 3]],
                                   #  [[5, 5, 5]]]
 
```

#### 参数：
- **`input_`** : A  `Tensor` .
- **`begin`** : An  `int32`  or  `int64`   `Tensor` .
- **`size`** : An  `int32`  or  `int64`   `Tensor` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  the same type as  `input_` .

