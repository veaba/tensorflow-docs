获取具有这些参数的现有变量或创建新变量。

```
 tf.compat.v1.get_variable(    name,    shape=None,    dtype=None,    initializer=None,    regularizer=None,    trainable=None,    collections=None,    caching_device=None,    partitioner=None,    validate_shape=True,    use_resource=None,    custom_getter=None,    constraint=None,    synchronization=tf.VariableSynchronization.AUTO,    aggregation=tf.compat.v1.VariableAggregation.NONE) 
```

This function prefixes the name with the current variable scopeand performs reuse checks. See the[Variable Scope How To](https://tensorflow.org/guide/variables)for an extensive description of how reusing works. Here is a basic example:

```
 def foo():
  with tf.variable_scope("foo", reuse=tf.AUTO_REUSE):
    v = tf.get_variable("v", [1])
  return v

v1 = foo()  # Creates v.
v2 = foo()  # Gets the same, existing v.
assert v1 == v2
 
```

If initializer is  `None`  (the default), the default initializer passed inthe variable scope will be used. If that one is  `None`  too, a `glorot_uniform_initializer`  will be used. The initializer can also bea Tensor, in which case the variable is initialized to this value and shape.

Similarly, if the regularizer is  `None`  (the default), the default regularizerpassed in the variable scope will be used (if that is  `None`  too,then by default no regularization is performed).

If a partitioner is provided, a  `PartitionedVariable`  is returned.Accessing this object as a  `Tensor`  returns the shards concatenated alongthe partition axis.

Some useful partitioners are available.  See, e.g., `variable_axis_size_partitioner`  and  `min_max_variable_partitioner` .

#### 参数：
- **`name`** : The name of the new or existing variable.
- **`shape`** : Shape of the new or existing variable.
- **`dtype`** : Type of the new or existing variable (defaults to  `DT_FLOAT` ).
- **`initializer`** : Initializer for the variable if one is created. Can either bean initializer object or a Tensor. If it's a Tensor, its shape must be knownunless validate_shape is False.
- **`regularizer`** : A (Tensor -> Tensor or None) function; the result ofapplying it on a newly created variable will be added to the collection `tf.GraphKeys.REGULARIZATION_LOSSES`  and can be used for regularization.
- **`trainable`** : If  `True`  also add the variable to the graph collection `GraphKeys.TRAINABLE_VARIABLES`  (see [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable)).
- **`collections`** : List of graph collections keys to add the Variable to.Defaults to  `[GraphKeys.GLOBAL_VARIABLES]`  (see [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable)).
- **`caching_device`** : Optional device string or function describing where theVariable should be cached for reading.  Defaults to the Variable'sdevice.  If not  `None` , caches on another device.  Typical use is tocache on the device where the Ops using the Variable reside, todeduplicate copying through  `Switch`  and other conditional statements.
- **`partitioner`** : Optional callable that accepts a fully defined  `TensorShape` and  `dtype`  of the Variable to be created, and returns a list ofpartitions for each axis (currently only one axis can be partitioned).
- **`validate_shape`** : If False, allows the variable to be initialized with avalue of unknown shape. If True, the default, the shape of initial_valuemust be known. For this to be used the initializer must be a Tensor andnot an initializer object.
- **`use_resource`** : If False, creates a regular Variable. If true, creates anexperimental ResourceVariable instead with well-defined semantics.Defaults to False (will later change to True). When eager execution isenabled this argument is always forced to be True.
- **`custom_getter`** : Callable that takes as a first argument the true getter, andallows overwriting the internal get_variable method.The signature of  `custom_getter`  should match that of this method,but the most future-proof version will allow for changes: `def custom_getter(getter, *args, **kwargs)` .  Direct access toall  `get_variable`  parameters is also allowed: `def custom_getter(getter, name, *args, **kwargs)` .  A simple identitycustom getter that simply creates variables with modified names is:


```
 def custom_getter(getter, name, *args, **kwargs):
  return getter(name + '_suffix', *args, **kwargs)
 
```

- **`constraint`** : An optional projection function to be applied to the variableafter being updated by an  `Optimizer`  (e.g. used to implement normconstraints or value constraints for layer weights). The function musttake as input the unprojected Tensor representing the value of thevariable and return the Tensor for the projected value(which must have the same shape). Constraints are not safe touse when doing asynchronous distributed training.
- **`synchronization`** : Indicates when a distributed a variable will beaggregated. Accepted values are constants defined in the class[ `tf.VariableSynchronization` ](https://tensorflow.google.cn/api_docs/python/tf/VariableSynchronization). By default the synchronization is set to `AUTO`  and the current  `DistributionStrategy`  chooseswhen to synchronize.
- **`aggregation`** : Indicates how a distributed variable will be aggregated.Accepted values are constants defined in the class[ `tf.VariableAggregation` ](https://tensorflow.google.cn/api_docs/python/tf/VariableAggregation).


#### 返回：
The created or existing  `Variable`  (or  `PartitionedVariable` , if apartitioner was used).

#### 加薪：
- **`ValueError`** : when creating a new variable and shape is not declared,when violating reuse during variable creation, or when  `initializer`  dtypeand  `dtype`  don't match. Reuse is set inside  `variable_scope` .
