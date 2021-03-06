Return a  `device function`  to use when building a Graph for replicas.

```
 tf.compat.v1.train.replica_device_setter(
    ps_tasks=0,
    ps_device='/job:ps',
    worker_device='/job:worker',
    merge_devices=True,
    cluster=None,
    ps_ops=None,
    ps_strategy=None
)
 
```

Device Functions are used in  `with tf.device(device_function):`  statement toautomatically assign devices to  `Operation`  objects as they are constructed,Device constraints are added from the inner-most context first, workingoutwards. The merging behavior adds constraints to fields that are yet unsetby a more inner context. Currently the fields are (job, task, cpu/gpu).

If  `cluster`  is  `None` , and  `ps_tasks`  is 0, the returned function is a no-op.Otherwise, the value of  `ps_tasks`  is derived from  `cluster` .

By default, only Variable ops are placed on ps tasks, and the placementstrategy is round-robin over all ps tasks. A custom  `ps_strategy`  may be usedto do more intelligent placement, such as `tf.contrib.training.GreedyLoadBalancingStrategy` .

For example,

```
 # To build a cluster with two ps jobs on hosts ps0 and ps1, and 3 worker
# jobs on hosts worker0, worker1 and worker2.
cluster_spec = {
    "ps": ["ps0:2222", "ps1:2222"],
    "worker": ["worker0:2222", "worker1:2222", "worker2:2222"]}
with
tf.device(tf.compat.v1.train.replica_device_setter(cluster=cluster_spec)):
  # Build your graph
  v1 = tf.Variable(...)  # assigned to /job:ps/task:0
  v2 = tf.Variable(...)  # assigned to /job:ps/task:1
  v3 = tf.Variable(...)  # assigned to /job:ps/task:0
# Run compute
 
```

#### 参数：
- **`ps_tasks`** : Number of tasks in the  `ps`  job.  Ignored if  `cluster`  isprovided.
- **`ps_device`** : String.  Device of the  `ps`  job.  If empty no  `ps`  job is used.Defaults to  `ps` .
- **`worker_device`** : String.  Device of the  `worker`  job.  If empty no  `worker` job is used.
- **`merge_devices`** :  `Boolean` . If  `True` , merges or only sets a device if thedevice constraint is completely unset. merges device specification ratherthan overriding them.
- **`cluster`** :  `ClusterDef`  proto or  `ClusterSpec` .
- **`ps_ops`** : List of strings representing  `Operation`  types that need to beplaced on  `ps`  devices.  If  `None` , defaults to  `STANDARD_PS_OPS` .
- **`ps_strategy`** : A callable invoked for every ps  `Operation`  (i.e. matched by `ps_ops` ), that takes the  `Operation`  and returns the ps task index touse.  If  `None` , defaults to a round-robin strategy across all  `ps` devices.


#### 返回：
A function to pass to [ `tf.device()` ](https://tensorflow.google.cn/api_docs/python/tf/device).

#### 加薪：
TypeError if  `cluster`  is not a dictionary or  `ClusterDef`  protocol buffer,or if  `ps_strategy`  is provided but not a callable.

