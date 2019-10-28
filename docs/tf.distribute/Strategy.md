## Class Strategy
A state & compute distribution policy on a list of devices.
### Aliases:
- Class `tf.compat.v2.distribute.Strategy`
See the guide for overview and examples.
#### In short:
- To use it with Keras `compile`/`fit`, please read.
- You may pass descendant of `tf.distribute.Strategy` to `tf.estimator.RunConfig` to specify how a `tf.estimator.Estimator` should distribute its computation. See guide.
- Otherwise, use `tf.distribute.Strategy.scope` to specify that a strategy should be used when building an executing your model. (This puts you in the "cross-replica context" for this strategy, which means the strategy is put in control of things like variable placement.)
- If you are writing a custom training loop, you will need to call a few more methods, see the guide:
Start by either creating a `tf.data.Dataset` normally or using `tf.distribute.experimental_make_numpy_dataset` to make a dataset out of a `numpy` array.
Use `tf.distribute.Strategy.experimental_distribute_dataset` to convert a `tf.data.Dataset` to something that produces "per-replica" values. If you want to manually specify how the dataset should be partitioned across replicas, use `tf.distribute.Strategy.experimental_distribute_dataset`s_from_function instead.
Use `tf.distribute.Strategy.experimental_run_v2` to run a function once per replica, taking values that may be "per-replica" (e.g. from a distributed dataset) and returning "per-replica" values. This function is executed in "replica context", which means each operation is performed separately on each replica.
Finally use a method (such as `tf.distribute.Strategy.reduce`) to convert the resulting "per-replica" values into ordinary `Tensor`s.
- Start by either creating a `tf.data.Dataset` normally or using `tf.distribute.experimental_make_numpy_dataset` to make a dataset out of a `numpy` array.
- Use `tf.distribute.Strategy.experimental_distribute_dataset` to convert a `tf.data.Dataset` to something that produces "per-replica" values. If you want to manually specify how the dataset should be partitioned across replicas, use `tf.distribute.Strategy.experimental_distribute_dataset`s_from_function instead.
- Use `tf.distribute.Strategy.experimental_run_v2` to run a function once per replica, taking values that may be "per-replica" (e.g. from a distributed dataset) and returning "per-replica" values. This function is executed in "replica context", which means each operation is performed separately on each replica.
- Finally use a method (such as `tf.distribute.Strategy.reduce`) to convert the resulting "per-replica" values into ordinary `Tensor`s.
A custom training loop can be as simple as:

```
 with my_strategy.scope():
  @tf.function
  def distribute_train_epoch(dataset):
    def replica_fn(input):
      # process input and return result
      return result

    total_result = 0
    for x in dataset:
      per_replica_result = my_strategy.experimental_run_v2(replica_fn,
                                                           args=(x,))
      total_result += my_strategy.reduce(tf.distribute.ReduceOp.SUM,
                                         per_replica_result, axis=None)
    return total_result

  dist_dataset = my_strategy.experimental_distribute_dataset(dataset)
  for _ in range(EPOCHS):
    train_result = distribute_train_epoch(dist_dataset)
```
