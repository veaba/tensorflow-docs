在此程序的生存期内启用紧急执行。

```
 tf.compat.v1.enable_eager_execution(
    config=None,
    device_policy=None,
    execution_mode=None
)
 
```

Eager execution provides an imperative interface to TensorFlow. With eagerexecution enabled, TensorFlow functions execute operations immediately (asopposed to adding to a graph to be executed later in a [ `tf.compat.v1.Session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session))andreturn concrete values (as opposed to symbolic references to a node in acomputational graph).

#### 例如：


```
 tf.compat.v1.enable_eager_execution()

# After eager execution is enabled, operations are executed as they are
# defined and Tensor objects hold concrete values, which can be accessed as
# numpy.ndarray`s through the numpy() method.
assert tf.multiply(6, 7).numpy() == 42
 
```

Eager execution cannot be enabled after TensorFlow APIs have been used tocreate or execute graphs. It is typically recommended to invoke this functionat program startup and not in a library (as most libraries should be usableboth with and without eager execution).

#### 参数：
- **`config`** : (Optional.) A [ `tf.compat.v1.ConfigProto` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/ConfigProto) to use to configure theenvironment in which operations are executed. Note that[ `tf.compat.v1.ConfigProto` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/ConfigProto) is also used to configure graph execution (via[ `tf.compat.v1.Session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session)) and many options within [ `tf.compat.v1.ConfigProto` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/ConfigProto)are not implemented (or are irrelevant) when eager execution is enabled.
- **`device_policy`** : (Optional.) Policy controlling how operations requiringinputs on a specific device (e.g., a GPU 0) handle inputs on a differentdevice  (e.g. GPU 1 or CPU). When set to None, an appropriate value willbe picked automatically. The value picked may change between TensorFlowreleases.Valid values:
- **`execution_mode`** : (Optional.) Policy controlling how operations dispatched areactually executed. When set to None, an appropriate value will be pickedautomatically. The value picked may change between TensorFlow releases.Valid values:
    - tf.contrib.eager.DEVICE_PLACEMENT_EXPLICIT: raises an error if theplacement is not correct.
    - tf.contrib.eager.DEVICE_PLACEMENT_WARN: copies the tensors which are noton the right device but logs a warning.
    - tf.contrib.eager.DEVICE_PLACEMENT_SILENT: silently copies the tensors.Note that this may hide performance problems as there is no notificationprovided when operations are blocked on the tensor being copied betweendevices.
    - tf.contrib.eager.DEVICE_PLACEMENT_SILENT_FOR_INT32: silently copiesint32 tensors, raising errors on the other ones.
    - tf.contrib.eager.SYNC: executes each operation synchronously.
    - tf.contrib.eager.ASYNC: executes each operation asynchronously. Theseoperations may return "non-ready" handles.


#### 加薪：
- **`ValueError`** : If eager execution is enabled after creating/executing aTensorFlow graph, or if options provided conflict with a previous callto this function.
