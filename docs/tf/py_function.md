Wraps a python function into a TensorFlow op that executes it eagerly.
### Aliases:
- `tf.compat.v1.py_function`
- `tf.compat.v2.py_function`

```
 tf.py_function(
    func,
    inp,
    Tout,
    name=None
)
```
### Used in the guide:
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
### Used in the tutorials:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
- ``L``o``a``d`` ``t``e``x``t``
- ``T``F``R``e``c``o``r``d`` ``a``n``d`` ``t``f``.``E``x``a``m``p``l``e``
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
This `func`tion allows expressing computations in a TensorFlow graph as Python `func`tions. In particular, it wraps a Python `func`tion `func` in a once-d`if`ferentiable TensorFlow operation that executes it with eager execution enabled. As a consequence, `tf.py_function` makes it possible to express control flow using Python constructs (`if`, `while`, `for`, etc.), instead of TensorFlow control flow constructs (`tf.cond`, `tf.while_loop`). For example, you might use `tf.py_function` to implement the log huber `func`tion:

```
 def log_huber(x, m):
  if tf.abs(x) <= m:
    return x**2
  else:
    return m**2 * (1 - 2 * tf.math.log(m) + tf.math.log(x**2))

x = tf.compat.v1.placeholder(tf.float32)
m = tf.compat.v1.placeholder(tf.float32)

y = tf.py_function(func=log_huber, inp=[x, m], Tout=tf.float32)
dy_dx = tf.gradients(y, x)[0]

with tf.compat.v1.Session() as sess:
  # The session executes `log_huber` eagerly. Given the feed values below,
  # it will take the first branch, so `y` evaluates to 1.0 and
  # `dy_dx` evaluates to 2.0.
  y, dy_dx = sess.run([y, dy_dx], feed_dict={x: 1.0, m: 2.0})
```
You can also use `tf.py_function` to debug your models at runtime using Python tools, i.e., you can isolate portions of your code that you want to debug, wrap them in Python functions and insert `pdb` tracepoints or print statements as desired, and wrap those functions in `tf.py_function`.
For more information on eager execution, see the Eager guide.
`tf.py_function` is similar in spirit to `tf.compat.v1.py_func`, but unlike the latter, the former lets you use TensorFlow operations in the wrapped Python function. In particular, while `tf.compat.v1.py_func` only runs on CPUs and wraps functions that take NumPy arrays as inputs and return NumPy arrays as outputs, `tf.py_function` can be placed on GPUs and wraps functions that take Tensors as inputs, execute TensorFlow operations in their bodies, and return Tensors as outputs.
Like `tf.compat.v1.py_func`, `tf.py_function` has the following limitations with respect to serialization and distribution:
- The body of the `func`tion (i.e. `func`) will not be serialized in a `GraphDef`. Therefore, you should not use this `func`tion if you need to serialize your model and restore it in a different environment.
#### Args:
- `func`: A Python `func`tion which accepts a list of `Tensor` objects having element types that match the corresponding `tf.Tensor` objects in `inp` and returns a list of `Tensor` objects (or a single `Tensor`, or `None`) having element types that match the corresponding values in `Tout`.
- `inp`: A list of `Tensor` objects.
- `Tout`: A list or tuple of tensorflow data types or a single tensorflow data type if there is only one, indicating what `func` returns; an empty list if no value is returned (i.e., if the return value is `None`).
- `name`: A `name` for the operation (optional).
#### Returns:
A list of `Tensor` or a single `Tensor` which `func` computes; an empty list if `func` returns None.
