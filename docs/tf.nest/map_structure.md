Applies  `func`  to each entry in  `structure`  and returns a new structure.

**别名** : [ `tf.compat.v1.nest.map_structure` ](/api_docs/python/tf/nest/map_structure), [ `tf.compat.v2.nest.map_structure` ](/api_docs/python/tf/nest/map_structure)

```
 tf.nest.map_structure(
    func,
    *structure,
    **kwargs
)
 
```

### 在指南中使用：
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)
Applies  `func(x[0], x[1], ...)`  where x[i] is an entry in `structure[i]` .  All structures in  `structure`  must have the same arity,and the return value will contain results with the same structure layout.

#### 参数：
- **`func`** : A callable that accepts as many arguments as there are structures.
- **`*structure`** : scalar, or tuple or list of constructed scalars and/or othertuples/lists, or scalars.  注意：numpy arrays are considered as scalars.
- **`**kwargs`** : Valid keyword args are:


    -  `check_types` : If set to  `True`  (default) the types ofiterables within the structures have to be same (e.g. `map_structure(func, [1], (1,))`  raises a  `TypeError` exception). To allow this set this argument to  `False` .Note that namedtuples with identical name and fields are alwaysconsidered to have the same shallow structure.
    -  `expand_composites` : If set to  `True` , then composite tensors suchas [ `tf.SparseTensor` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor) and [ `tf.RaggedTensor` ](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor) are expanded into theircomponent tensors.  If  `False`  (the default), then composite tensorsare not expanded.


#### 返回：
A new structure with the same arity as  `structure` , whose values correspondto  `func(x[0], x[1], ...)`  where  `x[i]`  is a value in the correspondinglocation in  `structure[i]` . If there are different sequence types and `check_types`  is  `False`  the sequence types of the first structure will beused.

#### 加薪：
- **`TypeError`** : If  `func`  is not callable or if the structures do not matcheach other by depth tree.
- **`ValueError`** : If no structure is provided or if the structures do not matcheach other by type.
- **`ValueError`** : If wrong keyword arguments are provided.
