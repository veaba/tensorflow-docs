[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/hessians) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/gradients_impl.py#L399-L406)  
---|---  
  
Constructs the Hessian of sum of `ys` with respect to `x` in `xs`.

### Aliases:

  * [`tf.compat.v2.hessians`](/api_docs/python/tf/hessians)

    
    
    tf.hessians(
        ys,
        xs,
        gate_gradients=False,
        aggregation_method=None,
        name='hessians'
    )
    

`hessians()` adds ops to the graph to output the Hessian matrix of `ys` with
respect to `xs`. It returns a list of `Tensor` of length `len(xs)` where each
tensor is the Hessian of `sum(ys)`.

The Hessian is a matrix of second-order partial derivatives of a scalar tensor
(see https://en.wikipedia.org/wiki/Hessian_matrix for more details).

#### Args:

  * **`ys`** : A `Tensor` or list of tensors to be differentiated.
  * **`xs`** : A `Tensor` or list of tensors to be used for differentiation.
  * **`name`** : Optional name to use for grouping all the gradient ops together. defaults to 'hessians'.
  * **`colocate_gradients_with_ops`** : See `gradients()` documentation for details.
  * **`gate_gradients`** : See `gradients()` documentation for details.
  * **`aggregation_method`** : See `gradients()` documentation for details.

#### Returns:

A list of Hessian matrices of `sum(ys)` for each `x` in `xs`.

#### Raises:

  * **`LookupError`** : if one of the operations between `xs` and `ys` does not have a registered gradient function.

