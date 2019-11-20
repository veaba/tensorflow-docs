[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L159-L181)  
---  
  
Asserts that two `GraphDef`s are (mostly) the same.

    
    
    tf.compat.v1.test.assert_equal_graph_def(
        actual,
        expected,
        checkpoint_v2=False,
        hash_table_shared_name=False
    )
    

Compares two `GraphDef` protos for equality, ignoring versions and ordering of
nodes, attrs, and control inputs. Node names are used to match up nodes
between the graphs, so the naming of nodes must be consistent.

#### Args:

  * **`actual`** : The `GraphDef` we have.
  * **`expected`** : The `GraphDef` we expected.
  * **`checkpoint_v2`** : boolean determining whether to ignore randomized attribute values that appear in V2 checkpoints.
  * **`hash_table_shared_name`** : boolean determining whether to ignore randomized shared_names that appear in HashTableV2 op defs.

#### Raises:

  * **`AssertionError`** : If the `GraphDef`s do not match.
  * **`TypeError`** : If either argument is not a `GraphDef`.

