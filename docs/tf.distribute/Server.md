## Class Server

An in-process TensorFlow server, for use in distributed training.
### Aliases:
- Class `tf.compat.v1.distribute.Server`
- Class `tf.compat.v1.train.Server`
- Class `tf.compat.v2.distribute.Server`
[tf.distribute.Server](https://www.tensorflow.org/api_docs/python/tf/distribute/Server)A  instance encapsulates a set of devices and a tf.compat.v1.Session target that can participate in distributed training. A server belongs to a cluster (specified by a tf.train.ClusterSpec), and corresponds to a particular task in a named job. The server can communicate with any other server in the same cluster.

## __init__
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

Creates a new server with the given definition.

The job_name, task_index, and protocol arguments are optional, and override any information provided in server_or_cluster_def.
#### Args:
- `server_or_cluster_def`: A `tf.train.ServerDef` or `tf.train.ClusterDef` protocol buffer, or a `tf.train.ClusterSpec` object, describing the server to be created and/or the cluster of which it is a member.
- `job_name`: (Optional.) Specifies the name of the job of which the server is a member. Defaults to the value in `server_or_cluster_def`, if specified.
- `task_index`: (Optional.) Specifies the task index of the server in its job. Defaults to the value in `server_or_cluster_def`, if specified. Otherwise defaults to 0 if the server's job has only one task.
- `protocol`: (Optional.) Specifies the `protocol` to be used by the server. Acceptable values include `"grpc"`, "grpc+verbs". Defaults to the value in `server_or_cluster_def`, if specified. Otherwise defaults to `"grpc"`.
- `config`: (Options.) A `tf.compat.v1.ConfigProto` that specifies default `config`uration options for all sessions that run on this server.
- `start`: (Optional.) Boolean, indicating whether to `start` the server after creating it. Defaults to `True`.
#### Raises:
- `tf.errors.OpError`: Or one of its subclasses if an error occurs while creating the TensorFlow server.
## Properties
### server_def
[tf.train.ServerDef](https://www.tensorflow.org/api_docs/python/tf/train/ServerDef)Returns the  for this server.

#### Returns:
[tf.train.ServerDef](https://www.tensorflow.org/api_docs/python/tf/train/ServerDef)A  protocol buffer that describes the configuration of this server.

### target
[tf.compat.v1.Session](https://www.tensorflow.org/api_docs/python/tf/compat/v1/Session)Returns the target for a  to connect to this server.

[tf.compat.v1.Session](https://www.tensorflow.org/api_docs/python/tf/compat/v1/Session)To create a  that connects to this server, use the following snippet:


```
 server = tf.distribute.Server(...)
with tf.compat.v1.Session(server.target):
  # ...
```
#### Returns:

A string containing a session target for this server.
## Methods
### create_local_server
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L214-L237)


```
 @staticmethod
create_local_server(
    config=None,
    start=True
)
```

Creates a new single-process cluster running on the local host.
[tf.distribute.Server](https://www.tensorflow.org/api_docs/python/tf/distribute/Server)This method is a convenience wrapper for creating a  with a tf.train.ServerDef that specifies a single-process cluster containing a single task in a job called "local".

#### Args:
- `config`: (Options.) A `tf.compat.v1.ConfigProto` that specifies default `config`uration options for all sessions that run on this server.
- `start`: (Optional.) Boolean, indicating whether to `start` the server after creating it. Defaults to `True`.
#### Returns:
[tf.distribute.Server](https://www.tensorflow.org/api_docs/python/tf/distribute/Server)A local .

### join
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L174-L183)


```
 join()
```

Blocks until the server has shut down.

This method currently blocks forever.
#### Raises:
- `tf.errors.OpError`: Or one of its subclasses if an error occurs while joining the TensorFlow server.
### start
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/server_lib.py#L165-L172)


```
 start()
```

Starts this server.
#### Raises:
- `tf.errors.OpError`: Or one of its subclasses if an error occurs while starting the TensorFlow server.
