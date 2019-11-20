[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/VariableAggregation) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variables.py#L93-L124)  
---|---  
  
## Class `VariableAggregation`

Indicates how a distributed variable will be aggregated.

### Aliases:

  * Class [`tf.compat.v2.VariableAggregation`](/api_docs/python/tf/VariableAggregation)

[`tf.distribute.Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)
distributes a model by making multiple copies (called "replicas") acting data-
parallel on different elements of the input batch. When performing some
variable-update operation, say `var.assign_add(x)`, in a model, we need to
resolve how to combine the different values for `x` computed in the different
replicas.

  * `NONE`: This is the default, giving an error if you use a variable-update operation with multiple replicas.
  * `SUM`: Add the updates across replicas.
  * `MEAN`: Take the arithmetic mean ("average") of the updates across replicas.
  * `ONLY_FIRST_REPLICA`: This is for when every replica is performing the same update, but we only want to perform the update once. Used, e.g., for the global step counter.

## Class Members

  * `MEAN`
  * `NONE`
  * `ONLY_FIRST_REPLICA`
  * `SUM`

