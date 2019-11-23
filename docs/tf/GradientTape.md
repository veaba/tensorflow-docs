

## Class  `GradientTape` 

Record operations for automatic differentiation.


### Aliases:
- Class [ `tf.compat.v1.GradientTape` ](/api_docs/python/tf/GradientTape)
- Class [ `tf.compat.v2.GradientTape` ](/api_docs/python/tf/GradientTape)


### Used in the guide:
- [Eager execution](https://tensorflow.google.cn/guide/eager)
- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)
- [Training checkpoints](https://tensorflow.google.cn/guide/checkpoint)
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)
- [Distributed training with TensorFlow](https://tensorflow.google.cn/guide/distributed_training)


### Used in the tutorials:
- [Automatic differentiation and gradient tape](https://tensorflow.google.cn/tutorials/customization/autodiff)
- [Deep Convolutional Generative Adversarial Network](https://tensorflow.google.cn/tutorials/generative/dcgan)
- [DeepDream](https://tensorflow.google.cn/tutorials/generative/deepdream)
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
- [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)

Operations are recorded if they are executed within this context manager andat least one of their inputs is being "watched".

Trainable variables (created by [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable) or [ `tf.compat.v1.get_variable` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/get_variable),where  `trainable=True`  is default in both cases) are automatically watched.Tensors can be manually watched by invoking the  `watch`  method on this contextmanager.

For example, consider the function  `y = x * x` . The gradient at  `x = 3.0`  canbe computed as:


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


By default, the resources held by a GradientTape are released as soon asGradientTape.gradient() method is called. To compute multiple gradients overthe same computation, create a persistent gradient tape. This allows multiplecalls to the gradient() method as resources are released when the tape objectis garbage collected. For example:


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


By default GradientTape will automatically watch any trainable variables thatare accessed inside the context. If you want fine grained control over whichvariables are watched you can disable automatic tracking by passing `watch_accessed_variables=False`  to the tape constructor:


```
with tf.GradientTape(watch_accessed_variables=False) as tape:
  tape.watch(variable_a)
  y = variable_a ** 2  # Gradients will be available for `variable_a`.
  z = variable_b ** 3  # No gradients will be available since `variable_b` is
                       # not being watched.

```


Note that when using models you should ensure that your variables exist whenusing  `watch_accessed_variables=False` . Otherwise it's quite easy to make yourfirst iteration not have any gradients:


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


##  `__init__` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/eager/backprop.py#L778-L799)


```
__init__(
    persistent=False,
    watch_accessed_variables=True
)

```


Creates a new GradientTape.


#### Args:
- **`persistent`** : Boolean controlling whether a persistent gradient tapeis created. False by default, which means at most one call canbe made to the gradient() method on this object.
- **`watch_accessed_variables`** : Boolean controlling whether the tape willautomatically  `watch`  any (trainable) variables accessed while the tapeis active. Defaults to True meaning gradients can be requested from anyresult computed in the tape derived from reading a trainable  `Variable` .If False users must explicitly  `watch`  any  `Variable` s they want torequest gradients from.


## Methods


###  `__enter__` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/eager/backprop.py#L801-L804)


```
__enter__()

```


Enters a context inside which operations are recorded on this tape.


###  `__exit__` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/eager/backprop.py#L806-L809)


```
__exit__(
    typ,
    value,
    traceback
)

```


Exits the recording context, no further operations are traced.


###  `batch_jacobian` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/eager/backprop.py#L1126-L1245)


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

See [wikipedia article](http://en.wikipedia.org/wiki/jacobian_matrix_and_determinant) for thedefinition of a Jacobian. This function is essentially an efficientimplementation of the following:

 `tf.stack([self.jacobian(y[i], x[i]) for i in range(x.shape[0])])` .

Note that compared to [ `GradientTape.jacobian` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape#jacobian) which computes gradient ofeach output value w.r.t each input value, this function is useful when `target[i,...]`  is independent of  `source[j,...]`  for  `j != i` . Thisassumption allows more efficient computation as compared to[ `GradientTape.jacobian` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape#jacobian). The output, as well as intermediate activations,are lower dimensional and avoid a bunch of redundant zeros which wouldresult in the jacobian computation given the independence assumption.


#### Example usage:


```
with tf.GradientTape() as g:
  x = tf.constant([[1., 2.], [3., 4.]], dtype=tf.float32)
  g.watch(x)
  y = x * x
batch_jacobian = g.batch_jacobian(y, x)
# batch_jacobian is [[[2,  0], [0,  4]], [[6,  0], [0,  8]]]

```



#### Args:
- **`target`** : A tensor with rank 2 or higher and with shape [b, y1, ..., y_n]. `target[i,...]`  should only depend on  `source[i,...]` .
- **`source`** : A tensor with rank 2 or higher and with shape [b, x1, ..., x_m].
- **`unconnected_gradients`** : a value which can either hold 'none' or 'zero' andalters the value which will be returned if the target and sources areunconnected. The possible values and effects are detailed in'UnconnectedGradients' and it defaults to 'none'.
- **`parallel_iterations`** : A knob to control how many iterations are dispatchedin parallel. This knob can be used to control the total memory usage.
- **`experimental_use_pfor`** : If true, uses pfor for computing the Jacobian. Elseuses a tf.while_loop.


#### Returns:

A tensor  `t`  with shape [b, y_1, ..., y_n, x1, ..., x_m] where  `t[i, ...]` is the jacobian of  `target[i, ...]`  w.r.t.  `source[i, ...]` , i.e. stackedper-example jacobians.


#### Raises:
- **`RuntimeError`** : If called on a non-persistent tape with eager executionenabled and without enabling experimental_use_pfor.
- **`ValueError`** : If vectorization of jacobian computation fails or if firstdimension of  `target`  and  `source`  do not match.


###  `gradient` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/eager/backprop.py#L935-L1020)


```
gradient(
    target,
    sources,
    output_gradients=None,
    unconnected_gradients=tf.UnconnectedGradients.NONE
)

```


Computes the gradient using operations recorded in context of this tape.


#### Args:
- **`target`** : Tensor (or list of tensors) to be differentiated.
- **`sources`** : a list or nested structure of Tensors or Variables.  `target` will be differentiated against elements in  `sources` .
- **`output_gradients`** : a list of gradients, one for each element oftarget. Defaults to None.
- **`unconnected_gradients`** : a value which can either hold 'none' or 'zero' andalters the value which will be returned if the target and sources areunconnected. The possible values and effects are detailed in'UnconnectedGradients' and it defaults to 'none'.


#### Returns:

a list or nested structure of Tensors (or IndexedSlices, or None),one for each element in  `sources` . Returned structure is the same asthe structure of  `sources` .


#### Raises:
- **`RuntimeError`** : if called inside the context of the tape, or if called morethan once on a non-persistent tape.
- **`ValueError`** : if the target is a variable or if unconnected gradients iscalled with an unknown value.


###  `jacobian` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/eager/backprop.py#L1022-L1124)


```
jacobian(
    target,
    sources,
    unconnected_gradients=tf.UnconnectedGradients.NONE,
    parallel_iterations=None,
    experimental_use_pfor=True
)

```


Computes the jacobian using operations recorded in context of this tape.

See [wikipedia article](http://en.wikipedia.org/wiki/jacobian_matrix_and_determinant) for thedefinition of a Jacobian.


#### Example usage:


```
with tf.GradientTape() as g:
  x  = tf.constant([1.0, 2.0])
  g.watch(x)
  y = x * x
jacobian = g.jacobian(y, x)
# jacobian value is [[2., 0.], [0., 4.]]

```



#### Args:
- **`target`** : Tensor to be differentiated.
- **`sources`** : a list or nested structure of Tensors or Variables.  `target` will be differentiated against elements in  `sources` .
- **`unconnected_gradients`** : a value which can either hold 'none' or 'zero' andalters the value which will be returned if the target and sources areunconnected. The possible values and effects are detailed in'UnconnectedGradients' and it defaults to 'none'.
- **`parallel_iterations`** : A knob to control how many iterations are dispatchedin parallel. This knob can be used to control the total memory usage.
- **`experimental_use_pfor`** : If true, vectorizes the jacobian computation. Elsefalls back to a sequential while_loop. Vectorization can sometimes failor lead to excessive memory usage. This option can be used to disablevectorization in such cases.


#### Returns:

A list or nested structure of Tensors (or None), one for each element in `sources` . Returned structure is the same as the structure of  `sources` .Note if any gradient is sparse (IndexedSlices), jacobian functioncurrently makes it dense and returns a Tensor instead. This may change inthe future.


#### Raises:
- **`RuntimeError`** : If called on a non-persistent tape with eager executionenabled and without enabling experimental_use_pfor.
- **`ValueError`** : If vectorization of jacobian computation fails.


###  `reset` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/eager/backprop.py#L895-L929)


```
reset()

```


Clears all information stored in this tape.

Equivalent to exiting and reentering the tape context manager with a newtape. For example, the two following code blocks are equivalent:


```
with tf.GradientTape() as t:
  loss = loss_fn()
with tf.GradientTape() as t:
  loss += other_loss_fn()
t.gradient(loss, ...)  # Only differentiates other_loss_fn, not loss_fn


# The following is equivalent to the above
with tf.GradientTape() as t:
  loss = loss_fn()
  t.reset()
  loss += other_loss_fn()
t.gradient(loss, ...)  # Only differentiates other_loss_fn, not loss_fn

```


This is useful if you don't want to exit the context manager for the tape,or can't because the desired reset point is inside a control flow construct:


```
with tf.GradientTape() as t:
  loss = ...
  if loss > k:
    t.reset()

```



###  `stop_recording` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/eager/backprop.py#L863-L893)


```
stop_recording()

```


Temporarily stops recording operations on this tape.

Operations executed while this context manager is active will not berecorded on the tape. This is useful for reducing the memory used by tracingall computations.


#### For example:


```
  with tf.GradientTape(persistent=True) as t:
    loss = compute_loss(model)
    with t.stop_recording():
      # The gradient computation below is not traced, saving memory.
      grads = t.gradient(loss, model.variables)

```



#### Yields:

None


#### Raises:
- **`RuntimeError`** : if the tape is not currently recording.


###  `watch` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/eager/backprop.py#L837-L861)


```
watch(tensor)

```


Ensures that  `tensor`  is being traced by this tape.


#### Args:
- **`tensor`** : a Tensor or list of Tensors.


#### Raises:
- **`ValueError`** : if it encounters something that is not a tensor.


###  `watched_variables` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/eager/backprop.py#L931-L933)


```
watched_variables()

```


Returns variables watched by this tape in order of construction.
