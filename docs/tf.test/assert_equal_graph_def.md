[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/test/assert_equal_graph_def) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L138-L156)  
  
  
Asserts that two `GraphDef`s are (mostly) the same.

### Aliases:

  * [`tf.compat.v2.test.assert_equal_graph_def`](/api_docs/python/tf/test/assert_equal_graph_def)

    
    
    tf.test.assert_equal_graph_def(
        expected,
        actual
    )
    

Compares two `GraphDef` protos for equality, ignoring versions and ordering of
nodes, attrs, and control inputs. Node names are used to match up nodes
between the graphs, so the naming of nodes must be consistent. This function
ignores randomized attribute values that may appear in V2 checkpoints.

#### Args:

  * **`expected`** : The `GraphDef` we expected.
  * **`actual`** : The `GraphDef` we have.

#### Raises:

  * **`AssertionError`** : If the `GraphDef`s do not match.
  * **`TypeError`** : If either argument is not a `GraphDef`.

