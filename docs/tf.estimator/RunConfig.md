

## Class  `RunConfig` 
This class specifies the configurations for an  `Estimator`  run.



### Aliases:

- Class [ `tf.compat.v1.estimator.RunConfig` ](/api_docs/python/tf/estimator/RunConfig)

- Class [ `tf.compat.v2.estimator.RunConfig` ](/api_docs/python/tf/estimator/RunConfig)



### Used in the guide:

- [Distributed training with TensorFlow](https://tensorflow.google.cn/guide/distributed_training)



### Used in the tutorials:

- [Multi-worker training with Estimator](https://tensorflow.google.cn/tutorials/distribute/multi_worker_with_estimator)



##  `__init__` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/run_config.py)



```
 __init__(
    model_dir=None,
    tf_random_seed=None,
    save_summary_steps=100,
    save_checkpoints_steps=_USE_DEFAULT,
    save_checkpoints_secs=_USE_DEFAULT,
    session_config=None,
    keep_checkpoint_max=5,
    keep_checkpoint_every_n_hours=10000,
    log_step_count_steps=100,
    train_distribute=None,
    device_fn=None,
    protocol=None,
    eval_distribute=None,
    experimental_distribute=None,
    experimental_max_worker_delay_secs=None,
    session_creation_timeout_secs=7200
)
 
```

Constructs a RunConfig.

All distributed training related properties  `cluster_spec` ,  `is_chief` ,
 `master`  ,  `num_worker_replicas` ,  `num_ps_replicas` ,  `task_id` , and
 `task_type`  are set based on the  `TF_CONFIG`  environment variable, if the
pertinent information is present. The  `TF_CONFIG`  environment variable is a
JSON object with attributes:  `cluster`  and  `task` .

 `cluster`  is a JSON serialized version of  `ClusterSpec` 's Python dict from
 `server_lib.py` , mapping task types (usually one of the  `TaskType`  enums) to
a list of task addresses.

 `task`  has two attributes:  `type`  and  `index` , where  `type`  can be any of
the task types in  `cluster` . When  `TF_CONFIG`  contains said information,
the following properties are set on this class:


-  `cluster_spec`  is parsed from  `TF_CONFIG['cluster']` . Defaults to {}. If
present, must have one and only one node in the  `chief`  attribute of
 `cluster_spec` .

-  `task_type`  is set to  `TF_CONFIG['task']['type']` . Must set if
 `cluster_spec`  is present; must be  `worker`  (the default value) if
 `cluster_spec`  is not set.

-  `task_id`  is set to  `TF_CONFIG['task']['index']` . Must set if
 `cluster_spec`  is present; must be 0 (the default value) if
 `cluster_spec`  is not set.

-  `master`  is determined by looking up  `task_type`  and  `task_id`  in the
 `cluster_spec` . Defaults to ''.

-  `num_ps_replicas`  is set by counting the number of nodes listed
in the  `ps`  attribute of  `cluster_spec` . Defaults to 0.

-  `num_worker_replicas`  is set by counting the number of nodes listed
in the  `worker`  and  `chief`  attributes of  `cluster_spec` . Defaults to 1.

-  `is_chief`  is determined based on  `task_type`  and  `cluster` .

There is a special node with  `task_type`  as  `evaluator` , which is not part
of the (training)  `cluster_spec` . It handles the distributed evaluation job.

Example of non-chief node:



```
   cluster = {'chief': ['host0:2222'],
             'ps': ['host1:2222', 'host2:2222'],
             'worker': ['host3:2222', 'host4:2222', 'host5:2222']}
  os.environ['TF_CONFIG'] = json.dumps(
      {'cluster': cluster,
       'task': {'type': 'worker', 'index': 1}})
  config = RunConfig()
  assert config.master == 'host4:2222'
  assert config.task_id == 1
  assert config.num_ps_replicas == 2
  assert config.num_worker_replicas == 4
  assert config.cluster_spec == server_lib.ClusterSpec(cluster)
  assert config.task_type == 'worker'
  assert not config.is_chief
 
```



#### Example of chief node:


```
   cluster = {'chief': ['host0:2222'],
             'ps': ['host1:2222', 'host2:2222'],
             'worker': ['host3:2222', 'host4:2222', 'host5:2222']}
  os.environ['TF_CONFIG'] = json.dumps(
      {'cluster': cluster,
       'task': {'type': 'chief', 'index': 0}})
  config = RunConfig()
  assert config.master == 'host0:2222'
  assert config.task_id == 0
  assert config.num_ps_replicas == 2
  assert config.num_worker_replicas == 4
  assert config.cluster_spec == server_lib.ClusterSpec(cluster)
  assert config.task_type == 'chief'
  assert config.is_chief
 
```

Example of evaluator node (evaluator is not part of training cluster):



```
   cluster = {'chief': ['host0:2222'],
             'ps': ['host1:2222', 'host2:2222'],
             'worker': ['host3:2222', 'host4:2222', 'host5:2222']}
  os.environ['TF_CONFIG'] = json.dumps(
      {'cluster': cluster,
       'task': {'type': 'evaluator', 'index': 0}})
  config = RunConfig()
  assert config.master == ''
  assert config.evaluator_master == ''
  assert config.task_id == 0
  assert config.num_ps_replicas == 0
  assert config.num_worker_replicas == 0
  assert config.cluster_spec == {}
  assert config.task_type == 'evaluator'
  assert not config.is_chief
 
```

N.B.: If  `save_checkpoints_steps`  or  `save_checkpoints_secs`  is set,
 `keep_checkpoint_max`  might need to be adjusted accordingly, especially in
distributed training. For example, setting  `save_checkpoints_secs`  as 60
without adjusting  `keep_checkpoint_max`  (defaults to 5) leads to situation
that checkpoint would be garbage collected after 5 minutes. In distributed
training, the evaluation job starts asynchronously and might fail to load or
find the checkpoint due to race condition.



#### Args:

- **`model_dir`** : directory where model parameters, graph, etc are saved. If
 `PathLike`  object, the path will be resolved. If  `None` , will use a
default value set by the Estimator.

- **`tf_random_seed`** : Random seed for TensorFlow initializers.
Setting this value allows consistency between reruns.

- **`save_summary_steps`** : Save summaries every this many steps.

- **`save_checkpoints_steps`** : Save checkpoints every this many steps. Can not be
specified with  `save_checkpoints_secs` .

- **`save_checkpoints_secs`** : Save checkpoints every this many seconds. Can not
be specified with  `save_checkpoints_steps` . Defaults to 600 seconds if
both  `save_checkpoints_steps`  and  `save_checkpoints_secs`  are not set
in constructor.  If both  `save_checkpoints_steps`  and
 `save_checkpoints_secs`  are  `None` , then checkpoints are disabled.

- **`session_config`** : a ConfigProto used to set session parameters, or  `None` .

- **`keep_checkpoint_max`** : The maximum number of recent checkpoint files to
keep. As new files are created, older files are deleted. If  `None`  or 0,
all checkpoint files are kept. Defaults to 5 (that is, the 5 most recent
checkpoint files are kept.)

- **`keep_checkpoint_every_n_hours`** : Number of hours between each checkpoint
to be saved. The default value of 10,000 hours effectively disables
the feature.

- **`log_step_count_steps`** : The frequency, in number of global steps, that the
global step and the loss will be logged during training.  Also controls
the frequency that the global steps / s will be logged (and written to
summary) during training.

- **`train_distribute`** : An optional instance of [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy).
If specified, then Estimator will distribute the user's model during
training, according to the policy specified by that strategy. Setting
 `experimental_distribute.train_distribute`  is preferred.

- **`device_fn`** : A callable invoked for every  `Operation`  that takes the
 `Operation`  and returns the device string. If  `None` , defaults to
the device function returned by  `tf.train.replica_device_setter` 
with round-robin strategy.

- **`protocol`** : An optional argument which specifies the protocol used when
starting server.  `None`  means default to grpc.

- **`eval_distribute`** : An optional instance of [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy).
If specified, then Estimator will distribute the user's model during
evaluation, according to the policy specified by that strategy.
Setting  `experimental_distribute.eval_distribute`  is preferred.

- **`experimental_distribute`** : An optional
 `tf.contrib.distribute.DistributeConfig`  object specifying
DistributionStrategy-related configuration. The  `train_distribute`  and
 `eval_distribute`  can be passed as parameters to  `RunConfig`  or set in
 `experimental_distribute`  but not both.

- **`experimental_max_worker_delay_secs`** : An optional integer
specifying the maximum time a worker should wait before starting.
By default, workers are started at staggered times, with each worker
being delayed by up to 60 seconds. This is intended to reduce the risk
of divergence, which can occur when many workers simultaneously update
the weights of a randomly initialized model. Users who warm-start their
models and train them for short durations (a few minutes or less) should
consider reducing this default to improve training times.

- **`session_creation_timeout_secs`** : Max time workers should wait for a session
to become available (on initialization or when recovering a session)
with MonitoredTrainingSession. Defaults to 7200 seconds, but users may
want to set a lower value to detect problems with variable / session
(re)-initialization more quickly.



#### Raises:

- **`ValueError`** : If both  `save_checkpoints_steps`  and  `save_checkpoints_secs` 
are set.



## Properties


###  `cluster_spec` 


###  `device_fn` 
Returns the device_fn.

If device_fn is not  `None` , it overrides the default
device function used in  `Estimator` .
Otherwise the default one is used.



###  `eval_distribute` 
Optional [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) for evaluation.



###  `evaluation_master` 


###  `experimental_max_worker_delay_secs` 


###  `global_id_in_cluster` 
The global id in the training cluster.

All global ids in the training cluster are assigned from an increasing
sequence of consecutive integers. The first id is 0.


<aside class="note">**Note:**  Task id (the property field  `task_id` ) is tracking the index of the
node among all nodes with the SAME task type. For example, given the cluster
definition as follows:</aside>


```
   cluster = {'chief': ['host0:2222'],
             'ps': ['host1:2222', 'host2:2222'],
             'worker': ['host3:2222', 'host4:2222', 'host5:2222']}
 
```

Nodes with task type  `worker`  can have id 0, 1, 2.  Nodes with task type
 `ps`  can have id, 0, 1. So,  `task_id`  is not unique, but the pair
( `task_type` ,  `task_id` ) can uniquely determine a node in the cluster.

Global id, i.e., this field, is tracking the index of the node among ALL
nodes in the cluster. It is uniquely assigned.  For example, for the cluster
spec given above, the global ids are assigned as:



```
   task_type  | task_id  |  global_id
  --------------------------------
  chief      | 0        |  0
  worker     | 0        |  1
  worker     | 1        |  2
  worker     | 2        |  3
  ps         | 0        |  4
  ps         | 1        |  5
 
```



#### Returns:
An integer id.



###  `is_chief` 


###  `keep_checkpoint_every_n_hours` 


###  `keep_checkpoint_max` 


###  `log_step_count_steps` 


###  `master` 


###  `model_dir` 


###  `num_ps_replicas` 


###  `num_worker_replicas` 


###  `protocol` 
Returns the optional protocol value.



###  `save_checkpoints_secs` 


###  `save_checkpoints_steps` 


###  `save_summary_steps` 


###  `service` 
Returns the platform defined (in TF_CONFIG) service dict.



###  `session_config` 


###  `session_creation_timeout_secs` 


###  `task_id` 


###  `task_type` 


###  `tf_random_seed` 


###  `train_distribute` 
Optional [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) for training.



## Methods


###  `replace` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/run_config.py)



```
 replace(**kwargs)
 
```

Returns a new instance of  `RunConfig`  replacing specified properties.

Only the properties in the following list are allowed to be replaced:


-  `model_dir` ,

-  `tf_random_seed` ,

-  `save_summary_steps` ,

-  `save_checkpoints_steps` ,

-  `save_checkpoints_secs` ,

-  `session_config` ,

-  `keep_checkpoint_max` ,

-  `keep_checkpoint_every_n_hours` ,

-  `log_step_count_steps` ,

-  `train_distribute` ,

-  `device_fn` ,

-  `protocol` .

-  `eval_distribute` ,

-  `experimental_distribute` ,

-  `experimental_max_worker_delay_secs` ,

In addition, either  `save_checkpoints_steps`  or  `save_checkpoints_secs` 
can be set (should not be both).



#### Args:

- **`**kwargs`** : keyword named properties with new values.



#### Raises:

- **`ValueError`** : If any property name in  `kwargs`  does not exist or is not
allowed to be replaced, or both  `save_checkpoints_steps`  and
 `save_checkpoints_secs`  are set.



#### Returns:
a new instance of  `RunConfig` .

