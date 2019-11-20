[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/distribute/InputContext) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L343-L404)  
  
  
## Class `InputContext`

A class wrapping information needed by an input function.

### Aliases:

  * Class [`tf.compat.v1.distribute.InputContext`](/api_docs/python/tf/distribute/InputContext)
  * Class [`tf.compat.v2.distribute.InputContext`](/api_docs/python/tf/distribute/InputContext)

This is a context class that is passed to the user's input function and
contains information about the compute replicas and input pipelines. The
number of compute replicas (in sync training) helps compute the local batch
size from the desired global batch size for each replica. The input pipeline
information can be used to return a different subset of the input in each
replica (for e.g. shard the input pipeline, use a different input source etc).

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L355-L369)

    
    
    __init__(
        num_input_pipelines=1,
        input_pipeline_id=0,
        num_replicas_in_sync=1
    )
    

Initializes an InputContext object.

#### Args:

  * **`num_input_pipelines`** : the number of input pipelines in a cluster.
  * **`input_pipeline_id`** : the current input pipeline id, should be an int in [0,`num_input_pipelines`).
  * **`num_replicas_in_sync`** : the number of replicas that are in sync.

## Properties

### `input_pipeline_id`

Returns the input pipeline ID.

### `num_input_pipelines`

Returns the number of input pipelines.

### `num_replicas_in_sync`

Returns the number of compute replicas in sync.

## Methods

### `get_per_replica_batch_size`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L386-L404)

    
    
    get_per_replica_batch_size(global_batch_size)
    

Returns the per-replica batch size.

#### Args:

  * **`global_batch_size`** : the global batch size which should be divisible by `num_replicas_in_sync`.

#### Returns:

the per-replica batch size.

#### Raises:

  * **`ValueError`** : if `global_batch_size` not divisible by `num_replicas_in_sync`.

