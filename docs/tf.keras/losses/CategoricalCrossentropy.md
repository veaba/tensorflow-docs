## Class CategoricalCrossentropy

Computes the crossentropy loss between the labels and predictions.
### Aliases:
- Class `tf.compat.v1.keras.losses.CategoricalCrossentropy`
- Class `tf.compat.v2.keras.losses.CategoricalCrossentropy`
- Class `tf.compat.v2.losses.CategoricalCrossentropy`
- Class `tf.losses.CategoricalCrossentropy`
### Used in the guide:
- ``K``e``r``a``s`` ``o``v``e``r``v``i``e``w``
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``A``d``v``e``r``s``a``r``i``a``l`` ``e``x``a``m``p``l``e`` ``u``s``i``n``g`` ``F``G``S``M``

Use this crossentropy loss function when there are two or more label classes. We expect labels to be provided in a one_hot representation. If you want to provide labels as integers, please use SparseCategoricalCrossentropy loss. There should be # classes floating point values per feature.

In the snippet below, there is # classes floating pointing values per example. The shape of both y_pred and y_true are [batch_size, num_classes].
#### Usage:

```
 cce = tf.keras.losses.CategoricalCrossentropy()
loss = cce(
  [[1., 0., 0.], [0., 1., 0.], [0., 0., 1.]],
  [[.9, .05, .05], [.05, .89, .06], [.05, .01, .94]])
print('Loss: ', loss.numpy())  # Loss: 0.0945
```

Usage with the compile API:

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', loss=tf.keras.losses.CategoricalCrossentropy())
```
#### Args:
- `from_logits`: Whether `y_pred` is expected to be a logits tensor. By default, we assume that `y_pred` encodes a probability distribution. Note: Using `from_logits`=True may be more numerically stable.
- `label_smoothing`: Float in [`0`, `1`]. When > `0`, label values are smoothed, meaning the confidence on label values are relaxed. e.g. `label_smoothing`=`0`.2 means that we will use a value of `0.1` for label `0` and `0`.9 for label `1`"
- `reduction`: (Optional) Type of `tf.keras.losses.Reduction` to apply to loss. Default value is `AUTO`. `AUTO` indicates that the `reduction` option will be determined by the usage context. For almost all cases this defaults to `SUM_OVER_BATCH_SIZE`. When used with `tf.distribute.Strategy`, outside of built-in training loops such as `tf.keras` `compile` and `fit`, using `AUTO` or `SUM_OVER_BATCH_SIZE` will raise an error. Please see https://www.tensorflow.org/alpha/tutorials/distribute/training_loops for more details on this.
- `name`: Optional `name` for the op.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L459-L469)


```
 __init__(
    from_logits=False,
    label_smoothing=0,
    reduction=losses_utils.ReductionV2.AUTO,
    name='categorical_crossentropy'
)
```

Initialize self. See help(type(self)) for accurate signature.
## Methods
### __call__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L96-L128)


```
 __call__(
    y_true,
    y_pred,
    sample_weight=None
)
```

Invokes the Loss instance.
#### Args:
- `y_true`:` `Groun`d`` ``t`ru`t``h`` `v`a`lu`e``s``.`` ``s``h``a`p`e`` `=` `[`b``a``t``c``h``_``s``i``z``e``,`` ``d``0``,`` ``.``.`` ``d``N`]
- `y_pred`:` `T`h``e`` `pr`e``d``i``c``t``e``d`` `v`a`lu`e``s``.`` ``s``h``a`p`e`` `=` `[`b``a``t``c``h``_``s``i``z``e``,`` ``d``0``,`` ``.``.`` ``d``N`]
#### Returns:

Weighted loss float Tensor. If reduction is NONE, this has shape [batch_size, d0, .. dN-1]; otherwise, it is scalar. (Note dN-1 because all loss functions reduce by 1 dimension, usually axis=-1.)
#### Raises:
- `ValueError`: If the shape of `sample_weight` is invalid.
### from_config
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L130-L140)


```
 from_config(
    cls,
    config
)
```

Instantiates a Loss from its config (output of get_config()).
#### Args:
- `config`: Output of `get_config`().
#### Returns:

A Loss instance.
### get_config
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L223-L228)


```
 get_config()
```