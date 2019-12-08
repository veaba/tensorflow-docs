Enables eager execution for the lifetime of this program.



```
 tf.compat.v1.enable_eager_execution(
    config=None,
    device_policy=None,
    execution_mode=None
)
 
```

Eager execution provides an imperative interface to TensorFlow. With eager
execution enabled, TensorFlow functions execute operations immediately (as
opposed to adding to a graph to be executed later in a [ `tf.compat.v1.Session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session))
and
return concrete values (as opposed to symbolic references to a node in a
computational graph).



#### For example:


```
 tf.compat.v1.enable_eager_execution()

# After eager execution is enabled, operations are executed as they are
# defined and Tensor objects hold concrete values, which can be accessed as
# numpy.ndarray`s through the numpy() method.
assert tf.multiply(6, 7).numpy() == 42
 
```

Eager execution cannot be enabled after TensorFlow APIs have been used to
create or execute graphs. It is typically recommended to invoke this function
at program startup and not in a library (as most libraries should be usable
both with and without eager execution).



#### Args:

- **`config`** : (Optional.) A [ `tf.compat.v1.ConfigProto` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/ConfigProto) to use to configure the
environment in which operations are executed. Note that
[ `tf.compat.v1.ConfigProto` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/ConfigProto) is also used to configure graph execution (via
[ `tf.compat.v1.Session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session)) and many options within [ `tf.compat.v1.ConfigProto` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/ConfigProto)
are not implemented (or are irrelevant) when eager execution is enabled.

- **`device_policy`** : (Optional.) Policy controlling how operations requiring
inputs on a specific device (e.g., a GPU 0) handle inputs on a different
device  (e.g. GPU 1 or CPU). When set to None, an appropriate value will
be picked automatically. The value picked may change between TensorFlow
releases.
Valid values:


- **`execution_mode`** : (Optional.) Policy controlling how operations dispatched are
actually executed. When set to None, an appropriate value will be picked
automatically. The value picked may change between TensorFlow releases.
Valid values:



    - tf.contrib.eager.DEVICE_PLACEMENT_EXPLICIT: raises an error if the
placement is not correct.

    - tf.contrib.eager.DEVICE_PLACEMENT_WARN: copies the tensors which are not
on the right device but logs a warning.

    - tf.contrib.eager.DEVICE_PLACEMENT_SILENT: silently copies the tensors.
Note that this may hide performance problems as there is no notification
provided when operations are blocked on the tensor being copied between
devices.

    - tf.contrib.eager.DEVICE_PLACEMENT_SILENT_FOR_INT32: silently copies
int32 tensors, raising errors on the other ones.


    - tf.contrib.eager.SYNC: executes each operation synchronously.

    - tf.contrib.eager.ASYNC: executes each operation asynchronously. These
operations may return "non-ready" handles.



#### Raises:

- **`ValueError`** : If eager execution is enabled after creating/executing a
TensorFlow graph, or if options provided conflict with a previous call
to this function.

