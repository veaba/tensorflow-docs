提取张量的一个跨步片（通用python数组索引）。

**别名** : [ `tf.compat.v1.strided_slice` ](/api_docs/python/tf/strided_slice), [ `tf.compat.v2.strided_slice` ](/api_docs/python/tf/strided_slice)

```
 tf.strided_slice(
    input_,
    begin,
    end,
    strides=None,
    begin_mask=0,
    end_mask=0,
    ellipsis_mask=0,
    new_axis_mask=0,
    shrink_axis_mask=0,
    var=None,
    name=None
)
 
```

**Instead of calling this op directly most users will want to use theNumPy-style slicing syntax (e.g.  `tensor[..., 3:4:-1, tf.newaxis, 3]` ), whichis supported via [ `tf.Tensor.**getitem** ` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor#__getitem__) and [ `tf.Variable.**getitem** ` ](https://tensorflow.google.cn/api_docs/python/tf/Variable#__getitem__).** The interface of this op is a low-level encoding of the slicing syntax.

Roughly speaking, this op extracts a slice of size  `(end-begin)/stride` from the given  `input_`  tensor. Starting at the location specified by  `begin` the slice continues by adding  `stride`  to the index until all dimensions arenot less than  `end` .Note that a stride can be negative, which causes a reverse slice.

Given a Python slice  `input[spec0, spec1, ..., specn]` ,this function will be called as follows.

 `begin` ,  `end` , and  `strides`  will be vectors of length n.n in general is not equal to the rank of the  `input_`  tensor.

In each mask field ( `begin_mask` ,  `end_mask` ,  `ellipsis_mask` , `new_axis_mask` ,  `shrink_axis_mask` ) the ith bit will correspond tothe ith spec.

If the ith bit of  `begin_mask`  is set,  `begin[i]`  is ignored andthe fullest possible range in that dimension is used instead. `end_mask`  works analogously, except with the end range.

 `foo[5:,:,:3]`  on a 7x8x9 tensor is equivalent to  `foo[5:7,0:8,0:3]` . `foo[::-1]`  reverses a tensor with shape 8.

If the ith bit of  `ellipsis_mask`  is set, as many unspecified dimensionsas needed will be inserted between other dimensions. Only onenon-zero bit is allowed in  `ellipsis_mask` .

For example  `foo[3:5,...,4:5]`  on a shape 10x3x3x10 tensor isequivalent to  `foo[3:5,:,:,4:5]`  and `foo[3:5,...]`  is equivalent to  `foo[3:5,:,:,:]` .

If the ith bit of  `new_axis_mask`  is set, then  `begin` , `end` , and  `stride`  are ignored and a new length 1 dimension isadded at this point in the output tensor.

For example, `foo[:4, tf.newaxis, :2]`  would produce a shape  `(4, 1, 2)`  tensor.

If the ith bit of  `shrink_axis_mask`  is set, it implies that the ithspecification shrinks the dimensionality by 1, taking on the value at index `begin[i]` .  `end[i]`  and  `strides[i]`  are ignored in this case. For example inPython one might do  `foo[:, 3, :]`  which would result in  `shrink_axis_mask` equal to 2.

注意： `begin`  and  `end`  are zero-indexed. `strides`  entries must be non-zero.

```
 t = tf.constant([[[1, 1, 1], [2, 2, 2]],
                 [[3, 3, 3], [4, 4, 4]],
                 [[5, 5, 5], [6, 6, 6]]])
tf.strided_slice(t, [1, 0, 0], [2, 1, 3], [1, 1, 1])  # [[[3, 3, 3]]]
tf.strided_slice(t, [1, 0, 0], [2, 2, 3], [1, 1, 1])  # [[[3, 3, 3],
                                                      #   [4, 4, 4]]]
tf.strided_slice(t, [1, -1, 0], [2, -3, 3], [1, -1, 1])  # [[[4, 4, 4],
                                                         #   [3, 3, 3]]]
 
```

#### 参数：
- **`input_`** : A  `Tensor` .
- **`begin`** : An  `int32`  or  `int64`   `Tensor` .
- **`end`** : An  `int32`  or  `int64`   `Tensor` .
- **`strides`** : An  `int32`  or  `int64`   `Tensor` .
- **`begin_mask`** : An  `int32`  mask.
- **`end_mask`** : An  `int32`  mask.
- **`ellipsis_mask`** : An  `int32`  mask.
- **`new_axis_mask`** : An  `int32`  mask.
- **`shrink_axis_mask`** : An  `int32`  mask.
- **`var`** : The variable corresponding to  `input_`  or None
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  the same type as  `input` .

