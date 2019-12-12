

## Class  `TFConfigClusterResolver` 
Implementation of a ClusterResolver which reads the TF_CONFIG EnvVar.

Inherits From: [ `ClusterResolver` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/cluster_resolver/ClusterResolver)

**别名** : [ `tf.compat.v1.distribute.cluster_resolver.TFConfigClusterResolver` ](/api_docs/python/tf/distribute/cluster_resolver/TFConfigClusterResolver), [ `tf.compat.v2.distribute.cluster_resolver.TFConfigClusterResolver` ](/api_docs/python/tf/distribute/cluster_resolver/TFConfigClusterResolver)

This is an implementation of cluster resolvers when using TF_CONFIG to setinformation about the cluster. The cluster spec returned will beinitialized from the TF_CONFIG environment variable.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tfconfig_cluster_resolver.py#L60-L79)

```
 __init__(
    task_type=None,
    task_id=None,
    rpc_layer=None,
    environment=None
)
 
```

创建新的tfconfigclusterresolver。

#### 参数：
- **`task_type`** : (String, optional) Overrides the task type specified in theTF_CONFIG environment variable.
- **`task_id`** : (Integer, optional) Overrides the task index specified in theTF_CONFIG environment variable.
- **`rpc_layer`** : (String, optional) Overrides the rpc layer TensorFlow uses.
- **`environment`** : (String, optional) Overrides the environment TensorFlowoperates in.


## 属性


###  `environment` 
返回TensorFlow正在运行的当前环境。

There are two possible return values, "google" (when TensorFlow is runningin a Google-internal environment) or an empty string (when TensorFlow isrunning elsewhere).

If you are implementing a ClusterResolver that works in both the Googleenvironment and the open-source world (for instance, a TPU ClusterResolveror similar), you will have to return the appropriate string depending on theenvironment, which you will have to detect.

Otherwise, if you are implementing a ClusterResolver that will only workin open-source TensorFlow, you do not need to implement this property.

###  `rpc_layer` 


###  `task_id` 


###  `task_type` 


## 方法


###  `cluster_spec` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tfconfig_cluster_resolver.py#L129-L138)

```
 cluster_spec()
 
```

Returns a ClusterSpec based on the TF_CONFIG environment variable.

#### 返回：
A ClusterSpec with information from the TF_CONFIG environment variable.

###  `master` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tfconfig_cluster_resolver.py#L140-L177)

```
 master(
    task_type=None,
    task_id=None,
    rpc_layer=None
)
 
```

返回创建tensorflow会话时要使用的主地址。

#### 参数：
- **`task_type`** : (String, optional) Overrides and sets the task_type of themaster.
- **`task_id`** : (Integer, optional) Overrides and sets the task id of themaster.
- **`rpc_layer`** : (String, optional) Overrides and sets the protocol over whichTensorFlow nodes communicate with each other.


#### 返回：
主人的地址。

#### 加薪：
- **`RuntimeError`** : If the task_type or task_id is not specified and the `TF_CONFIG`  environment variable does not contain a task section.


###  `num_accelerators` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tfconfig_cluster_resolver.py#L120-L127)

```
 num_accelerators(
    task_type=None,
    task_id=None,
    config_proto=None
)
 
```

返回每个工作进程的加速器核心数。

This returns the number of accelerator cores (such as GPUs and TPUs)available per worker.

Optionally, we allow callers to specify the task_type, and task_id, forif they want to target a specific TensorFlow process to querythe number of accelerators. This is to support heterogenous environments,where the number of accelerators cores per host is different.

#### 参数：
- **`task_type`** : (Optional) The type of the TensorFlow task of the machine wewant to query.
- **`task_id`** : (Optional) The index of the TensorFlow task of the machine wewant to query.
- **`config_proto`** : (Optional) Configuration for starting a new session toquery how many accelerator cores it has.


#### 返回：
加速器类型与核心数的映射。

