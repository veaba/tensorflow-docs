## Class StackTraceMapper
Allows remapping traceback information to different source code.
Inherits From: `StackTraceTransform`
### Aliases:
- Class `tf.compat.v1.app.flags.tf_decorator.tf_stack.StackTraceMapper`
## Methods
### __enter__
View source

```
 __enter__()
```
### __exit__
View source

```
 __exit__(
    unused_type,
    unused_value,
    unused_traceback
)
```
### get_effective_source_map
View source

```
 get_effective_source_map()
```
Returns a map (filename, lineno) -> (filename, lineno, function_name).
### reset
View source

```
 reset()
```
