
Create a list of partitioned variables according to the given slicing. (deprecated)

```
 tf.compat.v1.create_partitioned_variables(
    shape,
    slicing,
    initializer,
    dtype=tf.dtypes.float32,
    trainable=True,
    collections=None,
    name=None,
    reuse=None
)
```

Currently only one dimension of the full variable can be sliced, and the full variable can be reconstructed by the concatenation of the returned list along that dimension.
#### Args:
- `shape`: List of integers. The `shape` of the full variable.
- `slicing`: List of integers. How to partition the variable. Must be of the same length as `shape`. Each value indicate how many slices to create in the corresponding dimension. Presently only one of the values can be more than 1; that is, the variable can only be sliced along one dimension.
For convenience, The requested number of partitions does not have to divide the corresponding dimension evenly. If it does not, the `shape`s of the partitions are incremented by 1 starting from partition 0 until all slack is absorbed. The adjustment rules may change in the future, but as you can save/restore these variables with different `slicing` specifications this should not be a problem.
- `initializer`: A `Tensor` of `shape` `shape` or a variable `initializer` function. If a function, it will be called once for each slice, passing the `shape` and data type of the slice as parameters. The function must return a tensor with the same `shape` as the slice.
- `dtype`: Type of the variables. Ignored if `initializer` is a `Tensor`.
- `trainable`: If True also add all the variables to the graph collection `GraphKeys.TRAINABLE_VARIABLES`.
- `collections`: `L`i`s`t of g`r``a``p``h` `collections` k`e``y``s` to `a`dd t`h``e` v`a``r`i`a`bl`e``s` to`.` D`e`f`a`ult`s` to [`G``r``a``p``h``K``e``y``s``.``G``L``O``B``A``L``_``V``A``R``I``A``B``L``E``S`]`.`
- `name`: `O``p`tion`a`l `name` fo`r` t`h``e` full v`a``r`i`a`bl`e``.` D`e`f`a`ult`s` to `"PartitionedVariable"` `a`nd g`e`t`s` uniquifi`e`d `a`utom`a`tic`a`ll`y``.`
- `r``e`u`s``e`: `B`ool`e``a`n o`r` `None`; if `True` `a`nd `name` i`s` `s``e`t, it would `r``e`u`s``e` `p``r``e`viou`s`l`y` c`r``e``a`t`e`d v`a``r`i`a`bl`e``s``.` if `False` it will c`r``e``a`t`e` n`e`w v`a``r`i`a`bl`e``s``.` if `None`, it would in`h``e``r`it t`h``e` `p``a``r``e`nt `s`co`p``e` `r``e`u`s``e``.`
#### Returns:

A list of Variables corresponding to the slicing.
#### Raises:
- `ValueError`: If any of the arguments is malformed.
