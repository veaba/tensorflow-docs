

## Class  `VariableAggregation` 
指示如何聚合分布式变量。

[ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) distributes a model by making multiple copies(called "replicas") acting data-parallel on different elements of the inputbatch. When performing some variable-update operation, say `var.assign_add(x)` , in a model, we need to resolve how to combine thedifferent values for  `x`  computed in the different replicas.

-  `NONE` : This is the default, giving an error if you use avariable-update operation with multiple replicas.
-  `SUM` : Add the updates across replicas.
-  `MEAN` : Take the arithmetic mean ("average") of the updates across replicas.
-  `ONLY_FIRST_REPLICA` : This is for when every replica is performing the sameupdate, but we only want to perform the update once. Used, e.g., for theglobal step counter.
-  `ONLY_FIRST_TOWER` : Deprecated alias for  `ONLY_FIRST_REPLICA` .


## Class 成员
-  `MEAN`  []()
-  `NONE`  []()
-  `ONLY_FIRST_REPLICA`  []()
-  `SUM`  []()
