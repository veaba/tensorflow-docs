

## Class  `TPUConfig` 
TPU related configuration required by  `TPUEstimator` .

#### Args:
- **`iterations_per_loop`** : This is the number of train steps running in TPUsystem before returning to CPU host for each  `Session.run` . This meansglobal step is increased  `iterations_per_loop`  times in one  `Session.run` .It is recommended to be set as number of global steps for next checkpoint.Note that in evaluation don't use this value, instead we run total eval `steps`  on TPU for a single  `Session.run` .[Experimental]:  `iterations_per_loop`  can be specified as a time interval.To specify N seconds in one  `Session.run` , one can specify it as  `Ns`  andsubstitute the N with the N with the number of desired seconds.Alternatively, the unit of time can also be specified in minutes or hours,e.g.  `3600s`  or  `60m`  or  `1h` .
- **`num_shards`** : (Deprecated, ignored by TPUEstimator).The number of model replicas in the system. For non-model-parallelismcase, this number equals the total number of TPU cores. Formodel-parallelism, the total number of TPU cores equalsnum_cores_per_replica * num_shards.
- **`num_cores_per_replica`** : Defaults to  `None` , which disables model parallelism.An integer which describes the number of TPU cores per model replica. Thisis required by model-parallelism which enables partitioningthe model to multiple cores. Currently num_cores_per_replica must be1, 2, 4, or 8.
- **`per_host_input_for_training`** : If  `True` , for  `PER_HOST_V1` , the  `input_fn`  isinvoked once on each host, and the number of hosts must be smaller orequal to the number of replicas. For PER_HOST_V2, the  `input_fn`  isinvoked once for each host (if the number of hosts is less than the numberof replicas) or replica (if the number of replicas is less than the numberof hosts. With the per-core input pipeline configuration, it is invokedonce for each core.With a global batch size  `train_batch_size`  in  `TPUEstimator`  constructor,the batch size for each shard is  `train_batch_size`  // #hosts in the `True`  or  `PER_HOST_V1`  mode. In  `PER_HOST_V2`  mode, it is `train_batch_size`  // #cores. In  `BROADCAST`  mode,  `input_fn`  is onlyinvoked once on host 0 and the tensors are broadcasted to all otherreplicas. The batch size equals to  `train_batch_size` . With the per-coreinput pipeline configuration, the shard batch size is also `train_batch_size`  // #cores.Note: per_host_input_for_training==PER_SHARD_V1 only supports mode.TRAIN.
- **`tpu_job_name`** : The name of the TPU job. Typically, this name is auto-inferredwithin TPUEstimator, however when using ClusterSpec propagation in moreesoteric cluster configurations, you may need to specify the job name as astring.
- **`initial_infeed_sleep_secs`** : The number of seconds the infeed thread shouldwait before enqueueing the first batch. This helps avoid timeouts formodels that require a long compilation time.
- **`input_partition_dims`** : A nested list to describe the partition dimsfor all the tensors from input_fn(). The structure ofinput_partition_dims must match the structure of  `features`  and `labels`  from input_fn(). The total number of partitions must match `num_cores_per_replica` . For example, if input_fn() returns two tensors:images with shape [N, H, W, C] and labels [N].input_partition_dims = [[1, 2, 2, 1], None] will split the images to 4pieces and feed into 4 TPU cores. labels tensor are directly broadcastedto all the TPU cores since the partition dims is  `None` .Current limitations: This feature is only supported with the PER_HOST_V2input mode.
- **`eval_training_input_configuration`** : If  `SLICED` ,  `input_fn`  is onlyinvoked once on host 0 and the tensors are broadcasted to all otherreplicas. Unlike per_host_input_for_training=BROADCAST, each replica willonly get a slice of the data instead of a whole copy. If  `PER_HOST_V1` ,the behaviour is determined by per_host_input_for_training.
- **`experimental_host_call_every_n_steps`** : Within a training loop, this argumentsets how often host calls are performed during training. Host calls willbe evaluated every n steps within a training loop where n is the value ofthis argument.


#### Raises:
- **`ValueError`** : If  `num_cores_per_replica`  is not 1, 2, 4, 8, ..., 128.


##  `__new__` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/tpu/tpu_config.py)

```
 @staticmethod
__new__(
    cls,
    iterations_per_loop=2,
    num_shards=None,
    num_cores_per_replica=None,
    per_host_input_for_training=True,
    tpu_job_name=None,
    initial_infeed_sleep_secs=None,
    input_partition_dims=None,
    eval_training_input_configuration=InputPipelineConfig.PER_HOST_V1,
    experimental_host_call_every_n_steps=1
)
 
```

Create new instance of TPUConfig(iterations_per_loop, num_shards, num_cores_per_replica, per_host_input_for_training, tpu_job_name, initial_infeed_sleep_secs, input_partition_dims, eval_training_input_configuration, experimental_host_call_every_n_steps)

## Properties


###  `iterations_per_loop` 


###  `num_shards` 


###  `num_cores_per_replica` 


###  `per_host_input_for_training` 


###  `tpu_job_name` 


###  `initial_infeed_sleep_secs` 


###  `input_partition_dims` 


###  `eval_training_input_configuration` 


###  `experimental_host_call_every_n_steps` 
