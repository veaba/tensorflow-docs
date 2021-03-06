

分布式随机双坐标上升优化器

```
 tf.compat.v1.train.sdca_optimizer(
    sparse_example_indices,
    sparse_feature_indices,
    sparse_feature_values,
    dense_features,
    example_weights,
    example_labels,
    sparse_indices,
    sparse_weights,
    dense_weights,
    example_state_data,
    loss_type,
    l1,
    l2,
    num_loss_partitions,
    num_inner_iterations,
    adaptative=True,
    name=None
)
 
```

linear models with L1 + L2 regularization. As global optimization objective isstrongly-convex, the optimizer optimizes the dual objective at each step. Theoptimizer applies each update one example at a time. Examples are sampleduniformly, and the optimizer is learning rate free and enjoys linear convergencerate.

[Proximal Stochastic Dual Coordinate Ascent](http://arxiv.org/pdf/1211.2717v1.pdf).Shai Shalev-Shwartz, Tong Zhang. 2012


LossObjective=∑fi(wxi)+(l2/2)∗|w|2+l1∗|w|
[Adding vs. Averaging in Distributed Primal-Dual Optimization](http://arxiv.org/abs/1502.03508).Chenxin Ma, Virginia Smith, Martin Jaggi, Michael I. Jordan,Peter Richtarik, Martin Takac. 2015

[Stochastic Dual Coordinate Ascent with Adaptive Probabilities](https://arxiv.org/abs/1502.08053).Dominik Csiba, Zheng Qu, Peter Richtarik. 2015

#### 参数：
- **`sparse_example_indices`** : A list of  `Tensor`  objects with type  `int64` .a list of vectors which contain example indices.
- **`sparse_feature_indices`** : A list with the same length as  `sparse_example_indices`  of  `Tensor`  objects with type  `int64` .a list of vectors which contain feature indices.
- **`sparse_feature_values`** : A list of  `Tensor`  objects with type  `float32` .a list of vectors which contains feature valueassociated with each feature group.
- **`dense_features`** : A list of  `Tensor`  objects with type  `float32` .a list of matrices which contains the dense feature values.
- **`example_weights`** : A  `Tensor`  of type  `float32` .a vector which contains the weight associated with eachexample.
- **`example_labels`** : A  `Tensor`  of type  `float32` .a vector which contains the label/target associated with eachexample.
- **`sparse_indices`** : A list with the same length as  `sparse_example_indices`  of  `Tensor`  objects with type  `int64` .a list of vectors where each value is the indices which hascorresponding weights in sparse_weights. This field maybe omitted for thedense approach.
- **`sparse_weights`** : A list with the same length as  `sparse_example_indices`  of  `Tensor`  objects with type  `float32` .a list of vectors where each value is the weight associated witha sparse feature group.
- **`dense_weights`** : A list with the same length as  `dense_features`  of  `Tensor`  objects with type  `float32` .a list of vectors where the values are the weights associatedwith a dense feature group.
- **`example_state_data`** : A  `Tensor`  of type  `float32` .a list of vectors containing the example state data.
- **`loss_type`** : A  `string`  from:  `"logistic_loss", "squared_loss", "hinge_loss", "smooth_hinge_loss", "poisson_loss"` .Type of the primal loss. Currently SdcaSolver supports logistic,squared and hinge losses.
- **`l1`** : A  `float` . Symmetric l1 regularization strength.
- **`l2`** : A  `float` . Symmetric l2 regularization strength.
- **`num_loss_partitions`** : An  `int`  that is  `>= 1` .Number of partitions of the global loss function.
- **`num_inner_iterations`** : An  `int`  that is  `>= 1` .Number of iterations per mini-batch.
- **`adaptative`** : An optional  `bool` . Defaults to  `True` .Whether to use Adaptive SDCA for the inner loop.
- **`name`** : A name for the operation (optional).


#### 返回：
A tuple of  `Tensor`  objects (out_example_state_data, out_delta_sparse_weights, out_delta_dense_weights).

- **`out_example_state_data`** : A  `Tensor`  of type  `float32` .
- **`out_delta_sparse_weights`** : A list with the same length as  `sparse_example_indices`  of  `Tensor`  objects with type  `float32` .
- **`out_delta_dense_weights`** : A list with the same length as  `dense_features`  of  `Tensor`  objects with type  `float32` .
