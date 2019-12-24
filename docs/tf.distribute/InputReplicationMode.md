

## Class  `InputReplicationMode` 
输入功能的复制模式。

**别名** : [ `tf.compat.v1.distribute.InputReplicationMode` ](/api_docs/python/tf/distribute/InputReplicationMode), [ `tf.compat.v2.distribute.InputReplicationMode` ](/api_docs/python/tf/distribute/InputReplicationMode)

-  `PER_WORKER` : The input function will be called on each workerindependently, creating as many input pipelines as number of workers.Replicas will dequeue from the local Dataset on their worker.[ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) doesn't manage any state sharing between suchseparate input pipelines.


## Class 成员
-  `PER_WORKER`  
