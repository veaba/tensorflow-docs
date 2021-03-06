断言两个结构以相同的方式嵌套。

**别名** : [ `tf.compat.v1.nest.assert_same_structure` ](/api_docs/python/tf/nest/assert_same_structure), [ `tf.compat.v2.nest.assert_same_structure` ](/api_docs/python/tf/nest/assert_same_structure)

```
 tf.nest.assert_same_structure(
    nest1,
    nest2,
    check_types=True,
    expand_composites=False
)
 
```

Note that namedtuples with identical name and fields are always consideredto have the same shallow structure (even with  `check_types=True` ).For instance, this code will print  `True` :

```
 def nt(a, b):
  return collections.namedtuple('foo', 'a b')(a, b)
print(assert_same_structure(nt(0, 1), nt(2, 3)))
 
```

#### 参数：
- **`nest1`** : an arbitrarily nested structure.
- **`nest2`** : an arbitrarily nested structure.
- **`check_types`** : if  `True`  (default) types of sequences are checked as well,including the keys of dictionaries. If set to  `False` , for example alist and a tuple of objects will look the same if they have the samesize. Note that namedtuples with identical name and fields are alwaysconsidered to have the same shallow structure. Two types will also beconsidered the same if they are both list subtypes (which allows "list"and "_ListWrapper" from trackable dependency tracking to compareequal).
- **`expand_composites`** : If true, then composite tensors such as [ `tf.SparseTensor` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor)and [ `tf.RaggedTensor` ](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor) are expanded into their component tensors.


#### 加薪：
- **`ValueError`** : If the two structures do not have the same number of elements orif the two structures are not nested in the same way.
- **`TypeError`** : If the two structures differ in the type of sequence in any oftheir substructures. Only possible if  `check_types`  is  `True` .
