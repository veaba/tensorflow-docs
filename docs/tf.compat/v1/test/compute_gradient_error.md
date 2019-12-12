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


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use tf.test.compute_gradient in 2.0, which has better support for functions. Note that the two versions have different usage, so code change is needed.
Computes the maximum error for dy/dx between the computed Jacobian and thenumerically estimated Jacobian.

This function will modify the tensors passed in as it adds more operationsand hence changing the consumers of the operations of the input tensors.

This function adds operations to the current session. To compute the errorusing a particular device, such as a GPU, use the standard methods forsetting a device (e.g. using with sess.graph.device() or setting a devicefunction in the session constructor).

#### Args:
- **`x`** : a tensor or list of tensors
- **`x_shape`** : the dimensions of x as a tuple or an array of ints. If x is a list,then this is the list of shapes.
- **`y`** : a tensor
- **`y_shape`** : the dimensions of y as a tuple or an array of ints.
- **`x_init_value`** : (optional) a numpy array of the same shape as "x"representing the initial value of x. If x is a list, this should be a listof numpy arrays.  If this is none, the function will pick a random tensoras the initial value.
- **`delta`** : (optional) the amount of perturbation.
- **`init_targets`** : list of targets to run to initialize model params.
- **`extra_feed_dict`** : dict that allows fixing specified tensor valuesduring the Jacobian calculation.


#### Returns:
The maximum error in between the two Jacobians.

