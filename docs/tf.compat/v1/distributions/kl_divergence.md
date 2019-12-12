Get the KL-divergence KL(distribution_a || distribution_b). (deprecated)

```
 tf.compat.v1.distributions.kl_divergence(    distribution_a,    distribution_b,    allow_nan_stats=True,    name=None) 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed after 2019-01-01.Instructions for updating:The TensorFlow Distributions library has moved to TensorFlow Probability (https://github.com/tensorflow/probability). You should update all references to use [ `tfp.distributions` ](/probability/api_docs/python/tfp/distributions) instead of  `tf.distributions` .
If there is no KL method registered specifically for  `type(distribution_a)` and  `type(distribution_b)` , then the class hierarchies of these types aresearched.

If one KL method is registered between any pairs of classes in these twoparent hierarchies, it is used.

If more than one such registered method exists, the method whose registeredclasses have the shortest sum MRO paths to the input types is used.

If more than one such shortest path exists, the first methodidentified in the search is used (favoring a shorter MRO distance to `type(distribution_a)` ).

#### Args:
- **`distribution_a`** : The first distribution.
- **`distribution_b`** : The second distribution.
- **`allow_nan_stats`** : Python  `bool` , default  `True` . When  `True` ,statistics (e.g., mean, mode, variance) use the value " `NaN` " toindicate the result is undefined. When  `False` , an exception is raisedif one or more of the statistic's batch members are undefined.
- **`name`** : Python  `str`  name prefixed to Ops created by this class.


#### Returns:
A Tensor with the batchwise KL-divergence between  `distribution_a` and  `distribution_b` .

#### Raises:
- **`NotImplementedError`** : If no KL method is defined for distribution typesof  `distribution_a`  and  `distribution_b` .
