
Wraps a python function and uses it as a TensorFlow op.
### Aliases:
- `tf.compat.v1.numpy_function`
- `tf.compat.v2.numpy_function`

```
 tf.numpy_function(
    func,
    inp,
    Tout,
    name=None
)
```
### Used in the tutorials:
- ``I``m``a``g``e`` ``c``a``p``t``i``o``n``i``n``g`` ``w``i``t``h`` ``v``i``s``u``a``l`` ``a``t``t``e``n``t``i``o``n``

Given a python function func, which takes numpy arrays as its arguments and returns numpy arrays as its outputs, wrap this function as an operation in a TensorFlow graph. The following snippet constructs a simple TensorFlow graph that invokes the np.sinh() NumPy function as a operation in the graph:

```
 def my_func(x):
  # x will be a numpy array with the contents of the placeholder below
  return np.sinh(x)
input = tf.compat.v1.placeholder(tf.float32)
y = tf.compat.v1.numpy_function(my_func, [input], tf.float32)
```
[tf.compat.v1.numpy_function()](https://www.tensorflow.org/api_docs/python/tf/numpy_function)N.B. The  operation has the following known limitations:

- The body of the `func`tion (i.e. `func`) will not be serialized in a `GraphDef`. Therefore, you should not use this `func`tion if you need to serialize your model and restore it in a different environment.
- The operation must run in the same address space as the Python program that calls `tf.compat.v1.numpy_function`(). If you are using distributed TensorFlow, you must run a `tf.distribute.Server` in the same process as the program that calls `tf.compat.v1.numpy_function`() and you must pin the created operation to a device in that server (e.g. using with tf.device():).
#### Args:
- `func`: A Python `func`tion, which accepts `ndarray` objects as arguments and returns a list of `ndarray` objects (or a single `ndarray`). This `func`tion must accept as many arguments as there are tensors in `inp`, and these argument types will match the corresponding `tf.Tensor` objects in `inp`. The returns `ndarray`s must match the number and types defined `Tout`. Important Note: Input and output numpy `ndarray`s of `func` are not guaranteed to be copies. In some cases their underlying memory will be shared with the corresponding TensorFlow tensors. In-place modification or storing `func` `inp`ut or return values in python datastructures without explicit (np.)copy can have non-deterministic consequences.
- `inp`: A list of `Tensor` objects.
- `Tout`: A list or tuple of tensorflow data types or a single tensorflow data type if there is only one, indicating what `func` returns.
- `stateful`: (Boolean.) If True, the `func`tion should be considered `stateful`. If a `func`tion is stateless, when given the same `inp`ut it will return the same output and have no observable side effects. Optimizations such as common subexpression elimination are only performed on stateless operations.
- `name`: A `name` for the operation (optional).
#### Returns:

A list of Tensor or a single Tensor which func computes.

Wraps a python function and uses it as a TensorFlow op.
### Aliases:
- `tf.compat.v1.numpy_function`
- `tf.compat.v2.numpy_function`

```
 tf.numpy_function(
    func,
    inp,
    Tout,
    name=None
)
```
### Used in the tutorials:
- ``I``m``a``g``e`` ``c``a``p``t``i``o``n``i``n``g`` ``w``i``t``h`` ``v``i``s``u``a``l`` ``a``t``t``e``n``t``i``o``n``

Given a python function func, which takes numpy arrays as its arguments and returns numpy arrays as its outputs, wrap this function as an operation in a TensorFlow graph. The following snippet constructs a simple TensorFlow graph that invokes the np.sinh() NumPy function as a operation in the graph:

```
 def my_func(x):
  # x will be a numpy array with the contents of the placeholder below
  return np.sinh(x)
input = tf.compat.v1.placeholder(tf.float32)
y = tf.compat.v1.numpy_function(my_func, [input], tf.float32)
```
[tf.compat.v1.numpy_function()](https://www.tensorflow.org/api_docs/python/tf/numpy_function)N.B. The  operation has the following known limitations:

- The body of the `func`tion (i.e. `func`) will not be serialized in a `GraphDef`. Therefore, you should not use this `func`tion if you need to serialize your model and restore it in a different environment.
- The operation must run in the same address space as the Python program that calls `tf.compat.v1.numpy_function`(). If you are using distributed TensorFlow, you must run a `tf.distribute.Server` in the same process as the program that calls `tf.compat.v1.numpy_function`() and you must pin the created operation to a device in that server (e.g. using with tf.device():).
#### Args:
- `func`: A Python `func`tion, which accepts `ndarray` objects as arguments and returns a list of `ndarray` objects (or a single `ndarray`). This `func`tion must accept as many arguments as there are tensors in `inp`, and these argument types will match the corresponding `tf.Tensor` objects in `inp`. The returns `ndarray`s must match the number and types defined `Tout`. Important Note: Input and output numpy `ndarray`s of `func` are not guaranteed to be copies. In some cases their underlying memory will be shared with the corresponding TensorFlow tensors. In-place modification or storing `func` `inp`ut or return values in python datastructures without explicit (np.)copy can have non-deterministic consequences.
- `inp`: A list of `Tensor` objects.
- `Tout`: A list or tuple of tensorflow data types or a single tensorflow data type if there is only one, indicating what `func` returns.
- `stateful`: (Boolean.) If True, the `func`tion should be considered `stateful`. If a `func`tion is stateless, when given the same `inp`ut it will return the same output and have no observable side effects. Optimizations such as common subexpression elimination are only performed on stateless operations.
- `name`: A `name` for the operation (optional).
#### Returns:

A list of Tensor or a single Tensor which func computes.
