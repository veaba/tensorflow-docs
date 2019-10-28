## Class SparseCategoricalCrossentropy
Computes the crossentropy loss between the labels and predictions.
### Aliases:
- Class `tf.compat.v1.keras.losses.SparseCategoricalCrossentropy`
- Class `tf.compat.v2.keras.losses.SparseCategoricalCrossentropy`
- Class `tf.compat.v2.losses.SparseCategoricalCrossentropy`
- Class `tf.losses.SparseCategoricalCrossentropy`
### Used in the guide:
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n`` ``a``n``d`` ``A``u``t``o``G``r``a``p``h``
### Used in the tutorials:
- ``C``u``s``t``o``m`` ``t``r``a``i``n``i``n``g``:`` ``w``a``l``k``t``h``r``o``u``g``h``
- ``M``u``l``t``i``-``w``o``r``k``e``r`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``E``s``t``i``m``a``t``o``r``
- ``L``o``a``d`` ``N``u``m``P``y`` ``d``a``t``a``
- ``T``e``n``s``o``r``F``l``o``w`` ``2`` ``q``u``i``c``k``s``t``a``r``t`` ``f``o``r`` ``e``x``p``e``r``t``s``
- ``I``m``a``g``e`` ``c``a``p``t``i``o``n``i``n``g`` ``w``i``t``h`` ``v``i``s``u``a``l`` ``a``t``t``e``n``t``i``o``n``
Use this crossentropy loss function when there are two or more label classes. We expect labels to be provided as integers. If you want to provide labels using `one-hot` representation, please use `CategoricalCrossentropy` loss. There should be `# classes` floating point values per feature for `y_pred` and a single floating point value per feature for `y_true`.
In the snippet below, there is a single floating point value per example for `y_true` and `# classes` floating pointing values per example for `y_pred`. The shape of `y_true` is `[batch_size]` and the shape of `y_pred` is `[batch_size, num_classes]`.
#### Usage:

```
 cce = tf.keras.losses.SparseCategoricalCrossentropy()
loss = cce(
  [0, 1, 2],
  [[.9, .05, .05], [.5, .89, .6], [.05, .01, .94]])
print('Loss: ', loss.numpy())  # Loss: 0.3239
```
Usage with the `compile` API:

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', loss=tf.keras.losses.SparseCategoricalCrossentropy())
```
#### Args:
- `from_logits`: Whether `y_pred` is expected to be a logits tensor. By default, we assume that `y_pred` encodes a probability distribution. Note: Using `from_logits`=True may be more numerically stable.
- `reduction`: (Optional) Type of `tf.keras.losses.Reduction` to apply to loss. Default value is `AUTO`. `AUTO` indicates that the `reduction` option will be determined by the usage context. For almost all cases this defaults to `SUM_OVER_BATCH_SIZE`. When used with `tf.distribute.Strategy`, outside of built-in training loops such as `tf.keras` `compile` and `fit`, using `AUTO` or `SUM_OVER_BATCH_SIZE` will raise an error. Please see https://www.tensorflow.org/alpha/tutorials/distribute/training_loops for more details on this.
- `name`: Optional `name` for the op.
## __init__
View source

```
 __init__(
    from_logits=False,
    reduction=losses_utils.ReductionV2.AUTO,
    name='sparse_categorical_crossentropy'
)
```
Initialize self. See help(type(self)) for accurate signature.
## Methods
### __call__
View source

```
 __call__(
    y_true,
    y_pred,
    sample_weight=None
)
```
Invokes the `Loss` instance.
#### Args:
- `y_true`: Ground truth values. shape = `[batch_size, d0, .. dN]`
- `y_pred`: The predicted values. shape = `[batch_size, d0, .. dN]`
- `sample_weight`: Optional `sample_weight` acts as a coefficient for the loss. If a scalar is provided, then the loss is simply scaled by the given value. If `sample_weight` is a tensor of size `[batch_size]`, then the total loss for each sample of the batch is rescaled by the corresponding element in the `sample_weight` vector. If the shape of `sample_weight` is `[batch_size, d0, .. dN-1]` (or can be broadcasted to this shape), then each loss element of `y_pred` is scaled by the corresponding value of `sample_weight`. (Note on`dN-1`: all loss functions reduce by 1 dimension, usually axis=-1.)
#### Returns:
Weighted loss float `Tensor`. If `reduction` is `NONE`, this has shape `[batch_size, d0, .. dN-1]`; otherwise, it is scalar. (Note `dN-1` because all loss functions reduce by 1 dimension, usually axis=-1.)
#### Raises:
- `ValueError`: If the shape of `sample_weight` is invalid.
### from_config
View source

```
 from_config(
    cls,
    config
)
```
