## Class Tensor
Represents one of the outputs of an `Operation`.
### Aliases:
- Class `tf.compat.v1.Tensor`
- Class `tf.compat.v2.Tensor`
A `Tensor` is a symbolic handle to one of the outputs of an `Operation`. It does not hold the values of that operation's output, but instead provides a means of computing those values in a `Tensor`Flow `tf.compat.v1.Session`.
This class has two primary purposes:
In th`e` following `e`xampl`e`, `c`, `d`, an`d` `e` ar`e` symboli`c` `Tensor` obj`e``c`ts, wh`e`r`e`as `result` is a numpy array that stor`e`s a `c`on`c`r`e`t`e` valu`e`:

```
 # Build a dataflow graph.
c = tf.constant([[1.0, 2.0], [3.0, 4.0]])
d = tf.constant([[1.0, 1.0], [0.0, 1.0]])
e = tf.matmul(c, d)

# Construct a `Session` to execute the graph.
sess = tf.compat.v1.Session()

# Execute the graph and store the value that `e` represents in `result`.
result = sess.run(e)
```
## __init__
View source

```
 __init__(
    op,
    value_index,
    dtype
)
```
Creates a new `Tensor`.
#### Args:
- `op`: An `Operation`. `Operation` that computes this tensor.
- `value_index`: An `int`. Index of the operation's endpo`int` that produces this tensor.
- `dtype`: A `DType`. Type of elements stored in this tensor.
#### Raises:
- `TypeError`: If the op is not an `Operation`.
## Properties
### device
The name of the device on which this tensor will be produced, or None.
### dtype
The `DType` of elements in this tensor.
### graph
The `Graph` that contains this tensor.
### name
The string name of this tensor.
### op
The `Operation` that produces this tensor as an output.
### shape
Returns the `TensorShape` that represents the shape of this tensor.
The shape is computed using shape inference functions that are registered in the Op for each `Operation`. See `tf.TensorShape` for more details of what a shape represents.
The inferred shape of a tensor is used to provide shape information without having to launch the graph in a session. This can be used for debugging, and providing early error messages. For example:

```
 c = tf.constant([[1.0, 2.0, 3.0], [4.0, 5.0, 6.0]])

print(c.shape)
==> TensorShape([Dimension(2), Dimension(3)])

d = tf.constant([[1.0, 0.0], [0.0, 1.0], [1.0, 0.0], [0.0, 1.0]])

print(d.shape)
==> TensorShape([Dimension(4), Dimension(2)])

# Raises a ValueError, because `c` and `d` do not have compatible
# inner dimensions.
e = tf.matmul(c, d)

f = tf.matmul(c, d, transpose_a=True, transpose_b=True)

print(f.shape)
==> TensorShape([Dimension(3), Dimension(4)])
```
