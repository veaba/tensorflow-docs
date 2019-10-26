Make a decorator from a wrapper and a target.
### Aliases:
- tf.compat.v1.app.flags.tf_decorator.make_decorator

```
 tf.compat.v1.flags.tf_decorator.make_decorator(
    target,
    decorator_func,
    decorator_name=None,
    decorator_doc='',
    decorator_argspec=None
)
```
#### Args:
- target: The final callable to be wrapped.
- decorator_func: The wrapper function.
- decorator_name: The name of the decorator. If None, the name of the function calling make_decorator.
- decorator_doc: Documentation specific to this application of decorator_func to target.
- decorator_argspec: The new callable signature of this decorator.
#### Returns:
The decorator_func argument with new metadata attached.
