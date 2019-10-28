Replication mode for input function.
### Aliases:
- Class `tf.compat.v1.distribute.InputReplicationMode`
- Class `tf.compat.v2.distribute.InputReplicationMode`
- `PER_WORKER`: The input function will be called on each worker independently, creating as many input pipelines as number of workers. Replicas will dequeue from the local Dataset on their worker. `tf.distribute.Strategy` doesn't manage any state sharing between such separate input pipelines.
## Class Members
- `PER_WORKER`
