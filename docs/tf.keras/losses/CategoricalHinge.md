## Class CategoricalHinge

Computes the categorical hinge loss between y_true and y_pred.
### Aliases:
- Class `tf.compat.v1.keras.losses.CategoricalHinge`
- Class `tf.compat.v2.keras.losses.CategoricalHinge`
- Class `tf.compat.v2.losses.CategoricalHinge`
- Class `tf.losses.CategoricalHinge`

loss = maximum(neg - pos + 1, 0) where neg = sum(y_true * y_pred) and pos = maximum(1 - y_true)
#### Usage:

```
 ch = tf.keras.losses.CategoricalHinge()
loss = ch([0., 1., 1.], [1., 0., 1.])
print('Loss: ', loss.numpy())  # Loss: 1.0
```

Usage with the compile API:

```
 model = tf.keras.Model(inputs, outputs)
model.compile('sgd', loss=tf.keras.losses.CategoricalHinge())
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L621-L625)


```
 __init__(
    reduction=losses_utils.ReductionV2.AUTO,
    name='categorical_hinge'
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