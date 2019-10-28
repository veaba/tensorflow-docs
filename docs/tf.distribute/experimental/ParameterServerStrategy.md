## Class ParameterServerStrategy
An asynchronous multi-worker parameter server tf.distribute strategy.
Inherits From: `Strategy`
### Aliases:
- Class `tf.compat.v2.distribute.experimental.ParameterServerStrategy`
This strategy requires two jobs: workers and parameter servers. Variables and updates to those variables will be assigned to parameter servers and other operations are assigned to workers.
When each worker has more than one GPU, operations will be replicated on all GPUs. Even though operations may be replicated, variables are not and each worker shares a common view for which parameter server a variable is assigned to.
By default it uses `TFConfigClusterResolver` to detect configurations for multi-worker training. This requires a 'TF_CONFIG' environment variable and the 'TF_CONFIG' must have a cluster spec.
This class assumes each worker is running the same code independently, but parameter servers are running a standard server. This means that while each worker will synchronously compute a single gradient update across all GPUs, updates between workers proceed asynchronously. Operations that occur only on the first replica (such as incrementing the global step), will occur on the first replica of every worker.
