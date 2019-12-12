Extract  `patches`  from  `images`  and put them in the "depth" output dimension.

```
 tf.compat.v1.extract_image_patches(
    images,
    ksizes=None,
    strides=None,
    rates=None,
    padding=None,
    name=None,
    sizes=None
)
 
```

#### Args:
- **`images`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` ,  `int32` ,  `uint8` ,  `int16` ,  `int8` ,  `int64` ,  `bfloat16` ,  `uint16` ,  `half` ,  `uint32` ,  `uint64` .4-D Tensor with shape  `[batch, in_rows, in_cols, depth]` .
- **`ksizes`** : A list of  `ints`  that has length  `>= 4` .The size of the sliding window for each dimension of  `images` .
- **`strides`** : A list of  `ints`  that has length  `>= 4` .How far the centers of two consecutive patches are inthe images. Must be:  `[1, stride_rows, stride_cols, 1]` .
- **`rates`** : A list of  `ints`  that has length  `>= 4` .Must be:  `[1, rate_rows, rate_cols, 1]` . This is theinput stride, specifying how far two consecutive patch samples are in theinput. Equivalent to extracting patches with `patch_sizes_eff = patch_sizes + (patch_sizes - 1) * (rates - 1)` , followed bysubsampling them spatially by a factor of  `rates` . This is equivalent to `rate`  in dilated (a.k.a. Atrous) convolutions.
- **`padding`** : A  `string`  from:  `"SAME", "VALID"` .The type of padding algorithm to use.
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor` . Has the same type as  `images` .

