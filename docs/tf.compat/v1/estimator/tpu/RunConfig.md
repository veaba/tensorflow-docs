

## Class  `RunConfig` 
支持tpu的runconfig。

Inherits From: [ `RunConfig` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/RunConfig)

##  `__init__` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/tpu/tpu_config.py)

```
 __init__(
    tpu_config=None,
    evaluation_master=None,
    master=None,
    cluster=None,
    **kwargs
)
 
```

构造runconfig。

#### 参数：
- **`tpu_config`** : the TPUConfig that specifies TPU-specific configuration.
- **`evaluation_master`** : a string. The address of the master to use for eval.Defaults to master if not set.
- **`master`** : a string. The address of the master to use for training.
- **`cluster`** : a ClusterResolver
- **`**kwargs`** : keyword config parameters.


#### 加薪：
- **`ValueError`** : if cluster is not None and the provided session_config has acluster_def already.


## 属性


###  `cluster` 


###  `cluster_spec` 


###  `device_fn` 
Returns the device_fn.

If device_fn is not  `None` , it overrides the defaultdevice function used in  `Estimator` .Otherwise the default one is used.

###  `eval_distribute` 
Optional [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) for evaluation.

###  `evaluation_master` 


###  `experimental_max_worker_delay_secs` 


###  `global_id_in_cluster` 
训练群集中的全局ID。

All global ids in the training cluster are assigned from an increasingsequence of consecutive integers. The first id is 0.


**Note:**  Task id (the property field  `task_id` ) is tracking the index of thenode among all nodes with the SAME task type. For example, given the clusterdefinition as follows:


```
   cluster = {'chief': ['host0:2222'],
             'ps': ['host1:2222', 'host2:2222'],
             'worker': ['host3:2222', 'host4:2222', 'host5:2222']}
 
```

Nodes with task type  `worker`  can have id 0, 1, 2.  Nodes with task type `ps`  can have id, 0, 1. So,  `task_id`  is not unique, but the pair( `task_type` ,  `task_id` ) can uniquely determine a node in the cluster.

Global id, i.e., this field, is tracking the index of the node among ALLnodes in the cluster. It is uniquely assigned.  For example, for the clusterspec given above, the global ids are assigned as:

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

#### 返回：
整数id。

###  `is_chief` 


###  `keep_checkpoint_every_n_hours` 


###  `keep_checkpoint_max` 


###  `log_step_count_steps` 


###  `master` 


###  `model_dir` 


###  `num_ps_replicas` 


###  `num_worker_replicas` 


###  `protocol` 
返回可选协议值。

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


###  `tpu_config` 


###  `train_distribute` 
Optional [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) for training.

## 方法


###  `replace` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/tpu/tpu_config.py)

```
 replace(**kwargs)
 
```

Returns a new instance of  `RunConfig`  replacing specified properties.

仅允许替换以下列表中的属性：

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
In addition, either  `save_checkpoints_steps`  or  `save_checkpoints_secs` can be set (should not be both).

#### 参数：
- **`**kwargs`** : keyword named properties with new values.


#### 加薪：
- **`ValueError`** : If any property name in  `kwargs`  does not exist or is notallowed to be replaced, or both  `save_checkpoints_steps`  and `save_checkpoints_secs`  are set.


#### 返回：
a new instance of  `RunConfig` .

