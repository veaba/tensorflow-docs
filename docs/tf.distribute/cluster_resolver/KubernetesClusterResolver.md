

## Class  `KubernetesClusterResolver` 
ClusterResolver for Kubernetes.

Inherits From: [ `ClusterResolver` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/cluster_resolver/ClusterResolver)

**别名** : [ `tf.compat.v1.distribute.cluster_resolver.KubernetesClusterResolver` ](/api_docs/python/tf/distribute/cluster_resolver/KubernetesClusterResolver), [ `tf.compat.v2.distribute.cluster_resolver.KubernetesClusterResolver` ](/api_docs/python/tf/distribute/cluster_resolver/KubernetesClusterResolver)

This is an implementation of cluster resolvers for Kubernetes. When given thethe Kubernetes namespace and label selector for pods, we will retrieve thepod IP addresses of all running pods matching the selector, and return aClusterSpec based on that information.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/kubernetes_cluster_resolver.py#L44-L94)

```
 __init__(
    job_to_label_mapping=None,
    tf_server_port=8470,
    rpc_layer='grpc',
    override_client=None
)
 
```

初始化新的KubernetesClusterResolver。

This initializes a new Kubernetes ClusterResolver. The ClusterResolverwill attempt to talk to the Kubernetes master to retrieve all the instancesof pods matching a label selector.

#### 参数：
- **`job_to_label_mapping`** : A mapping of TensorFlow jobs to label selectors.This allows users to specify many TensorFlow jobs in one ClusterResolver, and each job can have pods belong with different labelselectors. For example, a sample mapping might be


```
 {'worker': ['job-name=worker-cluster-a', 'job-name=worker-cluster-b'],
 'ps': ['job-name=ps-1', 'job-name=ps-2']}
 
```

- **`tf_server_port`** : The port the TensorFlow server is listening on.
- **`rpc_layer`** : (Optional) The RPC layer TensorFlow should use to communicatebetween tasks in Kubernetes. Defaults to 'grpc'.
- **`override_client`** : The Kubernetes client (usually automatically retrievedusing  `from kubernetes import client as k8sclient` ). If you pass thisin, you are responsible for setting Kubernetes credentials manually.


#### 加薪：
- **`ImportError`** : If the Kubernetes Python client is not installed and no `override_client`  is passed in.
- **`RuntimeError`** : If autoresolve_task is not a boolean or a callable.


## 属性


###  `environment` 
返回TensorFlow正在运行的当前环境。

There are two possible return values, "google" (when TensorFlow is runningin a Google-internal environment) or an empty string (when TensorFlow isrunning elsewhere).

If you are implementing a ClusterResolver that works in both the Googleenvironment and the open-source world (for instance, a TPU ClusterResolveror similar), you will have to return the appropriate string depending on theenvironment, which you will have to detect.

Otherwise, if you are implementing a ClusterResolver that will only workin open-source TensorFlow, you do not need to implement this property.

## 方法


###  `cluster_spec` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/kubernetes_cluster_resolver.py#L122-L158)

```
 cluster_spec()
 
```

根据来自kubernetes的最新信息返回clusterspec对象。

We retrieve the information from the Kubernetes master every time thismethod is called.

#### 返回：
包含从kubernetes返回的主机信息的clusterspec。

#### 加薪：
- **`RuntimeError`** : If any of the pods returned by the master is not in the `Running`  phase.


###  `master` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/kubernetes_cluster_resolver.py#L96-L120)

```
 master(
    task_type=None,
    task_id=None,
    rpc_layer=None
)
 
```

返回创建会话时要使用的主地址。

You must have set the task_type and task_id object properties beforecalling this function, or pass in the  `task_type`  and  `task_id` parameters when using this function. If you do both, the function parameterswill override the object properties.

#### 参数：
- **`task_type`** : (Optional) The type of the TensorFlow task of the master.
- **`task_id`** : (Optional) The index of the TensorFlow task of the master.
- **`rpc_layer`** : (Optional) The RPC protocol for the given cluster.


#### 返回：
会话主机的名称或url。

###  `num_accelerators` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/cluster_resolver.py#L125-L160)

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

