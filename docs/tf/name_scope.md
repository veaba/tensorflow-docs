[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/name_scope) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L6386-L6454)  
---|---  
  
## Class `name_scope`

A context manager for use when defining a Python op.

Inherits From:
[`name_scope`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/keras/backend/name_scope)

### Aliases:

  * Class [`tf.compat.v2.name_scope`](/api_docs/python/tf/name_scope)

This context manager pushes a name scope, which will make the name of all
operations added within it have a prefix.

For example, to define a new Python op called `my_op`:

    
    
    def my_op(a, b, c, name=None):
      with tf.name_scope("MyOp") as scope:
        a = tf.convert_to_tensor(a, name="a")
        b = tf.convert_to_tensor(b, name="b")
        c = tf.convert_to_tensor(c, name="c")
        # Define some computation that uses `a`, `b`, and `c`.
        return foo_op(..., name=scope)
    

When executed, the Tensors `a`, `b`, `c`, will have names `MyOp/a`, `MyOp/b`,
and `MyOp/c`.

If the scope name already exists, the name will be made unique by appending
`_n`. For example, calling `my_op` the second time will generate `MyOp_1/a`,
etc.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L6412-L6424)

    
    
    __init__(name)
    

Initialize the context manager.

#### Args:

  * **`name`** : The prefix to use on all names created within the name scope.

#### Raises:

  * **`ValueError`** : If name is None, or not a string.

## Properties

### `name`

## Methods

### `__enter__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L6430-L6449)

    
    
    __enter__()
    

Start the scope block.

#### Returns:

The scope name.

#### Raises:

  * **`ValueError`** : if neither `name` nor `default_name` is provided but `values` are.

### `__exit__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L6451-L6454)

    
    
    __exit__(
        type_arg,
        value_arg,
        traceback_arg
    )
    

