## Class MultiHead

Creates a Head for multi-objective learning.
[Head](https://www.tensorflow.org/api_docs/python/tf/estimator/Head)Inherits From: 

### Aliases:
- Class `tf.compat.v1.estimator.MultiHead`
- Class `tf.compat.v2.estimator.MultiHead`

This class merges the output of multiple Head objects. Specifically:
- For training, sums losses of each head, calls `train_op_fn` with this final loss.
- For eval, merges metrics by adding `head.name` suffix to the keys in eval metrics, such as `precision/head1.name`, `precision/head2.name`.
- For prediction, merges predictions and updates keys in prediction dict to a 2-tuple, (`head.name`, prediction_key). Merges `export_outputs` such that by default the first head is served.
#### Usage:

```
 # In `input_fn`, specify labels as a dict keyed by head name:
def input_fn():
  features = ...
  labels1 = ...
  labels2 = ...
  return features, {'head1.name': labels1, 'head2.name': labels2}

# In `model_fn`, specify logits as a dict keyed by head name:
def model_fn(features, labels, mode):
  # Create simple heads and specify head name.
  head1 = tf.estimator.MultiClassHead(n_classes=3, name='head1')
  head2 = tf.estimator.BinaryClassHead(name='head2')
  # Create MultiHead from two simple heads.
  head = tf.estimator.MultiHead([head1, head2])
  # Create logits for each head, and combine them into a dict.
  logits1, logits2 = logit_fn()
  logits = {'head1.name': logits1, 'head2.name': logits2}
  # Return the merged EstimatorSpec
  return head.create_estimator_spec(..., logits=logits, ...)

# Create an estimator with this model_fn.
estimator = tf.estimator.Estimator(model_fn=model_fn)
estimator.train(input_fn=input_fn)
```

Also supports logits as a Tensor of shape [D0, D1, ... DN, logits_dimension]. It will split the Tensor along the last dimension and distribute it appropriately among the heads. E.g.:
# Input logits.
# logits = np.array([[-1., 1., 2., -2., 2.], [-1.5, 1., -3., 2., -2.]],

```
                 dtype=np.float32)
```
# Suppose head1.logits_dimension = 2 and head2.logits_dimension = 3. After
# splitting, the result is:
# logits_dict = {'head1_name': [[-1., 1.], [-1.5, 1.]],

```
              'head2_name':  [[2., -2., 2.], [-3., 2., -2.]]}
```

Usage:

```
 def model_fn(features, labels, mode):
  # Create simple heads and specify head name.
  head1 = tf.estimator.MultiClassHead(n_classes=3, name='head1')
  head2 = tf.estimator.BinaryClassHead(name='head2')
  # Create multi-head from two simple heads.
  head = tf.estimator.MultiHead([head1, head2])
  # Create logits for the multihead. The result of logits is a `Tensor`.
  logits = logit_fn(logits_dimension=head.logits_dimension)
  # Return the merged EstimatorSpec
  return head.create_estimator_spec(..., logits=logits, ...)
```
#### Args:
- `heads`: List or tuple of `Head` instances. All `heads` must have `name` specified. The first head in the list is the default used at serving time.
- `head_weights`: Optional list of weights, same length as `heads`. Used when merging losses to calculate the weighted sum of losses from each head. If `None`, all losses are weighted equally.
## __init__
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_head.py)


```
 __init__(
    heads,
    head_weights=None
)
```

Initialize self. See help(type(self)) for accurate signature.
## Properties
### logits_dimension

See base_head.Head for details.
### loss_reduction

See base_head.Head for details.
### name

See base_head.Head for details.
## Methods
### create_estimator_spec
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_head.py)


```
 create_estimator_spec(
    features,
    mode,
    logits,
    labels=None,
    optimizer=None,
    trainable_variables=None,
    train_op_fn=None,
    update_ops=None,
    regularization_losses=None
)
```

Returns a model_fn.EstimatorSpec.
#### Args:
- `features`: Input `dict` of `Tensor` or `SparseTensor` objects.
- `mode`: Estimator's `ModeKeys`.
- `logits`:` `I`n`pu`t`` ``dict`` `k`e`y`e``d`` ``b`y` ``h``e``a``d`` ``n``a``m``e``,`` ``o`r` ``logits`` ``Tensor`` `w`i``t``h`` ``s``h``a`p`e`` `[`D``0``,`` ``D``1``,`` ``.``.``.`` ``D``N``,`` ``logits``_``d``i``m``e``n``s``i``o``n`]`.`` `F`o`r` ``m``a``n`y` ``a`pp`l``i``c``a``t``i``o``n``s``,`` ``t``h``e`` ``Tensor`` ``s``h``a`p`e`` ``i``s`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``logits``_``d``i``m``e``n``s``i``o``n`]`.`` `If` ``logits`` ``i``s`` ``a`` ``Tensor``,`` ``i``t`` `w`i``l``l`` ``s`p`l``i``t`` ``t``h``e`` ``Tensor`` ``a``l``o``n``g`` ``t``h``e`` ``l``a``s``t`` ``d``i``m``e``n``s``i``o``n`` ``a``n``d`` ``d``i``s``t`r`i``b`u`t``e`` ``i``t`` ``a`ppr`o`pr`i``a``t``e``l`y` ``a``m``o``n``g`` ``t``h``e`` ``h``e``a``d``s``.`` `C`h``e``c`k` ``MultiHead`` `f`o`r` ``e`x`a``m`p`l``e``s``.`
- `l``a``b``e``l``s`:` `I`n`pu`t`` ``dict`` `k`e`y`e``d`` ``b`y` ``h``e``a``d`` ``n``a``m``e``.`` `F`o`r` ``e``a``c``h`` ``h``e``a``d``,`` ``t``h``e`` ``l``a``b``e``l`` `v`a``l`u`e`` ``c``a``n`` ``b``e`` ``i``n``t``e``g``e`r` ``o`r` ``s``t`r`i``n``g`` ``Tensor`` `w`i``t``h`` ``s``h``a`p`e`` ``m``a``t``c``h``i``n``g`` ``i``t``s`` ``c``o`rr`e``s`p`o``n``d``i``n``g`` ``logits``.``l``a``b``e``l``s`` ``i``s`` ``a`` `r`e`qu`i`r`e``d`` ``a`r`g`u`m``e``n``t`` `w`h``e``n`` ``mode`` ``e`qu`a``l``s`` ``TRAIN`` ``o`r` ``EVAL``.`
- `o`p`t``i``m``i``z``e`r:` `A`n`` ``t`f`.`k`e`r`a``s``.``o`p`t``i``m``i``z``e`r`s``.`Op`t``i``m``i``z``e`r` ``i``n``s``t``a``n``c``e`` ``t``o`` ``o`p`t``i``m``i``z``e`` ``t``h``e`` ``l``o``s``s`` ``i``n`` ``TRAIN`` ``mode``.`` ``N``a``m``e``l`y`,`` ``s``e``t``s`` ``t`r`a``i``n``_``o`p` `=` ``o`p`t``i``m``i``z``e`r`.``g``e``t``_`up`d``a``t``e``s`(`l``o``s``s``,`` ``t`r`a``i``n``a``b``l``e``_`v`a`r`i``a``b``l``e``s`)`,`` `w`h``i``c``h`` `up`d``a``t``e``s`` `v`a`r`i``a``b``l``e``s`` ``t``o`` ``m``i``n``i``m``i``z``e`` ``l``o``s``s``.`
- `t`r`a``i``n``a``b``l``e``_`v`a`r`i``a``b``l``e``s`:` `A` ``l``i``s``t`` ``o`r` ``t`up`l``e`` ``o`f` ``Variable`` ``o``b`j`e``c``t``s`` ``t``o`` `up`d``a``t``e`` ``t``o`` ``m``i``n``i``m``i``z``e`` ``l``o``s``s``.`` `I`n`` ``Tensor`f`l``o`w` ``1``.`x`,`` ``b`y` ``d``e`f`a`u`l``t`` ``t``h``e``s``e`` ``a`r`e`` ``t``h``e`` ``l``i``s``t`` ``o`f` `v`a`r`i``a``b``l``e``s`` ``c``o``l``l``e``c``t``e``d`` ``i``n`` ``t``h``e`` ``g`r`a`p`h`` `u`n``d``e`r` ``t``h``e`` `k`e`y` ``GraphKeys.TRAINABLE_VARIABLES``.`` `A`s`` ``Tensor`f`l``o`w` `2`.`x` ``d``o``e``s``n`'`t`` ``h``a`v`e`` ``c``o``l``l``e``c``t``i``o``n``s`` ``a``n``d`` `Gr`a`p`h`K`e`y`s``,`` ``t`r`a``i``n``a``b``l``e``_`v`a`r`i``a``b``l``e``s`` ``n``e``e``d`` ``t``o`` ``b``e`` `p`a``s``s``e``d`` ``e`xp`l``i``c``i``t``l`y` ``h``e`r`e``.`
- `t`r`a``i``n``_``o`p`_`f`n`:` `Fu`n``c``t``i``o``n`` ``t``h``a``t`` ``t``a`k`e``s`` ``a`` ``s``c``a``l``a`r` ``l``o``s``s`` ``Tensor`` ``a``n``d`` `r`e``t`ur`n``s`` ``t`r`a``i``n``_``o`p`.`` `U`s``e``d`` ``i`f` ``o`p`t``i``m``i``z``e`r` ``i``s`` ``N``o``n``e``.`
- `update_ops`:` `A` ``l``i``s``t`` ``o`r` ``t`up`l``e`` ``o`f` `up`d``a``t``e`` ``o`p`s`` ``t``o`` ``b``e`` `ru`n`` ``a``t`` ``t`r`a``i``n``i``n``g`` ``t``i``m``e``.`` `F`o`r` ``e`x`a``m`p`l``e``,`` ``l``a`y`e`r`s`` ``s`u`c``h`` ``a``s`` `B`a``t``c``h``N``o`r`m``a``l``i``z``a``t``i``o``n`` ``c`r`e``a``t``e`` ``m``e``a``n`` ``a``n``d`` `v`a`r`i``a``n``c``e`` `up`d``a``t``e`` ``o`p`s`` ``t``h``a``t`` ``n``e``e``d`` ``t``o`` ``b``e`` `ru`n`` ``a``t`` ``t`r`a``i``n``i``n``g`` ``t``i``m``e``.`` `I`n`` ``Tensor`f`l``o`w` ``1``.`x`,`` ``t``h``e``s``e`` ``a`r`e`` ``t``h`r`o`w`n`` ``i``n``t``o`` ``a``n`` `UP`D`ATE`_`OPS` ``c``o``l``l``e``c``t``i``o``n``.`` `A`s`` ``Tensor`f`l``o`w` `2`.`x` ``d``o``e``s``n`'`t`` ``h``a`v`e`` ``c``o``l``l``e``c``t``i``o``n``s``,`` ``update_ops`` ``n``e``e``d`` ``t``o`` ``b``e`` `p`a``s``s``e``d`` ``e`xp`l``i``c``i``t``l`y` ``h``e`r`e``.`
- `regularization_losses`:` `A` ``l``i``s``t`` ``o`f` ``a``d``d``i``t``i``o``n``a``l`` ``s``c``a``l``a`r` ``l``o``s``s``e``s`` ``t``o`` ``b``e`` ``a``d``d``e``d`` ``t``o`` ``t``h``e`` ``t`r`a``i``n``i``n``g`` ``l``o``s``s``,`` ``s`u`c``h`` ``a``s`` `r`e``g`u`l``a`r`i``z``a``t``i``o``n`` ``l``o``s``s``e``s``.`` `T`h``e``s``e`` ``l``o``s``s``e``s`` ``a`r`e`` `u`s`u`a``l``l`y` ``e`xpr`e``s``s``e``d`` ``a``s`` ``a`` ``b``a``t``c``h`` ``a`v`e`r`a``g``e``,`` ``s``o`` `f`o`r` ``b``e``s``t`` `r`e``s`u`l``t``s``,`` ``i``n`` ``e``a``c``h`` ``h``e``a``d``,`` `u`s``e`r`s`` ``n``e``e``d`` ``t``o`` `u`s``e`` ``t``h``e`` ``d``e`f`a`u`l``t`` ``l``o``s``s``_`r`e``d`u`c``t``i``o``n`=SUM`_`OVER`_`BATCH`_`SIZE` ``t``o`` ``a`v`o``i``d`` ``s``c``a``l``i``n``g`` ``e`rr`o`r`s``.`` `C`o``m`p`a`r`e``d`` ``t``o`` ``t``h``e`` `r`e``g`u`l``a`r`i``z``a``t``i``o``n`` ``l``o``s``s``e``s`` `f`o`r` ``e``a``c``h`` ``h``e``a``d``,`` ``t``h``i``s`` ``l``o``s``s`` ``i``s`` ``t``o`` `r`e``g`u`l``a`r`i``z``e`` ``t``h``e`` ``m``e`r`g``e``d`` ``l``o``s``s`` ``o`f` ``a``l``l`` ``h``e``a``d``s`` ``i``n`` ``m`u`l``t``i`` ``h``e``a``d``,`` ``a``n``d`` `w`i``l``l`` ``b``e`` ``a``d``d``e``d`` ``t``o`` ``t``h``e`` ``o`v`e`r`a``l``l`` ``t`r`a``i``n``i``n``g`` ``l``o``s``s`` ``o`f` ``m`u`l``t``i`` ``h``e``a``d``.`
#### Returns:

A model_fn.EstimatorSpec instance.
#### Raises:
- `ValueError`: If both `train_op_fn` and `optimizer` are `None` in TRAIN `mode`, or if both are set. If `mode` is not in Estimator's `ModeKeys`.
### loss
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_head.py)


```
 loss(
    labels,
    logits,
    features=None,
    mode=None,
    regularization_losses=None
)
```

Returns regularized training loss. See base_head.Head for details.
### metrics
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_head.py)


```
 metrics(regularization_losses=None)
```

Creates metrics. See base_head.Head for details.
### predictions
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_head.py)


```
 predictions(
    logits,
    keys=None
)
```

Create predictions. See base_head.Head for details.
### update_metrics
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_head.py)


```
 update_metrics(
    eval_metrics,
    features,
    logits,
    labels,
    regularization_losses=None
)
```

Updates eval metrics. See base_head.Head for details.
