Returns the local seeds an operation should use given an op-specific seed.

```
 tf.compat.v1.get_seed(op_seed) 
```

Given operation-specific seed,  `op_seed` , this helper function returns twoseeds derived from graph-level and op-level seeds. Many random operationsinternally use the two seeds to allow user to change the seed globally for agraph, or for only specific operations.

For details on how the graph-level seed interacts with op seeds, see[ `tf.compat.v1.random.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed).

#### 参数：
- **`op_seed`** : integer.


#### 返回：
A tuple of two integers that should be used for the local seed of thisoperation.

