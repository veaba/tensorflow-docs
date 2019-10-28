## Class GradientTape
Record operations for automatic differentiation.
### Aliases:
- Class `tf.compat.v1.GradientTape`
- Class `tf.compat.v2.GradientTape`
### Used in the guide:
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
- ``T``r``a``i``n``i``n``g`` ``c``h``e``c``k``p``o``i``n``t``s``
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
- ``D``i``s``t``r``i``b``u``t``e``d`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``T``e``n``s``o``r``F``l``o``w``
### Used in the tutorials:
- ``A``u``t``o``m``a``t``i``c`` ``d``i``f``f``e``r``e``n``t``i``a``t``i``o``n`` ``a``n``d`` ``g``r``a``d``i``e``n``t`` ``t``a``p``e``
- ``D``e``e``p`` ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``G``e``n``e``r``a``t``i``v``e`` ``A``d``v``e``r``s``a``r``i``a``l`` ``N``e``t``w``o``r``k``
- ``D``e``e``p``D``r``e``a``m``
- ``P``i``x``2``P``i``x``
- ``N``e``u``r``a``l`` ``s``t``y``l``e`` ``t``r``a``n``s``f``e``r``
Operations are recorded if they are executed within this context manager and at least one of their inputs is being "watched".
Trainable variables (created by `tf.Variable` or `tf.compat.v1.get_variable`, where `trainable=True` is default in both cases) are automatically `watch`ed. Tensors can be manually `watch`ed by invoking the `watch` method on this context manager.
For example, consider the function y = x * x. The gradient at `x = 3.0` can be computed as:

```
 x = tf.constant(3.0)
with tf.GradientTape() as g:
  g.watch(x)
  y = x * x
dy_dx = g.gradient(y, x) # Will compute to 6.0
```
GradientTapes can be nested to compute higher-order derivatives. For example,

```
 x = tf.constant(3.0)
with tf.GradientTape() as g:
  g.watch(x)
  with tf.GradientTape() as gg:
    gg.watch(x)
    y = x * x
  dy_dx = gg.gradient(y, x)     # Will compute to 6.0
d2y_dx2 = g.gradient(dy_dx, x)  # Will compute to 2.0
```
By default, the resources held by a GradientTape are released as soon as GradientTape.gradient() method is called. To compute multiple gradients over the same computation, create a persistent gradient tape. This allows multiple calls to the gradient() method as resources are released when the tape object is garbage collected. For example:

```
 x = tf.constant(3.0)
with tf.GradientTape(persistent=True) as g:
  g.watch(x)
  y = x * x
  z = y * y
dz_dx = g.gradient(z, x)  # 108.0 (4*x^3 at x = 3)
dy_dx = g.gradient(y, x)  # 6.0
del g  # Drop the reference to the tape
```
By default GradientTape will automatically watch any trainable variables that are accessed inside the context. If you want fine grained control over which variables are watched you can disable automatic tracking by passing `watch_accessed_variables=False` to the tape constructor:

```
 with tf.GradientTape(watch_accessed_variables=False) as tape:
  tape.watch(variable_a)
  y = variable_a ** 2  # Gradients will be available for `variable_a`.
  z = variable_b ** 3  # No gradients will be available since `variable_b` is
                       # not being watched.
```
Note that when using models you should ensure that your variables exist when using `watch_accessed_variables=False`. Otherwise it's quite easy to make your first iteration not have any gradients:

```
 a = tf.keras.layers.Dense(32)
b = tf.keras.layers.Dense(32)

with tf.GradientTape(watch_accessed_variables=False) as tape:
  tape.watch(a.variables)  # Since `a.build` has not been called at this point
                           # `a.variables` will return an empty list and the
                           # tape will not be watching anything.
  result = b(a(inputs))
  tape.gradient(result, a.variables)  # The result of this computation will be
                                      # a list of `None`s since a's variables
                                      # are not being watched.
```
Note that only tensors with real or complex dtypes are differentiable.
## __init__
View source

```
 __init__(
    persistent=False,
    watch_accessed_variables=True
)
```
Creates a new GradientTape.
#### Args:
- `persistent`: Boolean controlling whether a `persistent` gradient tape is created. False by default, which means at most one call can be made to the gradient() method on this object.
- `watch_accessed_variables`: Boolean controlling whether the tape will automatically `watch` any (trainable) variables accessed while the tape is active. Defaults to True meaning gradients can be requested from any result computed in the tape derived from reading a trainable `Variable`. If False users must explicitly `watch` any `Variable`s they want to request gradients from.
## Methods
### __enter__
View source

```
 __enter__()
```
Enters a context inside which operations are recorded on this tape.
### __exit__
View source

```
 __exit__(
    typ,
    value,
    traceback
)
```
Exits the recording context, no further operations are traced.
### batch_jacobian
View source

```
 batch_jacobian(
    target,
    source,
    unconnected_gradients=tf.UnconnectedGradients.NONE,
    parallel_iterations=None,
    experimental_use_pfor=True
)
```
Computes and stacks per-example jacobians.
See wikipedia article for the definition of a Jacobian. This function is essentially an efficient implementation of the following:
