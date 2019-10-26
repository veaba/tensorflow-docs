Decorator that suppresses the conversion of a function.
### Aliases:
- tf.compat.v1.autograph.experimental.do_not_convert
- tf.compat.v2.autograph.experimental.do_not_convert

```
 tf.autograph.experimental.do_not_convert(func=None)
```
#### Args:
- func: function to decorate.
#### Returns:
If func is not None, returns a Callable which is equivalent to func, but is not converted by AutoGraph. If func is None, returns a decorator that, when invoked with a single func argument, returns a Callable equivalent to the above case.
