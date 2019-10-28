## Class BoostedTreesEstimator
An Estimator for Tensorflow Boosted Trees models.
### Aliases:
- Class `tf.compat.v1.estimator.BoostedTreesEstimator`
- Class `tf.compat.v2.estimator.BoostedTreesEstimator`
## __init__
View source

```
 __init__(
    feature_columns,
    n_batches_per_layer,
    head,
    model_dir=None,
    weight_column=None,
    n_trees=100,
    max_depth=6,
    learning_rate=0.1,
    l1_regularization=0.0,
    l2_regularization=0.0,
    tree_complexity=0.0,
    min_node_weight=0.0,
    config=None,
    center_bias=False,
    pruning_mode='none',
    quantile_sketch_epsilon=0.01
)
```
Initializes a `BoostedTreesEstimator` instance.
Use this interface if you need to provide a custom loss/head. For example, the following will be equivalent to using BoostedTreesRegressor
# Create a head with L2 loss
from tensorflow_estimator.python.estimator.canned import head_lib
head = head_lib._regression_head(label_dimension=1) est = boosted_trees.BoostedTreesEstimator( feature_columns=..., n_batches_per_layer=..., head=head, n_trees=..., max_depth=...)
#### Args:
- `feature_columns`: An iterable containing all the feature columns used by the model. All items in the set should be instances of classes derived from `FeatureColumn`.
- `n_batches_per_layer`: the number of batches to collect statistics per layer.
- `head`: the `Head` instance defined for Estimator.
- `model_dir`: Directory to save model parameters, graph and etc. This can also be used to load checkpoints from the directory into an estimator to continue training a previously saved model.
- `weight_column`: A string or a `_NumericColumn` created by `tf.feature_column.numeric_column` defining feature column representing weights. It is used to downweight or boost examples during training. It will be multiplied by the loss of the example. If it is a string, it is used as a key to fetch weight tensor from the `features`. If it is a `_NumericColumn`, raw tensor is fetched by key `weight_column`.key, then `weight_column`.normalizer_fn is applied on it to get weight tensor.
- `n_trees`: number trees to be created.
- `max_depth`: maximum depth of the tree to grow.
- `learning_rate`: shrinkage parameter to be used when a tree added to the model.
- `l1_regularization`: regularization multiplier applied to the absolute weights of the tree leafs.
- `l2_regularization`: regularization multiplier applied to the square weights of the tree leafs.
- `tree_complexity`: regularization factor to penalize trees with more leaves.
- `min_node_weight`: minimum hessian a node must have for a split to be considered. The value will be compared with sum(leaf_hessian)/ (batch_size * n_batches_per_layer).
- `config`: `RunConfig` object to `config`ure the runtime settings.
- `center_bias`: Whether bias centering needs to occur. Bias centering refers to the first node in the very first tree returning the prediction that is aligned with the original labels distribution. For example, for regression problems, the first node will return the mean of the labels. For binary classification problems, it will return a logit for a prior probability of label 1.
- `pruning_mode`: one of 'none', 'pre', 'post' to indicate no pruning, pre- pruning (do not split a node if not enough gain is observed) and post pruning (build the tree up to a max depth and then prune branches with negative gain). For pre and post pruning, you MUST provide tree_complexity >0.
- `quantile_sketch_epsilon`: float between 0 and 1. Error bound for quantile computation. This is only used for float feature columns, and the number of buckets generated per float feature is 1/`quantile_sketch_epsilon`.
#### Raises:
- `ValueError`: when wrong arguments are given or unsupported functionalities are requested.
## Properties
### config
### model_dir
### model_fn
Returns the `model_fn` which is bound to `self.params`.
#### Returns:
