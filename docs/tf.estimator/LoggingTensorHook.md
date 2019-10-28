## Class LoggingTensorHook
Prints the given tensors every N local steps, every N seconds, or at end.
Inherits From: `SessionRunHook`
### Aliases:
- Class `tf.compat.v1.estimator.LoggingTensorHook`
- Class `tf.compat.v1.train.LoggingTensorHook`
- Class `tf.compat.v2.estimator.LoggingTensorHook`
The tensors will be printed to the log, with `INFO` severity. If you are not seeing the logs, you might want to add the following line after your imports:

```
   tf.compat.v1.logging.set_verbosity(tf.compat.v1.logging.INFO)
```
Note that if `at_end` is True, `tensors` should not include any tensor whose evaluation produces a side effect such as consuming additional inputs.
## __init__
View source

```
 __init__(
    tensors,
    every_n_iter=None,
    every_n_secs=None,
    at_end=False,
    formatter=None
)
```
Initializes a `LoggingTensorHook`.
#### Args:
- `tensors`: `dict` that maps string-valued tags to `tensors`/tensor names, or `iterable` of `tensors`/tensor names.
- `every_n_iter`: `int`, pr`int` the values of `tensors` once every N local steps taken on the current worker.
- `every_n_secs`: `int` or `float`, pr`int` the values of `tensors` once every N seconds. Exactly one of `every_n_iter` and `every_n_secs` should be provided.
- `at_end`: `bool` specifying whether to print the values of `tensors` at the end of the run.
- `formatter`: function, takes dict of `tag`->`Tensor` and returns a string. If `None` uses default printing all tensors.
#### Raises:
- `ValueError`: if `every_n_iter` is non-positive.
## Methods
### after_create_session
View source

```
 after_create_session(
    session,
    coord
)
```
Called when new TensorFlow session is created.
This is called to signal the hooks that a new session has been created. This has two essential differences with the situation in which `begin` is called:
- ``W``h``e``n`` ``t``h``i``s`` ``i``s`` ``c``a``l``l``e``d``,`` ``t``h``e`` ``g``r``a``p``h`` ``i``s`` ``f``i``n``a``l``i``z``e``d`` ``a``n``d`` ``o``p``s`` ``c``a``n`` ``n``o`` ``l``o``n``g``e``r`` ``b``e`` ``a``d``d``e``d`` ``t``o`` ``t``h``e`` ``g``r``a``p``h``.``
- ``T``h``i``s`` ``m``e``t``h``o``d`` ``w``i``l``l`` ``a``l``s``o`` ``b``e`` ``c``a``l``l``e``d`` ``a``s`` ``a`` ``r``e``s``u``l``t`` ``o``f`` ``r``e``c``o``v``e``r``i``n``g`` ``a`` ``w``r``a``p``p``e``d`` ``s``e``s``s``i``o``n``,`` ``n``o``t`` ``o``n``l``y`` ``a``t`` ``t``h``e`` ``b``e``g``i``n``n``i``n``g`` ``o``f`` ``t``h``e`` ``o``v``e``r``a``l``l`` ``s``e``s``s``i``o``n``.``
#### Args:
- `session`: A TensorFlow Session that has been created.
- `coord`: A Coordinator object which keeps track of all threads.
### after_run
View source

```
 after_run(
    run_context,
    run_values
)
```
Called after each call to run().
