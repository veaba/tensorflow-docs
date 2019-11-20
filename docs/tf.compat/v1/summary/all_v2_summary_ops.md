[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/summary_ops_v2.py#L513-L526)  
---  
  
Returns all V2-style summary ops defined in the current default graph.

    
    
    tf.compat.v1.summary.all_v2_summary_ops()
    

This includes ops from TF 2.0 tf.summary and TF 1.x tf.contrib.summary (except
for `tf.contrib.summary.graph` and `tf.contrib.summary.import_event`), but
does _not_ include TF 1.x tf.summary ops.

#### Returns:

List of summary ops, or None if called under eager execution.

