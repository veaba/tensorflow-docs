连接到单个计算机以在其上启用远程执行。

**别名** : [ `tf.compat.v1.config.experimental_connect_to_host` ](/api_docs/python/tf/config/experimental_connect_to_host), [ `tf.compat.v2.config.experimental_connect_to_host` ](/api_docs/python/tf/config/experimental_connect_to_host)

```
 tf.config.experimental_connect_to_host(    remote_host=None,    job_name='worker') 
```

Will make devices on the remote host available to use. Note that calling thismore than once will work, but will invalidate any tensor handles on the oldremote devices.Using the default job_name of worker, you can schedule ops to run remotely asfollows:

```
 # Enable eager execution, and connect to the remote host.tf.compat.v1.enable_eager_execution()tf.contrib.eager.connect_to_remote_host("exampleaddr.com:9876")with ops.device("job:worker/replica:0/task:1/device:CPU:0"):  # The following tensors should be resident on the remote device, and the op  # will also execute remotely.  x1 = array_ops.ones([2, 2])  x2 = array_ops.ones([2, 2])  y = math_ops.matmul(x1, x2) 
```

Args:  remote_host: a single or a list the remote server addr in host-port format.  job_name: The job name under which the new server will be accessible.Raises:  ValueError: if remote_host is None.

