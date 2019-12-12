

## Class  `VariableScope` 
Variable scope object to carry defaults to provide to  `get_variable` .

Many of the arguments we need for  `get_variable`  in a variable store are mosteasily handled with a context. This object is used for the defaults.

#### 属性：
- **`name`** : name of the current scope, used as prefix in get_variable.
- **`initializer`** : default initializer passed to get_variable.
- **`regularizer`** : default regularizer passed to get_variable.
- **`reuse`** : Boolean, None, or tf.compat.v1.AUTO_REUSE, setting the reuse inget_variable. When eager execution is enabled this argument is alwaysforced to be False.
- **`caching_device`** : string, callable, or None: the caching device passed toget_variable.
- **`partitioner`** : callable or  `None` : the partitioner passed to  `get_variable` .
- **`custom_getter`** : default custom getter passed to get_variable.
- **`name_scope`** : The name passed to [ `tf.name_scope` ](https://tensorflow.google.cn/api_docs/python/tf/name_scope).
- **`dtype`** : default type passed to get_variable (defaults to DT_FLOAT).
- **`use_resource`** : if False, create a normal Variable; if True create anexperimental ResourceVariable with well-defined semantics. Defaults toFalse (will later change to True). When eager execution is enabled thisargument is always forced to be True.
- **`constraint`** : An optional projection function to be applied to the variableafter being updated by an  `Optimizer`  (e.g. used to implement normconstraints or value constraints for layer weights). The function musttake as input the unprojected Tensor representing the value of thevariable and return the Tensor for the projected value (which must havethe same shape). Constraints are not safe to use when doing asynchronousdistributed training.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1047-L1076)

```
 __init__(    reuse,    name='',    initializer=None,    regularizer=None,    caching_device=None,    partitioner=None,    custom_getter=None,    name_scope='',    dtype=tf.dtypes.float32,    use_resource=None,    constraint=None) 
```

创建具有给定属性的新variablescope。

## 属性


###  `caching_device` 


###  `constraint` 


###  `custom_getter` 


###  `dtype` 


###  `initializer` 


###  `name` 


###  `original_name_scope` 


###  `partitioner` 


###  `regularizer` 


###  `reuse` 


###  `use_resource` 


## 方法


###  `get_collection` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1160-L1163)

```
 get_collection(name)
 
```

获取此作用域的变量。

###  `get_variable` 
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

获取具有此名称的现有变量或创建新变量。

###  `global_variables` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1169-L1171)

```
 global_variables()
 
```

获取此作用域的全局变量。

###  `local_variables` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1173-L1175)

```
 local_variables()
 
```

获取此作用域的局部变量。

###  `reuse_variables` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1122-L1124)

```
 reuse_variables()
 
```

在此范围内重用变量。

###  `set_caching_device` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1145-L1150)

```
 set_caching_device(caching_device)
 
```

Set caching_device for this scope.

###  `set_custom_getter` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1156-L1158)

```
 set_custom_getter(custom_getter)
 
```

为此作用域设置自定义getter。

###  `set_dtype` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1130-L1132)

```
 set_dtype(dtype)
 
```

为此作用域设置数据类型。

###  `set_initializer` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1126-L1128)

```
 set_initializer(initializer)
 
```

为此作用域设置初始值设定项。

###  `set_partitioner` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1152-L1154)

```
 set_partitioner(partitioner)
 
```

为此作用域设置分区程序。

###  `set_regularizer` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1141-L1143)

```
 set_regularizer(regularizer)
 
```

为此范围设置正则化器。

###  `set_use_resource` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1134-L1139)

```
 set_use_resource(use_resource)
 
```

设置是否为此作用域使用资源变量。

###  `trainable_variables` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variable_scope.py#L1165-L1167)

```
 trainable_variables()
 
```

获取此作用域的可训练变量。

