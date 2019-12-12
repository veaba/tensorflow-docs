

## Class  `InputReplicationMode` 
Replication mode for input function.

**Aliases** : [ `tf.compat.v1.distribute.InputReplicationMode` ](/api_docs/python/tf/distribute/InputReplicationMode), [ `tf.compat.v2.distribute.InputReplicationMode` ](/api_docs/python/tf/distribute/InputReplicationMode)

-  `PER_WORKER` : The input function will be called on each workerindependently, creating as many input pipelines as number of workers.Replicas will dequeue from the local Dataset on their worker.[ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) doesn't manage any state sharing between suchseparate input pipelines.


## Class Members
-  `PER_WORKER`  []()
