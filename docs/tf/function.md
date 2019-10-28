Creates a callable TensorFlow graph from a Python function.
### Aliases:
- `tf.compat.v1.function`
- `tf.compat.v2.function`

```
 tf.function(
    func=None,
    input_signature=None,
    autograph=True,
    experimental_autograph_options=None,
    experimental_relax_shapes=False
)
```
### Used in the guide:
- ``U``s``i``n``g`` ``t``h``e`` ``S``a``v``e``d``M``o``d``e``l`` ``f``o``r``m``a``t``
### Used in the tutorials:
- ``N``e``u``r``a``l`` ``s``t``y``l``e`` ``t``r``a``n``s``f``e``r``
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
- ``P``i``x``2``P``i``x``
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
`function` constructs a callable that executes a TensorFlow graph (`tf.Graph`) created by tracing the TensorFlow operations in `func`. This allows the TensorFlow runtime to apply optimizations and exploit parallelism in the computation defined by `func`.
Example Usage

```
 def f(x, y):
  return tf.reduce_mean(tf.multiply(x ** 2, 3) + y)

g = tf.function(f)

x = tf.constant([[2.0, 3.0]])
y = tf.constant([[3.0, -2.0]])

# `f` and `g` will return the same value, but `g` will be executed as a
# TensorFlow graph.
assert f(x, y).numpy() == g(x, y).numpy()

# Tensors and tf.Variables used by the Python function are captured in the
# graph.
@tf.function
def h():
  return f(x, y)

assert (h().numpy() == f(x, y).numpy()).all()

# Data-dependent control flow is also captured in the graph. Supported
# control flow statements include `if`, `for`, `while`, `break`, `continue`,
# `return`.
@tf.function
def g(x):
  if tf.reduce_sum(x) > 0:
    return x * x
  else:
    return -x // 2

# print and TensorFlow side effects are supported, but exercise caution when
# using Python side effects like mutating objects, saving to files, etc.
l = []

@tf.function
def g(x):
  for i in x:
    print(i)                              # Works
    tf.compat.v1.assign(v, i)                       # Works
    tf.compat.v1.py_func(lambda i: l.append(i))(i)  # Works
    l.append(i)                           # Caution! Doesn't work.
```
