## Class VariableScope

Variable scope object to carry defaults to provide to get_variable.

Many of the arguments we need for get_variable in a variable store are most easily handled with a context. This object is used for the defaults.
#### Attributes:
- `name`: `name` of the current scope, used as prefix in get_variable.
- `initializer`: default `initializer` passed to get_variable.
- `regularizer`: default `regularizer` passed to get_variable.
- `reuse`: Boolean, None, or tf.compat.v1.AUTO_REUSE, setting the `reuse` in get_variable. When eager execution is enabled this argument is always forced to be False.
- `caching_device`: string, callable, or None: the caching device passed to get_variable.
- `partitioner`: callable or `None`: the `partitioner` passed to `get_variable`.
- `custom_getter`: default custom getter passed to `get_variable`.
- `name`_scope: The `name` passed to `tf.name_scope`.
- `dtype`: default type passed to `get_variable` (defaults to DT_FLOAT).
- `use_resource`: if False, create a normal Variable; if True create an experimental ResourceVariable with well-defined semantics. Defaults to False (will later change to True). When eager execution is enabled this argument is always forced to be True.
- `constraint`: An optional projection function to be applied to the variable after being updated by an `Optimizer` (e.g. used to implement norm `constraint`s or value `constraint`s for layer weights). The function must take as input the unprojected Tensor representing the value of the variable and return the Tensor for the projected value (which must have the same shape). Constraints are not safe to use when doing asynchronous distributed training.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1047-L1076)


```
 __init__(
    reuse,
    name='',
    initializer=None,
    regularizer=None,
    caching_device=None,
    partitioner=None,
    custom_getter=None,
    name_scope='',
    dtype=tf.dtypes.float32,
    use_resource=None,
    constraint=None
)
```

Creates a new VariableScope with the given properties.
## Properties
### caching_device
### constraint
### custom_getter
### dtype
### initializer
### name
### original_name_scope
### partitioner
### regularizer
### reuse
### use_resource
## Methods
### get_collection
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1160-L1163)


```
 get_collection(name)
```

Get this scope's variables.
### get_variable
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1177-L1247)


```
 get_variable(
    var_store,
    name,
    shape=None,
    dtype=None,
    initializer=None,
    regularizer=None,
    reuse=None,
    trainable=None,
    collections=None,
    caching_device=None,
    partitioner=None,
    validate_shape=True,
    use_resource=None,
    custom_getter=None,
    constraint=None,
    synchronization=tf.VariableSynchronization.AUTO,
    aggregation=tf.compat.v1.VariableAggregation.NONE
)
```

Gets an existing variable with this name or create a new one.
### global_variables
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1169-L1171)


```
 global_variables()
```

Get this scope's global variables.
### local_variables
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1173-L1175)


```
 local_variables()
```

Get this scope's local variables.
### reuse_variables
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1122-L1124)


```
 reuse_variables()
```

Reuse variables in this scope.
### set_caching_device
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1145-L1150)


```
 set_caching_device(caching_device)
```

Set caching_device for this scope.
### set_custom_getter
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1156-L1158)


```
 set_custom_getter(custom_getter)
```

Set custom getter for this scope.
### set_dtype
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1130-L1132)


```
 set_dtype(dtype)
```

Set data type for this scope.
### set_initializer
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1126-L1128)


```
 set_initializer(initializer)
```

Set initializer for this scope.
### set_partitioner
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1152-L1154)


```
 set_partitioner(partitioner)
```

Set partitioner for this scope.
### set_regularizer
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1141-L1143)


```
 set_regularizer(regularizer)
```

Set regularizer for this scope.
### set_use_resource
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1134-L1139)


```
 set_use_resource(use_resource)
```

Sets whether to use ResourceVariables for this scope.
### trainable_variables
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1165-L1167)


```
 trainable_variables()
```

Get this scope's trainable variables.
