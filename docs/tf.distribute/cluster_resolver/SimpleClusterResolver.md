

## Class  `SimpleClusterResolver` 
接受ClusterSpec的ClusterResolver的简单实现。

Inherits From: [ `ClusterResolver` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/cluster_resolver/ClusterResolver)

**别名** : [ `tf.compat.v1.distribute.cluster_resolver.SimpleClusterResolver` ](/api_docs/python/tf/distribute/cluster_resolver/SimpleClusterResolver), [ `tf.compat.v2.distribute.cluster_resolver.SimpleClusterResolver` ](/api_docs/python/tf/distribute/cluster_resolver/SimpleClusterResolver)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L185-L204)

```
 __init__(
    cluster_spec,
    master='',
    task_type=None,
    task_id=None,
    environment='',
    num_accelerators=None,
    rpc_layer=None
)
 
```

从ClusterSpec创建SimpleClusterResolver。

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L206-L208)

```
 cluster_spec()
 
```

返回传入构造函数的ClusterSpec。

###  `master` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L210-L229)

```
 master(
    task_type=None,
    task_id=None,
    rpc_layer=None
)
 
```

返回创建会话时要使用的主地址。

#### 参数：
- **`task_type`** : (Optional) The type of the TensorFlow task of the master.
- **`task_id`** : (Optional) The index of the TensorFlow task of the master.
- **`rpc_layer`** : (Optional) The RPC used by distributed TensorFlow.


#### 返回：
会话主机的名称或url。

If a task_type and task_id is given, this will override the  `master` string passed into the initialization function.

###  `num_accelerators` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L251-L271)

```
 num_accelerators(
    task_type=None,
    task_id=None,
    config_proto=None
)
 
```

返回每个工作进程的加速器核心数。

The SimpleClusterResolver does not do automatic detection of accelerators,so a TensorFlow session will never be created, and thus all arguments areunused and we simply assume that the type of accelerator is a GPU and returnthe value in provided to us in the constructor.

#### 参数：
- **`task_type`** : Unused.
- **`task_id`** : Unused.
- **`config_proto`** : Unused.
