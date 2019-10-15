## Class StackTraceMapper

Allows remapping traceback information to different source code.
[StackTraceTransform](https://www.tensorflow.org/api_docs/python/tf/compat/v1/flags/tf_decorator/tf_stack/StackTraceTransform)Inherits From: 

### Aliases:
- Class `tf.compat.v1.app.flags.tf_decorator.tf_stack.StackTraceMapper`
## Methods
### __enter__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/util/tf_stack.py#L59-L75)


```
 __enter__()
```
### __exit__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/util/tf_stack.py#L77-L79)


```
 __exit__(
    unused_type,
    unused_value,
    unused_traceback
)
```
### get_effective_source_map
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/util/tf_stack.py#L92-L94)


```
 get_effective_source_map()
```

Returns a map (filename, lineno) -> (filename, lineno, function_name).
### reset
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/util/tf_stack.py#L89-L90)


```
 reset()
```
