Asserts that two  `GraphDef` s are (mostly) the same.

```
 tf.test.assert_equal_graph_def(    expected,    actual) 
```

Compares two  `GraphDef`  protos for equality, ignoring versions and ordering ofnodes, attrs, and control inputs.  Node names are used to match up nodesbetween the graphs, so the naming of nodes must be consistent. This functionignores randomized attribute values that may appear in V2 checkpoints.

#### 参数：
- **`expected`** : The  `GraphDef`  we expected.
- **`actual`** : The  `GraphDef`  we have.


#### 加薪：
- **`AssertionError`** : If the  `GraphDef` s do not match.
- **`TypeError`** : If either argument is not a  `GraphDef` .
