Create and start local servers and return the associated  `Server`  objects.

**Aliases** : [ `tf.compat.v1.test.create_local_cluster` ](/api_docs/python/tf/test/create_local_cluster), [ `tf.compat.v2.test.create_local_cluster` ](/api_docs/python/tf/test/create_local_cluster)

```
 tf.test.create_local_cluster(    num_workers,    num_ps,    protocol='grpc',    worker_config=None,    ps_config=None) 
```

"PS" stands for "parameter server": a task responsible for storing andupdating the model's parameters. Other tasks send updates to these parametersas they work on optimizing the parameters. This particular division of laborbetween tasks is not required, but is common for distributed training.

Read more at https://www.tensorflow.org/guide/extend/architecture

![components](https://tensorflow.google.cn/images/diag1.svg)

Figure illustrates the interaction of these components."/job:worker/task:0" and "/job:ps/task:0" are both tasks with worker services.

#### Example:


```
 workers, _ = tf.test.create_local_cluster(num_workers=2, num_ps=2)

worker_sessions = [tf.compat.v1.Session(w.target) for w in workers]

with tf.device("/job:ps/task:0"):
  ...
with tf.device("/job:ps/task:1"):
  ...
with tf.device("/job:worker/task:0"):
  ...
with tf.device("/job:worker/task:1"):
  ...

worker_sessions[0].run(...)
 
```

#### Args:
- **`num_workers`** : Number of worker servers to start.
- **`num_ps`** : Number of PS servers to start.
- **`protocol`** : Communication protocol. Allowed values are documented in thedocumentation of [ `tf.distribute.Server` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Server).
- **`worker_config`** : (optional)  `tf.ConfigProto`  to initialize workers. Can beused to instantiate multiple devices etc.
- **`ps_config`** : (optional)  `tf.ConfigProto`  to initialize PS servers.


#### Returns:
A tuple  `(worker_servers, ps_servers)` .   `worker_servers`  is a listof  `num_workers`  objects of type [ `tf.distribute.Server` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Server) (all runninglocally);and  `ps_servers`  is a list of  `num_ps`  objects of similar type.

#### Raises:
- **`ImportError`** : if portpicker module was not found at load time
