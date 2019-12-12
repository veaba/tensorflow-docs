

## Class  `name_scope` 
A context manager for use when defining a Python op.

This context manager validates that the given  `values`  are from thesame graph, makes that graph the default graph, and pushes aname scope in that graph (see[ `tf.Graph.name_scope` ](https://tensorflow.google.cn/api_docs/python/tf/Graph#name_scope)for more details on that).

For example, to define a new Python op called  `my_op` :

```
 def)
 )
 )
    # Define some computation that uses `a`, `b`, and `c`.
    return foo_op(..., name=scope)
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L6280-L6306)

```
 __init__(
    name,
    default_name=None,
    values=None
)
 
```

Initialize the context manager.

#### Args:
- **`name`** : The name argument that is passed to the op function.
- **`default_name`** : The default name to use if the  `name`  argument is  `None` .
- **`values`** : The list of  `Tensor`  arguments that are passed to the op function.


#### Raises:
- **`TypeError`** : if  `default_name`  is passed in but not a string.


## Properties


###  `name` 


## Methods


###  `__enter__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L6308-L6353)

```
 __enter__()
 
```

Start the scope block.

#### Returns:
The scope name.

#### Raises:
- **`ValueError`** : if neither  `name`  nor  `default_name`  is providedbut  `values`  are.


###  `__exit__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L6355-L6364)

```
 __exit__(
    type_arg,
    value_arg,
    traceback_arg
)
 
```

