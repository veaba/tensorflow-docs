[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/distribute/cluster_resolver/TPUClusterResolver)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tpu_cluster_resolver.py#L78-L536)  
  
  
## Class `TPUClusterResolver`

Cluster Resolver for Google Cloud TPUs.

Inherits From:
[`ClusterResolver`](https://tensorflow.google.cn/api_docs/python/tf/distribute/cluster_resolver/ClusterResolver)

### Aliases:

  * Class [`tf.compat.v1.distribute.cluster_resolver.TPUClusterResolver`](/api_docs/python/tf/distribute/cluster_resolver/TPUClusterResolver)
  * Class [`tf.compat.v2.distribute.cluster_resolver.TPUClusterResolver`](/api_docs/python/tf/distribute/cluster_resolver/TPUClusterResolver)

This is an implementation of cluster resolvers for the Google Cloud TPU
service. As Cloud TPUs are in alpha, you will need to specify a API definition
file for this to consume, in addition to a list of Cloud TPUs in your Google
Cloud Platform project.

TPUClusterResolver supports the following distinct environments: Google
Compute Engine Google Kubernetes Engine Google internal

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tpu_cluster_resolver.py#L193-L331)

    
    
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
    

Creates a new TPUClusterResolver object.

The ClusterResolver will then use the parameters to query the Cloud TPU APIs
for the IP addresses and ports of each Cloud TPU listed.

#### Args:

  * **`tpu`** : A string corresponding to the TPU to use. If the string is an empty string, the string 'local', or a string that begins with 'grpc://' or '/bns', then it is assumed to not correspond with a Cloud TPU and will instead be passed as the session master and no ClusterSpec propagation will be done. In the future, this may also support a list of strings when multiple Cloud TPUs are used.
  * **`zone`** : Zone where the TPUs are located. If omitted or empty, we will assume that the zone of the TPU is the same as the zone of the GCE VM, which we will try to discover from the GCE metadata service.
  * **`project`** : Name of the GCP project containing Cloud TPUs. If omitted or empty, we will try to discover the project name of the GCE VM from the GCE metadata service.
  * **`job_name`** : Name of the TensorFlow job the TPUs belong to.
  * **`coordinator_name`** : The name to use for the coordinator. Set to None if the coordinator should not be included in the computed ClusterSpec.
  * **`coordinator_address`** : The address of the coordinator (typically an ip:port pair). If set to None, a TF server will be started. If coordinator_name is None, a TF server will not be started even if coordinator_address is None.
  * **`credentials`** : GCE Credentials. If None, then we use default credentials from the oauth2client
  * **`service`** : The GCE API object returned by the googleapiclient.discovery function. If you specify a custom service object, then the credentials parameter will be ignored.
  * **`discovery_url`** : A URL template that points to the location of the discovery service. It should have two parameters {api} and {apiVersion} that when filled in produce an absolute URL to the discovery document for that service. The environment variable 'TPU_API_DISCOVERY_URL' will override this.

#### Raises:

  * **`ImportError`** : If the googleapiclient is not installed.
  * **`ValueError`** : If no TPUs are specified.
  * **`RuntimeError`** : If an empty TPU name is specified and this is running in a Google Cloud environment.

## Properties

### `environment`

Returns the current environment which TensorFlow is running in.

## Methods

### `cluster_spec`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tpu_cluster_resolver.py#L388-L454)

    
    
    cluster_spec()
    

Returns a ClusterSpec object based on the latest TPU information.

We retrieve the information from the GCE APIs every time this method is
called.

#### Returns:

A ClusterSpec containing host information returned from Cloud TPUs, or None.

#### Raises:

  * **`RuntimeError`** : If the provided TPU is not healthy.

### `get_job_name`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tpu_cluster_resolver.py#L383-L386)

    
    
    get_job_name()
    

### `get_master`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tpu_cluster_resolver.py#L380-L381)

    
    
    get_master()
    

### `master`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tpu_cluster_resolver.py#L333-L378)

    
    
    master(
        task_type=None,
        task_id=None,
        rpc_layer=None
    )
    

Get the Master string to be used for the session.

In the normal case, this returns the grpc path (grpc://1.2.3.4:8470) of first
instance in the ClusterSpec returned by the cluster_spec function.

If a non-TPU name is used when constructing a TPUClusterResolver, that will be
returned instead (e.g. If the tpus argument's value when constructing this
TPUClusterResolver was 'grpc://10.240.1.2:8470', 'grpc://10.240.1.2:8470' will
be returned).

#### Args:

  * **`task_type`** : (Optional, string) The type of the TensorFlow task of the master.
  * **`task_id`** : (Optional, integer) The index of the TensorFlow task of the master.
  * **`rpc_layer`** : (Optional, string) The RPC protocol TensorFlow should use to communicate with TPUs.

#### Returns:

string, the connection string to use when creating a session.

#### Raises:

  * **`ValueError`** : If none of the TPUs specified exists.

### `num_accelerators`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cluster_resolver/tpu_cluster_resolver.py#L470-L511)

    
    
    num_accelerators(
        task_type=None,
        task_id=None,
        config_proto=None
    )
    

Returns the number of TPU cores per worker.

Connects to the master and list all the devices present in the master, and
counts them up. Also verifies that the device counts per host in the cluster
is the same before returning the number of TPU cores per host.

#### Args:

  * **`task_type`** : Unused.
  * **`task_id`** : Unused.
  * **`config_proto`** : Used to create a connection to a TPU master in order to retrieve the system metadata.

#### Raises:

  * **`RuntimeError`** : If we cannot talk to a TPU worker after retrying or if the number of TPU devices per host is different.

