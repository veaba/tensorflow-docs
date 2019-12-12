

## Class  `Server` 
An in-process TensorFlow server, for use in distributed training.

**别名** : [ `tf.compat.v1.distribute.Server` ](/api_docs/python/tf/distribute/Server), [ `tf.compat.v1.train.Server` ](/api_docs/python/tf/distribute/Server), [ `tf.compat.v2.distribute.Server` ](/api_docs/python/tf/distribute/Server)

A [ `tf.distribute.Server` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Server) instance encapsulates a set of devices and a[ `tf.compat.v1.Session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session) target thatcan participate in distributed training. A server belongs to acluster (specified by a [ `tf.train.ClusterSpec` ](https://tensorflow.google.cn/api_docs/python/tf/train/ClusterSpec)), andcorresponds to a particular task in a named job. The server cancommunicate with any other server in the same cluster.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L110-L149)

```
 __init__(
    server_or_cluster_def,
    job_name=None,
    task_index=None,
    protocol=None,
    config=None,
    start=True
)
 
```

创建具有给定定义的新服务器。

The  `job_name` ,  `task_index` , and  `protocol`  arguments are optional, andoverride any information provided in  `server_or_cluster_def` .

#### 参数：
- **`server_or_cluster_def`** : A [ `tf.train.ServerDef` ](https://tensorflow.google.cn/api_docs/python/tf/train/ServerDef) or [ `tf.train.ClusterDef` ](https://tensorflow.google.cn/api_docs/python/tf/train/ClusterDef)protocol buffer, or a [ `tf.train.ClusterSpec` ](https://tensorflow.google.cn/api_docs/python/tf/train/ClusterSpec) object, describing theserver to be created and/or the cluster of which it is a member.
- **`job_name`** : (Optional.) Specifies the name of the job of which the server isa member. Defaults to the value in  `server_or_cluster_def` , ifspecified.
- **`task_index`** : (Optional.) Specifies the task index of the server in its job.Defaults to the value in  `server_or_cluster_def` , if specified.Otherwise defaults to 0 if the server's job has only one task.
- **`protocol`** : (Optional.) Specifies the protocol to be used by the server.Acceptable values include  `"grpc", "grpc+verbs"` . Defaults to the valuein  `server_or_cluster_def` , if specified. Otherwise defaults to `"grpc"` .
- **`config`** : (Options.) A [ `tf.compat.v1.ConfigProto` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/ConfigProto) that specifies defaultconfiguration options for all sessions that run on this server.
- **`start`** : (Optional.) Boolean, indicating whether to start the server aftercreating it. Defaults to  `True` .


#### 加薪：
- **[ `tf.errors.OpError` ](/api_docs/python/tf/errors/OpError)** : Or one of its subclasses if an error occurs whilecreating the TensorFlow server.


## 属性


###  `server_def` 
Returns the [ `tf.train.ServerDef` ](https://tensorflow.google.cn/api_docs/python/tf/train/ServerDef) for this server.

#### 返回：
A [ `tf.train.ServerDef` ](https://tensorflow.google.cn/api_docs/python/tf/train/ServerDef) protocol buffer that describes the configurationof this server.

###  `target` 
Returns the target for a [ `tf.compat.v1.Session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session) to connect to this server.

To create a[ `tf.compat.v1.Session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session) thatconnects to this server, use the following snippet:

```
 server = tf.distribute.Server(...)
with tf.compat.v1.Session(server.target):
  # ...
 
```

#### 返回：
包含此服务器的会话目标的字符串。

## 方法


###  `create_local_server` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L214-L237)

```
 @staticmethod
create_local_server(
    config=None,
    start=True
)
 
```

Creates a new single-process cluster running on the local host.

This method is a convenience wrapper for creating a[ `tf.distribute.Server` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Server) with a [ `tf.train.ServerDef` ](https://tensorflow.google.cn/api_docs/python/tf/train/ServerDef) that specifies asingle-process cluster containing a single task in a job called `"local"` .

#### 参数：
- **`config`** : (Options.) A [ `tf.compat.v1.ConfigProto` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/ConfigProto) that specifies defaultconfiguration options for all sessions that run on this server.
- **`start`** : (Optional.) Boolean, indicating whether to start the server aftercreating it. Defaults to  `True` .


#### 返回：
A local [ `tf.distribute.Server` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Server).

###  `join` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L174-L183)

```
 join()
 
```

直到服务器关闭。

此方法当前将永远阻止。

#### 加薪：
- **[ `tf.errors.OpError` ](/api_docs/python/tf/errors/OpError)** : Or one of its subclasses if an error occurs whilejoining the TensorFlow server.


###  `start` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L165-L172)

```
 start()
 
```

启动此服务器。

#### 加薪：
- **[ `tf.errors.OpError` ](/api_docs/python/tf/errors/OpError)** : Or one of its subclasses if an error occurs whilestarting the TensorFlow server.
