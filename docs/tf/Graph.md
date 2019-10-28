## Class Graph
A TensorFlow computation, represented as a dataflow graph.
### Aliases:
- Class `tf.compat.v1.Graph`
- Class `tf.compat.v2.Graph`
A `Graph` contains a set of `tf.Operation` objects, which represent units of computation; and `tf.Tensor` objects, which represent the units of data that flow between operations.
A default `Graph` is always registered, and accessible by calling `tf.compat.v1.get_default_graph`. To add an operation to the default graph, simply call one of the functions that defines a new `Operation`:

```
 c = tf.constant(4.0)
assert c.graph is tf.compat.v1.get_default_graph()
```
Another typical usage involves the `tf.Graph.as_default` context manager, which overrides the current default graph for the lifetime of the context:

```
 g = tf.Graph()
with g.as_default():
  # Define operations and tensors in `g`.
  c = tf.constant(30.0)
  assert c.graph is g
```
Important note: This class is not thread-safe for graph construction. All operations should be created from a single thread, or external synchronization must be provided. Unless otherwise specified, all methods are not thread-safe.
A `Graph` instance supports an arbitrary number of "collections" that are identified by name. For convenience when building a large graph, collections can store groups of related objects: for example, the `tf.Variable` uses a collection (named `tf.GraphKeys.GLOBAL_VARIABLES`) for all variables that are created during the construction of a graph. The caller may define additional collections by specifying a new name.
## __init__
View source

```
 __init__()
```
Creates a new, empty Graph.
## Properties
### building_function
Returns True iff this graph represents a function.
### collections
Returns the names of the collections known to this graph.
### finalized
True if this graph has been finalized.
### graph_def_versions
The GraphDef version information of this graph.
For details on the meaning of each version, see `GraphDef`.
#### Returns:
A `VersionDef`.
### seed
The graph-level random seed of this graph.
### version
Returns a version number that increases as ops are added to the graph.
Note that this is unrelated to the `tf.Graph.graph_def_versions`.
#### Returns:
An integer version that increases as ops are added to the graph.
## Methods
### add_to_collection
View source

```
 add_to_collection(
    name,
    value
)
```
Stores `value` in the collection with the given `name`.
Note that collections are not sets, so it is possible to add a value to a collection several times.
#### Args:
- `name`: The key for the collection. The `GraphKeys` class contains many standard `name`s for collections.
- `value`: The `value` to add to the collection.
### add_to_collections
View source

```
 add_to_collections(
    names,
    value
)
```
Stores `value` in the collections given by `names`.
Note that collections are not sets, so it is possible to add a `value` to a collection several times. This function makes sure that duplicates in `names` are ignored, but it will not check for pre-existing membership of `value` in any of the collections in `names`.
`names` can be any iterable, but if `names` is a string, it is treated as a single collection name.
#### Args:
- `names`: The keys for the collections to add to. The `GraphKeys` class contains many standard `names` for collections.
- `value`: The `value` to add to the collections.
### as_default
View source

```
 as_default()
```
Returns a context manager that makes this `Graph` the default graph.
This method should be used if you want to create multiple graphs in the same process. For convenience, a global default graph is provided, and all ops will be added to this graph if you do not create a new graph explicitly.
Use this method `with` the `with` keyword to specify that ops created `with`in the scope of a block should be added to this graph. In this case, once the scope of the `with` is exited, the previous default graph is set again as default. There is a stack, so it's ok to have multiple nested levels of `as_default` calls.
The default graph is a property of the current thread. If you create a new thread, and wish to use the default graph in that thread, you must explicitly add a with g.as_default(): in that thread's function.
The following code examples are equivalent:

```
 # 1. Using Graph.as_default():
g = tf.Graph()
with g.as_default():
  c = tf.constant(5.0)
  assert c.graph is g

# 2. Constructing and making default:
with tf.Graph().as_default() as g:
  c = tf.constant(5.0)
  assert c.graph is g
```
If eager execution is enabled ops created under this context manager will be added to the graph instead of executed eagerly.
#### Returns:
A context manager for using this graph as the default graph.
### as_graph_def
View source

```
 as_graph_def(
    from_version=None,
    add_shapes=False
)
```
Returns a serialized `GraphDef` representation of this graph.
The serialized `GraphDef` can be imported into another `Graph` (using `tf.import_graph_def`) or used with the C++ Session API.
This method is thread-safe.
#### Args:
- `from_version`: Optional. If this is set, returns a `GraphDef` containing only the nodes that were added to this graph since its `version` property had the given value.
- `add_shapes`: If true, adds an "_output_shapes" list attr to each node with the inferred shapes of each of its outputs.
#### Returns:
A `GraphDef` protocol buffer.
#### Raises:
- `ValueError`: If the `graph_def` would be too large.
### as_graph_element
View source

```
 as_graph_element(
    obj,
    allow_tensor=True,
    allow_operation=True
)
```
Returns the `obj`ect referred to by `obj`, as an `Operation` or `Tensor`.
This function validates that `obj` represents an element of this graph, and gives an informative error message if it is not.
This function is the canonical way to get/validate an object of one of the allowed types from an external argument reference in the Session API.
This method may be called concurrently from multiple threads.
#### Args:
#### Returns:
The `Tensor` or `Operation` in the Graph corresponding to `obj`.
#### Raises:
- `TypeError`: If `obj` is not a type we support attempting to convert to types.
- `ValueError`: If `obj` is of an appropriate type but invalid. For example, an invalid string.
- `KeyError`: If `obj` is not an `obj`ect in the graph.
### clear_collection
View source

```
 clear_collection(name)
```
Clears all values in a collection.
#### Args:
- `name`: The key for the collection. The `GraphKeys` class contains many standard `name`s for collections.
### colocate_with
View source

```
 colocate_with(
    op,
    ignore_existing=False
)
```
Returns a context manager that specifies an op to colocate with.
#### For example:

```
 a = tf.Variable([1.0])
with g.colocate_with(a):
  b = tf.constant(1.0)
  c = tf.add(a, b)
```
`b` `a`nd `c` will `a`lw`a`ys `b`e `c`olo`c``a`ted with `a`, no m`a`tter where `a` is eventu`a`lly pl`a``c`ed.
NOTE Using a colocation scope resets any existing device constraints.
If `op` is `None` then `ignore_existing` must be `True` and the new sc`op`e resets all colocation and device constraints.
#### Args:
- `op`: The `op` to colocate all created `op`s with, or `None`.
- `ignore_existing`: If true, only applies colocation of this `op` within the context, rather than applying all colocation pr`op`erties on the stack. If `op` is `None`, this value must be `True`.
#### Raises:
- `ValueError`: if op is None but ignore_existing is False.
#### Yields:
A context manager that specifies the op with which to colocate newly created ops.
### container
View source

```
 container(container_name)
```
Returns a context manager that specifies the resource container to use.
