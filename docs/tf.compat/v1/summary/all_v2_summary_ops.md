Returns all V2-style summary ops defined in the current default graph.

```
 tf.compat.v1.summary.all_v2_summary_ops() 
```

This includes ops from TF 2.0 tf.summary and TF 1.x tf.contrib.summary (exceptfor  `tf.contrib.summary.graph`  and  `tf.contrib.summary.import_event` ), butdoes *not* include TF 1.x tf.summary ops.

#### 返回：
List of summary ops, or None if called under eager execution.

