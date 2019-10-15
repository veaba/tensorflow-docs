
Computes the gradient error. (deprecated)

```
 tf.compat.v1.test.compute_gradient_error(
    x,
    x_shape,
    y,
    y_shape,
    x_init_value=None,
    delta=0.001,
    init_targets=None,
    extra_feed_dict=None
)
```

Computes the maximum error for dy/dx between the computed Jacobian and the numerically estimated Jacobian.

This function will modify the tensors passed in as it adds more operations and hence changing the consumers of the operations of the input tensors.

This function adds operations to the current session. To compute the error using a particular device, such as a GPU, use the standard methods for setting a device (e.g. using with sess.graph.device() or setting a device function in the session constructor).
#### Args:
- `x`: a tensor or list of tensors
- `x`_shape: the dimensions of `x` as a tuple or an array of ints. If `x` is a list, then this is the list of shapes.
- `y`: a tensor
- `y`_shape: the dimensions of `y` as a tuple or an arra`y` of ints.
- `x`_init_value: (optional) a nump`y` arra`y` of the same shape as "`x`" representing the initial value of `x`. If `x` is a list, this should be a list of nump`y` arra`y`s. If this is none, the function will pick a random tensor as the initial value.
- `delta`: (optional) the amount of perturbation.
- `init_targets`: list of targets to run to initialize model params.
- `extra_feed_dict`: dict that allows fi`x`ing specified tensor values during the Jacobian calculation.
#### Returns:

The maximum error in between the two Jacobians.
