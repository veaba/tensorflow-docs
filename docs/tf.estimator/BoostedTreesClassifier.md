## Class BoostedTreesClassifier
A Classifier for Tensorflow Boosted Trees models.
### Aliases:
- Class `tf.compat.v1.estimator.BoostedTreesClassifier`
- Class `tf.compat.v2.estimator.BoostedTreesClassifier`
### Used in the tutorials:
- ``G``r``a``d``i``e``n``t`` ``B``o``o``s``t``e``d`` ``T``r``e``e``s``:`` ``M``o``d``e``l`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
- ``B``o``o``s``t``e``d`` ``t``r``e``e``s`` ``u``s``i``n``g`` ``E``s``t``i``m``a``t``o``r``s``
#### Eager Compatibility
Estimators can be used while eager execution is enabled. Note that `input_fn` and all hooks are executed inside a graph context, so they have to be written to be compatible with graph mode. Note that `input_fn` code using `tf.data` generally works in both graph and eager modes.
## __init__
View source

```
 __init__(
    feature_columns,
    n_batches_per_layer,
    model_dir=None,
    n_classes=_HOLD_FOR_MULTI_CLASS_SUPPORT,
    weight_column=None,
    label_vocabulary=None,
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
    quantile_sketch_epsilon=0.01,
    train_in_memory=False
)
```
Initializes a `BoostedTreesClassifier` instance.
#### Example:

```
 bucketized_feature_1 = bucketized_column(
  numeric_column('feature_1'), BUCKET_BOUNDARIES_1)
bucketized_feature_2 = bucketized_column(
  numeric_column('feature_2'), BUCKET_BOUNDARIES_2)

# Need to see a large portion of the data before we can build a layer, for
# example half of data n_batches_per_layer = 0.5 * NUM_EXAMPLES / BATCH_SIZE
classifier = estimator.BoostedTreesClassifier(
    feature_columns=[bucketized_feature_1, bucketized_feature_2],
    n_batches_per_layer=n_batches_per_layer,
    n_trees=100,
    ... <some other params>
)

def input_fn_train():
  ...
  return dataset

classifier.train(input_fn=input_fn_train)

def input_fn_eval():
  ...
  return dataset

metrics = classifier.evaluate(input_fn=input_fn_eval)

when train_in_memory = True, make sure the input fn is not batched:
def input_fn_train():
  return tf.data.Dataset.zip(
    (tf.data.Dataset.from_tensors({'f1': f1_array, ...}),
     tf.data.Dataset.from_tensors(label_array)))
```
#### Args:
- `feature_columns`: An iterable containing all the feature columns used by the model. All items in the set should be instances of classes derived from `FeatureColumn`.
- `n_batches_per_layer`: the number of batches to collect statistics per layer. The total number of batches is total number of data divided by batch size.
- `model_dir`: Directory to save model parameters, graph and etc. This can also be used to load checkpoints from the directory into a estimator to continue training a previously saved model.
- `n_classes`: number of label classes. Default is binary classification. Multiclass support is not yet implemented.
- `weight_column`: A string or a `NumericColumn` created by `tf.fc_old.numeric_column` defining feature column representing weights. It is used to downweight or boost examples during training. It will be multiplied by the loss of the example. If it is a string, it is used as a key to fetch weight tensor from the `features`. If it is a `NumericColumn`, raw tensor is fetched by key `weight_column`.key, then `weight_column`.normalizer_fn is applied on it to get weight tensor.
- `label_vocabulary`: A list of strings represents possible label values. If given, labels must be string type and have any value in `label_vocabulary`. If it is not given, that means labels are already encoded as integer or float within [0, 1] for `n_classes=2` and encoded as integer values in {0, 1,..., `n_classes`-1} for `n_classes`>2 . Also there will be errors if vocabulary is not provided and labels are string.
- `n_trees`: number trees to be created.
- `max_depth`: maximum depth of the tree to grow.
- `learning_rate`: shrinkage parameter to be used when a tree added to the model.
- `l1_regularization`: regularization multiplier applied to the absolute weights of the tree leafs.
- `l2_regularization`: regularization multiplier applied to the square weights of the tree leafs.
- `tree_complexity`: regularization factor to penalize trees with more leaves.
- `min_node_weight`: `min_node_weight`: minimum hessian a node must have for a split to be considered. The value will be compared with sum(leaf_hessian)/(batch_size * n_batches_per_layer).
- `config`: `RunConfig` object to `config`ure the runtime settings.
- `center_bias`: Whether bias centering needs to occur. Bias centering refers to the first node in the very first tree returning the prediction that is aligned with the original labels distribution. For example, for regression problems, the first node will return the mean of the labels. For binary classification problems, it will return a logit for a prior probability of label 1.
- `pruning_mode`: one of 'none', 'pre', 'post' to indicate no pruning, pre- pruning (do not split a node if not enough gain is observed) and post pruning (build the tree up to a max depth and then prune branches with negative gain). For pre and post pruning, you MUST provide tree_complexity >0.
- `quantile_sketch_epsilon`: float between 0 and 1. Error bound for quantile computation. This is only used for float feature columns, and the number of buckets generated per float feature is 1/`quantile_sketch_epsilon`.
- `train_in_memory`: `bool`, when true, it assumes the dataset is in memory, i.e., input_fn should return the entire dataset as a single batch, n_batches_per_layer should be set as 1, num_worker_replicas should be 1, and num_ps_replicas should be 0 in `tf.Estimator.RunConfig`.
#### Raises:
- `ValueError`: when wrong arguments are given or unsupported functionalities are requested.
## Properties
### config
### model_dir
### model_fn
Returns the `model_fn` which is bound to `self.params`.
#### Returns:
