Decorator to define a function with a custom gradient.
### Aliases:
- tf.compat.v1.custom_gradient
- tf.compat.v2.custom_gradient

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
[tf.RegisterGradient](https://tensorflow.google.cn/api_docs/python/tf/RegisterGradient)See also  which registers a gradient function for a primitive TensorFlow operation. tf.custom_gradient on the other hand allows for fine grained control over the gradient computation of a sequence of operations.

Note that if the decorated function uses Variables, the enclosing variable scope must be using ResourceVariables.
#### Args:
- f: function f(*x) that returns a tuple (y, grad_fn) where:
x is a sequence of Tensor inputs to the function.
y is a Tensor or sequence of Tensor outputs of applying TensorFlow operations in f to x.
grad_fn is a function with the signature g(*grad_ys) which returns a list of Tensors - the derivatives of Tensors in y with respect to the Tensors in x. grad_ys is a Tensor or sequence of Tensors the same size as y holding the initial value gradients for each Tensor in y. In a pure mathematical sense, a vector-argument vector-valued function f's derivatives should be its Jacobian matrix J. Here we are expressing the Jacobian J as a function grad_fn which defines how J will transform a vector grad_ys when left-multiplied with it `(grad_ys * J)`. This functional representation of a matrix is convenient to use for chain-rule calculation (in e.g. the back-propagation algorithm).
If f uses Variables (that are not part of the inputs), i.e. through get_variable, then grad_fn should have signature g(*grad_ys, variables=None), where variables is a list of the Variables, and return a 2-tuple (grad_xs, grad_vars), where grad_xs is the same as above, and grad_vars is a list<Tensor> with the derivatives of Tensors in y with respect to the variables (that is, grad_vars has one Tensor per variable in variables).
- x is a sequence of Tensor inputs to the function.
- y is a Tensor or sequence of Tensor outputs of applying TensorFlow operations in f to x.
- grad_fn is a function with the signature g(*grad_ys) which returns a list of Tensors - the derivatives of Tensors in y with respect to the Tensors in x. grad_ys is a Tensor or sequence of Tensors the same size as y holding the initial value gradients for each Tensor in y. In a pure mathematical sense, a vector-argument vector-valued function f's derivatives should be its Jacobian matrix J. Here we are expressing the Jacobian J as a function grad_fn which defines how J will transform a vector grad_ys when left-multiplied with it ``(grad_ys * J)``. This functional representation of a matrix is convenient to use for chain-rule calculation (in e.g. the back-propagation algorithm).
If f uses Variables (that are not part of the inputs), i.e. through get_variable, then grad_fn should have signature g(*grad_ys, variables=None), where variables is a list of the Variables, and return a 2-tuple (grad_xs, grad_vars), where grad_xs is the same as above, and grad_vars is a list<Tensor> with the derivatives of Tensors in y with respect to the variables (that is, grad_vars has one Tensor per variable in variables).
#### Returns:
[tf.gradients](https://tensorflow.google.cn/api_docs/python/tf/gradients)A function h(x) which returns the same value as f(x)[0] and whose gradient (as calculated by ) is determined by f(x)[1].

