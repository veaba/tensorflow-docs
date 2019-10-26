An eager-compatible version of recompute_grad.
### Aliases:
- tf.compat.v1.recompute_grad
- tf.compat.v2.recompute_grad

```
 tf.recompute_grad(f)
```
For f(*args, **kwargs), this supports gradients with respect to args, or to gradients with respect to any variables residing in the kwarg 'variables'. Note that for keras layer and model objects, this is handled automatically.
#### Args:
- f: function f(*x) that returns a Tensor or sequence of Tensor outputs.
#### Returns:
A function g that wraps f, but which recomputes f on the backwards pass of a gradient call.
