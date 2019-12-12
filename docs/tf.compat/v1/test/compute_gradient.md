Computes and returns the theoretical and numerical Jacobian. (deprecated)

```
 tf.compat.v1.test.compute_gradient(
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
If  `x`  or  `y`  is complex, the Jacobian will still be real but thecorresponding Jacobian dimension(s) will be twice as large.  This is requiredeven if both input and output is complex since TensorFlow graphs are notnecessarily holomorphic, and may have gradients not expressible as complexnumbers.  For example, if  `x`  is complex with shape  `[m]`  and  `y`  is complexwith shape  `[n]` , each Jacobian  `J`  will have shape  `[m * 2, n * 2]`  with

```
 J[:m, :n] = d(Re y)/d(Re x)
J[:m, n:] = d(Im y)/d(Re x)
J[m:, :n] = d(Re y)/d(Im x)
J[m:, n:] = d(Im y)/d(Im x)
 
```

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
Two 2-d numpy arrays representing the theoretical and numericalJacobian for dy/dx. Each has "x_size" rows and "y_size" columnswhere "x_size" is the number of elements in x and "y_size" is thenumber of elements in y. If x is a list, returns a list of two numpy arrays.

