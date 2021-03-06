Asserts that two  `GraphDef` s are (mostly) the same.

```
 tf.compat.v1.test.assert_equal_graph_def(
    actual,
    expected,
    checkpoint_v2=False,
    hash_table_shared_name=False
)
 
```

Compares two  `GraphDef`  protos for equality, ignoring versions and ordering ofnodes, attrs, and control inputs.  Node names are used to match up nodesbetween the graphs, so the naming of nodes must be consistent.

#### 参数：
- **`actual`** : The  `GraphDef`  we have.
- **`expected`** : The  `GraphDef`  we expected.
- **`checkpoint_v2`** : boolean determining whether to ignore randomized attributevalues that appear in V2 checkpoints.
- **`hash_table_shared_name`** : boolean determining whether to ignore randomizedshared_names that appear in HashTableV2 op defs.


#### 加薪：
- **`AssertionError`** : If the  `GraphDef` s do not match.
- **`TypeError`** : If either argument is not a  `GraphDef` .
