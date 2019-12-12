Return the elements, either from  `x`  or  `y` , depending on the  `condition` .

```
 tf.compat.v1.where(
    condition,
    x=None,
    y=None,
    name=None
)
 
```

If both  `x`  and  `y`  are None, then this operation returns the coordinates oftrue elements of  `condition` .  The coordinates are returned in a 2-D tensorwhere the first dimension (rows) represents the number of true elements, andthe second dimension (columns) represents the coordinates of the trueelements. Keep in mind, the shape of the output tensor can vary depending onhow many true values there are in input. Indices are output in row-majororder.

If both non-None,  `x`  and  `y`  must have the same shape.The  `condition`  tensor must be a scalar if  `x`  and  `y`  are scalar.If  `x`  and  `y`  are tensors of higher rank, then  `condition`  must be either avector with size matching the first dimension of  `x` , or must have the sameshape as  `x` .

The  `condition`  tensor acts as a mask that chooses, based on the value at eachelement, whether the corresponding element / row in the output should be takenfrom  `x`  (if true) or  `y`  (if false).

If  `condition`  is a vector and  `x`  and  `y`  are higher rank matrices, then itchooses which row (outer dimension) to copy from  `x`  and  `y` . If  `condition` has the same shape as  `x`  and  `y` , then it chooses which element to copy from `x`  and  `y` .

#### Args:
- **`condition`** : A  `Tensor`  of type  `bool` 
- **`x`** : A Tensor which may have the same shape as  `condition` . If  `condition`  isrank 1,  `x`  may have higher rank, but its first dimension must match thesize of  `condition` .
- **`y`** : A  `tensor`  with the same shape and type as  `x` .
- **`name`** : A name of the operation (optional)


#### Returns:
A  `Tensor`  with the same type and shape as  `x` ,  `y`  if they are non-None.Otherwise, a  `Tensor`  with shape  `(num_true, rank(condition))` .

#### Raises:
- **`ValueError`** : When exactly one of  `x`  or  `y`  is non-None.
