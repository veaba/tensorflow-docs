
Gets an existing variable with these parameters or create a new one.

```
 tf.compat.v1.get_variable(
    name,
    shape=None,
    dtype=None,
    initializer=None,
    regularizer=None,
    trainable=None,
    collections=None,
    caching_device=None,
    partitioner=None,
    validate_shape=True,
    use_resource=None,
    custom_getter=None,
    constraint=None,
    synchronization=tf.VariableSynchronization.AUTO,
    aggregation=tf.compat.v1.VariableAggregation.NONE
)
```
[Variable Scope How To](https://tensorflow.org/guide/variables)This function prefixes the name with the current variable scope and performs reuse checks. See the  for an extensive description of how reusing works. Here is a basic example:


```
 def foo():
  with tf.variable_scope("foo", reuse=tf.AUTO_REUSE):
    v = tf.get_variable("v", [1])
  return v

v1 = foo()  # Creates v.
v2 = foo()  # Gets the same, existing v.
assert v1 == v2
```

If initializer is None (the default), the default initializer passed in the variable scope will be used. If that one is None too, a glorot_uniform_initializer will be used. The initializer can also be a Tensor, in which case the variable is initialized to this value and shape.

Similarly, if the regularizer is None (the default), the default regularizer passed in the variable scope will be used (if that is None too, then by default no regularization is performed).

If a partitioner is provided, a PartitionedVariable is returned. Accessing this object as a Tensor returns the shards concatenated along the partition axis.

Some useful partitioners are available. See, e.g., variable_axis_size_partitioner and min_max_variable_partitioner.
#### Args:
- `name`: The `name` of the new or existing variable.
- `shape`: Shape of the new or existing variable.
- `dtype`: Type of the new or existing variable (defaults to `DT_FLOAT`).
- `initializer`: Initializer for the variable if one is created. Can either be an `initializer` object or a Tensor. If it's a Tensor, its `shape` must be known unless validate_`shape` is False.
- `regularizer`: A (Tensor -> Tensor or None) function; the result of applying it on a newly created variable will be added to the collection `tf.GraphKeys.REGULARIZATION_LOSSES` and can be used for regularization.
- `trainable`: If `True` also add the variable to the graph collection `GraphKeys.TRAINABLE_VARIABLES` (see `tf.Variable`).
- `collections`: `L`i`s`t of g`r``a``p``h` `collections` k`e``y``s` to `a`dd t`h``e` `V``a``r`i`a`bl`e` to`.` D`e`f`a`ult`s` to [`G``r``a``p``h``K``e``y``s``.``G``L``O``B``A``L``_``V``A``R``I``A``B``L``E``S`] (`s``e``e` `tf.Variable`)`.`
- `caching_device`: `O``p`tion`a`l d`e`vic`e` `s`t`r`ing o`r` function d`e``s`c`r`ibing w`h``e``r``e` t`h``e` `V``a``r`i`a`bl`e` `s``h`ould b`e` c`a`c`h``e`d fo`r` `r``e``a`ding`.` D`e`f`a`ult`s` to t`h``e` `V``a``r`i`a`bl`e`'`s` d`e`vic`e``.` `I`f not `None`, c`a`c`h``e``s` on `a`not`h``e``r` d`e`vic`e``.` T`y``p`ic`a`l u`s``e` i`s` to c`a`c`h``e` on t`h``e` d`e`vic`e` w`h``e``r``e` t`h``e` `O``p``s` u`s`ing t`h``e` `V``a``r`i`a`bl`e` `r``e``s`id`e`, to d`e`du`p`lic`a`t`e` co`p``y`ing t`h``r`oug`h` `S`witc`h` `a`nd ot`h``e``r` condition`a`l `s`t`a`t`e`m`e`nt`s``.`
- `p``a``r`tition`e``r`: `O``p`tion`a`l c`a`ll`a`bl`e` t`h``a`t `a`cc`e``p`t`s` `a` full`y` d`e`fin`e`d `TensorShape` `a`nd `dtype` of t`h``e` `V``a``r`i`a`bl`e` to b`e` c`r``e``a`t`e`d, `a`nd `r``e`tu`r`n`s` `a` li`s`t of `p``a``r`tition`s` fo`r` `e``a`c`h` `a`xi`s` (cu`r``r``e`ntl`y` onl`y` on`e` `a`xi`s` c`a`n b`e` `p``a``r`tition`e`d)`.`
- `validate_shape`: `I`f F`a`l`s``e`, `a`llow`s` t`h``e` v`a``r`i`a`bl`e` to b`e` initi`a`liz`e`d wit`h` `a` v`a`lu`e` of unknown `shape``.` `I`f `True`, t`h``e` d`e`f`a`ult, t`h``e` `shape` of initi`a`l`_`v`a`lu`e` mu`s`t b`e` known`.` Fo`r` t`h`i`s` to b`e` u`s``e`d t`h``e` `initializer` mu`s`t b`e` `a` T`e`n`s`o`r` `a`nd not `a`n `initializer` obj`e`ct`.`
- `use_resource`: `I`f F`a`l`s``e`, c`r``e``a`t`e``s` `a` `r``e`gul`a``r` `V``a``r`i`a`bl`e``.` `I`f t`r`u`e`, c`r``e``a`t`e``s` `a`n `e`x`p``e``r`im`e`nt`a`l `R``e``s`ou`r`c`e``V``a``r`i`a`bl`e` in`s`t`e``a`d wit`h` w`e`ll-d`e`fin`e`d `s``e`m`a`ntic`s``.` D`e`f`a`ult`s` to F`a`l`s``e` (will l`a`t`e``r` c`h``a`ng`e` to `True`)`.` W`h``e`n `e``a`g`e``r` `e`x`e`cution i`s` `e`n`a`bl`e`d t`h`i`s` `a``r`gum`e`nt i`s` `a`lw`a``y``s` fo`r`c`e`d to b`e` `True``.`
#### Returns:

The created or existing Variable (or PartitionedVariable, if a partitioner was used).
#### Raises:
- `ValueError`: when creating a new variable and shape is not declared, when violating reuse during variable creation, or when `initializer` `dtype` and `dtype` don't match. Reuse is set inside `variable_scope`.
