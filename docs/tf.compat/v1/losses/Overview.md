神经网络中使用的损失操作。


**Note:**  All the losses are added to the  `GraphKeys.LOSSES`  collection by default.


## Class 
[ `class Reduction` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/losses/Reduction): Types of loss reduction.

## 功能
[ `absolute_difference(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/losses/absolute_difference): Adds an Absolute Difference loss to the training procedure.

[ `add_loss(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/losses/add_loss): Adds a externally defined loss to the collection of losses.

[ `compute_weighted_loss(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/losses/compute_weighted_loss): Computes the weighted loss.

[ `cosine_distance(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/losses/cosine_distance): Adds a cosine-distance loss to the training procedure. (deprecated arguments)

[ `get_losses(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/losses/get_losses): Gets the list of losses from the loss_collection.

[ `get_regularization_loss(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/losses/get_regularization_loss): Gets the total regularization loss.

[ `get_regularization_losses(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/losses/get_regularization_losses): Gets the list of regularization losses.

[ `get_total_loss(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/losses/get_total_loss): Returns a tensor whose value represents the total loss.

[ `hinge_loss(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/losses/hinge_loss): Adds a hinge loss to the training procedure.

[ `huber_loss(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/losses/huber_loss): Adds a Huber Loss term to the training procedure.

[ `log_loss(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/losses/log_loss): Adds a Log Loss term to the training procedure.

[ `mean_pairwise_squared_error(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/losses/mean_pairwise_squared_error): Adds a pairwise-errors-squared loss to the training procedure.

[ `mean_squared_error(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/losses/mean_squared_error): Adds a Sum-of-Squares loss to the training procedure.

[ `sigmoid_cross_entropy(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/losses/sigmoid_cross_entropy): Creates a cross-entropy loss using tf.nn.sigmoid_cross_entropy_with_logits.

[ `softmax_cross_entropy(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/losses/softmax_cross_entropy): Creates a cross-entropy loss using tf.nn.softmax_cross_entropy_with_logits_v2.

[ `sparse_softmax_cross_entropy(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/losses/sparse_softmax_cross_entropy): Cross-entropy loss using [ `tf.nn.sparse_softmax_cross_entropy_with_logits` ](https://tensorflow.google.cn/api_docs/python/tf/nn/sparse_softmax_cross_entropy_with_logits).

