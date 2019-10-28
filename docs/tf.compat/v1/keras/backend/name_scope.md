## Class name_scope
A context manager for use when defining a Python op.
### Aliases:
- Class `tf.compat.v1.name_scope`
This context manager validates that the given `values` are from the same graph, makes that graph the default graph, and pushes a name scope in that graph (see `tf.Graph.name_scope` for more details on that).
For example, to define a new Python op called `my_op`:

```
 def my_op(a, b, c, name=None):
  with tf.name_scope(name, "MyOp", [a, b, c]) as scope:
    a = tf.convert_to_tensor(a, name="a")
    b = tf.convert_to_tensor(b, name="b")
    c = tf.convert_to_tensor(c, name="c")
    # Define some computation that uses `a`, `b`, and `c`.
    return foo_op(..., name=scope)
```
## __init__
View source

```
 __init__(
    name,
    default_name=None,
    values=None
)
```
Initialize the context manager.
#### Args:
- `name`: The `name` argument that is passed to the op function.
- `default_name`: The default `name` to use if the `name` argument is `None`.
- `values`: The list of `Tensor` arguments that are passed to the op function.
#### Raises:
- `TypeError`: if `default_name` is passed in but not a string.
## Properties
### name
## Methods
### __enter__
View source

```
 __enter__()
```
Start the scope block.
#### Returns:
The scope name.
#### Raises:
- `ValueError`: if neither `name` nor `default_name` is provided but `values` are.
### __exit__
View source

```
 __exit__(
    type_arg,
    value_arg,
    traceback_arg
)
```
