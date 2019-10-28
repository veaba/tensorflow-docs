Decorator to define a function with a custom gradient.
### Aliases:
- `tf.compat.v1.custom_gradient`
- `tf.compat.v2.custom_gradient`

```
 tf.custom_gradient(f)
```
This decorator allows fine grained control over the gradients of a sequence for operations. This may be useful for multiple reasons, including providing a more efficient or numerically stable gradient for a sequence of operations.
For example, consider the following function that commonly occurs in the computation of cross entropy and log likelihoods:

```
 def log1pexp(x):
  return tf.math.log(1 + tf.exp(x))
```
Due to numerical instability, the gradient this function evaluated at x=100 is NaN. For example:

```
 x = tf.constant(100.)
y = log1pexp(x)
dy = tf.gradients(y, x) # Will be NaN when evaluated.
```
The gradient expression can be analytically simplified to provide numerical stability:

```
 @tf.custom_gradient
def log1pexp(x):
  e = tf.exp(x)
  def grad(dy):
    return dy * (1 - 1 / (1 + e))
  return tf.math.log(1 + e), grad
```
With this definition, the gradient at x=100 will be correctly evaluated as 1.0.
See also `tf.RegisterGradient` which registers a gradient function for a primitive TensorFlow operation. `tf.custom_gradient` on the other hand allows for fine grained control over the gradient computation of a sequence of operations.
Note that if the decorated function uses `Variable`s, the enclosing variable scope must be using `ResourceVariable`s.
#### Args:
#### Returns:
[tf.gradients](https://tensorflow.google.cn/api_docs/python/tf/gradients)

