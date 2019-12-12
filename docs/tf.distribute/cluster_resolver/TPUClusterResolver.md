

## Class  `TPUClusterResolver` 
google云tpu的集群解析器。

Inherits From: [ `ClusterResolver` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/cluster_resolver/ClusterResolver)

**别名** : [ `tf.compat.v1.distribute.cluster_resolver.TPUClusterResolver` ](/api_docs/python/tf/distribute/cluster_resolver/TPUClusterResolver), [ `tf.compat.v2.distribute.cluster_resolver.TPUClusterResolver` ](/api_docs/python/tf/distribute/cluster_resolver/TPUClusterResolver)

This is an implementation of cluster resolvers for the Google Cloud TPUservice. As Cloud TPUs are in alpha, you will need to specify a API definitionfile for this to consume, in addition to a list of Cloud TPUs in your GoogleCloud Platform project.

TPUClusterResolver supports the following distinct environments:Google Compute EngineGoogle Kubernetes EngineGoogle internal

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tpu_cluster_resolver.py#L193-L331)

```
 __init__(
    tpu=None,
    zone=None,
    project=None,
    job_name='worker',
    coordinator_name=None,
    coordinator_address=None,
    credentials='default',
    service=None,
    discovery_url=None
)
 
```

创建新的tpuclusterresolver对象。

The ClusterResolver will then use the parameters to query the Cloud TPU APIsfor the IP addresses and ports of each Cloud TPU listed.

#### 参数：
- **`tpu`** : A string corresponding to the TPU to use. If the string is an emptystring, the string 'local', or a string that begins with 'grpc://' or'/bns', then it is assumed to not correspond with a Cloud TPU and willinstead be passed as the session master and no ClusterSpec propagationwill be done. In the future, this may also support a list of stringswhen multiple Cloud TPUs are used.
- **`zone`** : Zone where the TPUs are located. If omitted or empty, we will assumethat the zone of the TPU is the same as the zone of the GCE VM, which wewill try to discover from the GCE metadata service.
- **`project`** : Name of the GCP project containing Cloud TPUs. If omitted orempty, we will try to discover the project name of the GCE VM from theGCE metadata service.
- **`job_name`** : Name of the TensorFlow job the TPUs belong to.
- **`coordinator_name`** : The name to use for the coordinator. Set to None if thecoordinator should not be included in the computed ClusterSpec.
- **`coordinator_address`** : The address of the coordinator (typically an ip:portpair). If set to None, a TF server will be started. If coordinator_nameis None, a TF server will not be started even if coordinator_address isNone.
- **`credentials`** : GCE Credentials. If None, then we use default credentialsfrom the oauth2client
- **`service`** : The GCE API object returned by the googleapiclient.discoveryfunction. If you specify a custom service object, then the credentialsparameter will be ignored.
- **`discovery_url`** : A URL template that points to the location of the discoveryservice. It should have two parameters {api} and {apiVersion} that whenfilled in produce an absolute URL to the discovery document for thatservice. The environment variable 'TPU_API_DISCOVERY_URL' will overridethis.


#### 加薪：
- **`ImportError`** : If the googleapiclient is not installed.
- **`ValueError`** : If no TPUs are specified.
- **`RuntimeError`** : If an empty TPU name is specified and this is running in aGoogle Cloud environment.


## 属性


###  `environment` 
返回TensorFlow正在运行的当前环境。

## 方法


###  `cluster_spec` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tpu_cluster_resolver.py#L388-L454)

```
 cluster_spec()
 
```

基于最新的TPU信息返回ClusterSpec对象。

We retrieve the information from the GCE APIs every time this method iscalled.

#### 返回：
A ClusterSpec containing host information returned from Cloud TPUs,or None.

#### 加薪：
- **`RuntimeError`** : If the provided TPU is not healthy.


###  `get_job_name` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tpu_cluster_resolver.py#L383-L386)

```
 get_job_name()
 
```

###  `get_master` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tpu_cluster_resolver.py#L380-L381)

```
 get_master()
 
```

###  `master` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tpu_cluster_resolver.py#L333-L378)

```
 master(
    task_type=None,
    task_id=None,
    rpc_layer=None
)
 
```

获取用于会话的主字符串。

In the normal case, this returns the grpc path (grpc://1.2.3.4:8470) offirst instance in the ClusterSpec returned by the cluster_spec function.

If a non-TPU name is used when constructing a TPUClusterResolver, that willbe returned instead (e.g. If the tpus argument's value when constructingthis TPUClusterResolver was 'grpc://10.240.1.2:8470','grpc://10.240.1.2:8470' will be returned).

#### 参数：
- **`task_type`** : (Optional, string) The type of the TensorFlow task of themaster.
- **`task_id`** : (Optional, integer) The index of the TensorFlow task of themaster.
- **`rpc_layer`** : (Optional, string) The RPC protocol TensorFlow should use tocommunicate with TPUs.


#### 返回：
string, the connection string to use when creating a session.

#### 加薪：
- **`ValueError`** : If none of the TPUs specified exists.


###  `num_accelerators` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tpu_cluster_resolver.py#L470-L511)

```
 num_accelerators(
    task_type=None,
    task_id=None,
    config_proto=None
)
 
```

返回每个工作进程的TPU核心数。

Connects to the master and list all the devices present in the master,and counts them up. Also verifies that the device counts per host in thecluster is the same before returning the number of TPU cores per host.

#### 参数：
- **`task_type`** : Unused.
- **`task_id`** : Unused.
- **`config_proto`** : Used to create a connection to a TPU master in order toretrieve the system metadata.


#### 加薪：
- **`RuntimeError`** : If we cannot talk to a TPU worker after retrying or if thenumber of TPU devices per host is different.
