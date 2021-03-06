Constructs the Hessian of sum of  `ys`  with respect to  `x`  in  `xs` .

```
 tf.hessians(
    ys,
    xs,
    gate_gradients=False,
    aggregation_method=None,
    name='hessians'
)
 
```

 `hessians()`  adds ops to the graph to output the Hessian matrix of  `ys` with respect to  `xs` .  It returns a list of  `Tensor`  of length  `len(xs)` where each tensor is the Hessian of  `sum(ys)` .

The Hessian is a matrix of second-order partial derivatives of a scalartensor (see https://en.wikipedia.org/wiki/Hessian_matrix for more details).

#### 参数：
- **`ys`** : A  `Tensor`  or list of tensors to be differentiated.
- **`xs`** : A  `Tensor`  or list of tensors to be used for differentiation.
- **`name`** : Optional name to use for grouping all the gradient ops together.defaults to 'hessians'.
- **`colocate_gradients_with_ops`** : See  `gradients()`  documentation for details.
- **`gate_gradients`** : See  `gradients()`  documentation for details.
- **`aggregation_method`** : See  `gradients()`  documentation for details.


#### 返回：
A list of Hessian matrices of  `sum(ys)`  for each  `x`  in  `xs` .

#### 加薪：
- **`LookupError`** : if one of the operations between  `xs`  and  `ys`  does nothave a registered gradient function.
