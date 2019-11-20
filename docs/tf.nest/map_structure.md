[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/nest/map_structure) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/util/nest.py#L474-L536)  
---|---  
  
Applies `func` to each entry in `structure` and returns a new structure.

### Aliases:

  * [`tf.compat.v1.nest.map_structure`](/api_docs/python/tf/nest/map_structure)
  * [`tf.compat.v2.nest.map_structure`](/api_docs/python/tf/nest/map_structure)

    
    
    tf.nest.map_structure(
        func,
        *structure,
        **kwargs
    )
    

### Used in the guide:

  * [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)

Applies `func(x[0], x[1], ...)` where x[i] is an entry in `structure[i]`. All
structures in `structure` must have the same arity, and the return value will
contain results with the same structure layout.

#### Args:

  * **`func`** : A callable that accepts as many arguments as there are structures.
  * **`*structure`** : scalar, or tuple or list of constructed scalars and/or other tuples/lists, or scalars. Note: numpy arrays are considered as scalars.
  * **`**kwargs`** : Valid keyword args are:

    * `check_types`: If set to `True` (default) the types of iterables within the structures have to be same (e.g. `map_structure(func, [1], (1,))` raises a `TypeError` exception). To allow this set this argument to `False`. Note that namedtuples with identical name and fields are always considered to have the same shallow structure.
    * `expand_composites`: If set to `True`, then composite tensors such as [`tf.SparseTensor`](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor) and [`tf.RaggedTensor`](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor) are expanded into their component tensors. If `False` (the default), then composite tensors are not expanded.

#### Returns:

A new structure with the same arity as `structure`, whose values correspond to
`func(x[0], x[1], ...)` where `x[i]` is a value in the corresponding location
in `structure[i]`. If there are different sequence types and `check_types` is
`False` the sequence types of the first structure will be used.

#### Raises:

  * **`TypeError`** : If `func` is not callable or if the structures do not match each other by depth tree.
  * **`ValueError`** : If no structure is provided or if the structures do not match each other by type.
  * **`ValueError`** : If wrong keyword arguments are provided.

