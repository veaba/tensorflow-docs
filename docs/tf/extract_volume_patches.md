Extract  `patches`  from  `input`  and put them in the "depth" output dimension. 3D extension of  `extract_image_patches` .

**别名** : [ `tf.compat.v1.extract_volume_patches` ](/api_docs/python/tf/extract_volume_patches), [ `tf.compat.v2.extract_volume_patches` ](/api_docs/python/tf/extract_volume_patches)

```
 tf.extract_volume_patches(
    input,
    ksizes,
    strides,
    padding,
    name=None
)
 
```

#### 参数：
- **`input`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` ,  `int32` ,  `uint8` ,  `int16` ,  `int8` ,  `int64` ,  `bfloat16` ,  `uint16` ,  `half` ,  `uint32` ,  `uint64` .5-D Tensor with shape  `[batch, in_planes, in_rows, in_cols, depth]` .
- **`ksizes`** : A list of  `ints`  that has length  `>= 5` .The size of the sliding window for each dimension of  `input` .
- **`strides`** : A list of  `ints`  that has length  `>= 5` .1-D of length 5. How far the centers of two consecutive patches are in `input` . Must be:  `[1, stride_planes, stride_rows, stride_cols, 1]` .
- **`padding`** : A  `string`  from:  `"SAME", "VALID"` .The type of padding algorithm to use.

We specify the size-related attributes as:


```
       ksizes = [1, ksize_planes, ksize_rows, ksize_cols, 1]
      strides = [1, stride_planes, strides_rows, strides_cols, 1]
 
```

- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `input` .

