Injects a new target into a function built by make_decorator.
### Aliases:
- `tf.compat.v1.app.flags.tf_decorator.rewrap`

```
 tf.compat.v1.flags.tf_decorator.rewrap(
    decorator_func,
    previous_target,
    new_target
)
```
This function allows replacing a function wrapped by `decorator_func`, assuming the decorator that wraps the function is written as described below.
The decorator function must use `<decorator name>.__wrapped__` instead of the wrapped function that is normally used:
#### Example:
# Instead of this:
def simple_parametrized_wrapper(*args, *kwds): return wrapped_fn(args, **kwds)
tf_decorator.make_decorator(simple_parametrized_wrapper, wrapped_fn)
# Write this:
def simple_parametrized_wrapper(*args, *kwds): return simple_parametrizedwrapper.wrapped_(args, **kwds)
tf_decorator.make_decorator(simple_parametrized_wrapper, wrapped_fn)
Note that this process modifies decorator_func.
#### Args:
- `decorator_func`: Callable returned by `wrap`.
- `previous_target`: Callable that needs to be replaced.
- `new_target`: Callable to replace previous_target with.
#### Returns:
The updated decorator. If decorator_func is not a tf_decorator, new_target is returned.
