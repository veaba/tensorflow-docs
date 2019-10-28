## Class BinaryCrossentropy
Computes the cross-entropy loss between true labels and predicted labels.
### Aliases:
- Class `tf.compat.v1.keras.losses.BinaryCrossentropy`
- Class `tf.compat.v2.keras.losses.BinaryCrossentropy`
- Class `tf.compat.v2.losses.BinaryCrossentropy`
- Class `tf.losses.BinaryCrossentropy`
### Used in the tutorials:
- ``C``y``c``l``e``G``A``N``
- ``D``e``e``p`` ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``G``e``n``e``r``a``t``i``v``e`` ``A``d``v``e``r``s``a``r``i``a``l`` ``N``e``t``w``o``r``k``
- ``P``i``x``2``P``i``x``
- ``C``l``a``s``s``i``f``i``c``a``t``i``o``n`` ``o``n`` ``i``m``b``a``l``a``n``c``e``d`` ``d``a``t``a``
Use this cross-entropy loss when there are only two label classes (assumed to be 0 and 1). For each example, there should be a single floating-point value per prediction.
In the snippet below, each of the four examples has only a single floating-pointing value, and both `y_pred` and `y_true` have the shape `[batch_size]`.
#### Usage:

```
 bce = tf.keras.losses.BinaryCrossentropy()
loss = bce([0., 0., 1., 1.], [1., 1., 1., 0.])
print('Loss: ', loss.numpy())  # Loss: 11.522857
```
Usage with the `tf.keras` API:

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', loss=tf.keras.losses.BinaryCrossentropy())
```
#### Args:
- `from_logits`: Whether to interpret `y_pred` as a tensor of logit values. By default, we assume that `y_pred` contains probabilities (i.e., values in [0, 1]). Note: Using `from_logits`=True may be more numerically stable.
- `label_smoothing`: Float in [0, 1]. When 0, no smoothing occurs. When > 0, we compute the loss between the predicted labels and a smoothed version of the true labels, where the smoothing squeezes the labels towards 0.5. Larger values of `label_smoothing` correspond to heavier smoothing.
- `reduction`: (Optional) Type of `tf.keras.losses.Reduction` to apply to loss. Default value is `AUTO`. `AUTO` indicates that the `reduction` option will be determined by the usage context. For almost all cases this defaults to `SUM_OVER_BATCH_SIZE`. When used with `tf.distribute.Strategy`, outside of built-in training loops such as `tf.keras` `compile` and `fit`, using `AUTO` or `SUM_OVER_BATCH_SIZE` will raise an error. Please see https://www.tensorflow.org/alpha/tutorials/distribute/training_loops for more details on this.
- `name`: (Optional) Name for the op.
## __init__
View source

```
 __init__(
    from_logits=False,
    label_smoothing=0,
    reduction=losses_utils.ReductionV2.AUTO,
    name='binary_crossentropy'
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
