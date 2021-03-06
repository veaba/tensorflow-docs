Writes a graph proto to a file.

**别名** : [ `tf.compat.v1.io.write_graph` ](/api_docs/python/tf/io/write_graph), [ `tf.compat.v1.train.write_graph` ](/api_docs/python/tf/io/write_graph), [ `tf.compat.v2.io.write_graph` ](/api_docs/python/tf/io/write_graph)

```
 tf.io.write_graph(
    graph_or_graph_def,
    logdir,
    name,
    as_text=True
)
 
```

The graph is written as a text proto unless  `as_text`  is  `False` .

```
 v = tf.Variable(0, name='my_variable')
sess = tf.compat.v1.Session()
tf.io.write_graph(sess.graph_def, '/tmp/my-model', 'train.pbtxt')
 
```

或

```
 v = tf.Variable(0, name='my_variable')
sess = tf.compat.v1.Session()
tf.io.write_graph(sess.graph, '/tmp/my-model', 'train.pbtxt')
 
```

#### 参数：
- **`graph_or_graph_def`** : A  `Graph`  or a  `GraphDef`  protocol buffer.
- **`logdir`** : Directory where to write the graph. This can refer to remotefilesystems, such as Google Cloud Storage (GCS).
- **`name`** : Filename for the graph.
- **`as_text`** : If  `True` , writes the graph as an ASCII proto.


#### 返回：
The path of the output proto file.

