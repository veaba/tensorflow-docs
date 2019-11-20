[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/losses/Poisson) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L629-L651)  
---|---  
  
## Class `Poisson`

Computes the Poisson loss between `y_true` and `y_pred`.

### Aliases:

  * Class [`tf.compat.v1.keras.losses.Poisson`](/api_docs/python/tf/keras/losses/Poisson)
  * Class [`tf.compat.v2.keras.losses.Poisson`](/api_docs/python/tf/keras/losses/Poisson)
  * Class [`tf.compat.v2.losses.Poisson`](/api_docs/python/tf/keras/losses/Poisson)
  * Class [`tf.losses.Poisson`](/api_docs/python/tf/keras/losses/Poisson)

`loss = y_pred - y_true * log(y_pred)`

#### Usage:

    
    
    p = tf.keras.losses.Poisson()
    loss = p([1., 9., 2.], [4., 8., 12.])
    print('Loss: ', loss.numpy())  # Loss: -0.35702705
    

Usage with the `compile` API:

    
    
    model = tf.keras.Model(inputs, outputs)
    model.compile('sgd', loss=tf.keras.losses.Poisson())
    

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L650-L651)

    
    
    __init__(
        reduction=losses_utils.ReductionV2.AUTO,
        name='poisson'
    )
    

Initialize self. See help(type(self)) for accurate signature.

## Methods

### `__call__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L96-L128)

    
    
    __call__(
        y_true,
        y_pred,
        sample_weight=None
    )
    

Invokes the `Loss` instance.

#### Args:

  * **`y_true`** : Ground truth values. shape = `[batch_size, d0, .. dN]`
  * **`y_pred`** : The predicted values. shape = `[batch_size, d0, .. dN]`
  * **`sample_weight`** : Optional `sample_weight` acts as a coefficient for the loss. If a scalar is provided, then the loss is simply scaled by the given value. If `sample_weight` is a tensor of size `[batch_size]`, then the total loss for each sample of the batch is rescaled by the corresponding element in the `sample_weight` vector. If the shape of `sample_weight` is `[batch_size, d0, .. dN-1]` (or can be broadcasted to this shape), then each loss element of `y_pred` is scaled by the corresponding value of `sample_weight`. (Note on`dN-1`: all loss functions reduce by 1 dimension, usually axis=-1.)

#### Returns:

Weighted loss float `Tensor`. If `reduction` is `NONE`, this has shape
`[batch_size, d0, .. dN-1]`; otherwise, it is scalar. (Note `dN-1` because all
loss functions reduce by 1 dimension, usually axis=-1.)

#### Raises:

  * **`ValueError`** : If the shape of `sample_weight` is invalid.

### `from_config`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L130-L140)

    
    
    from_config(
        cls,
        config
    )
    

Instantiates a `Loss` from its config (output of `get_config()`).

#### Args:

  * **`config`** : Output of `get_config()`.

#### Returns:

A `Loss` instance.

### `get_config`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L223-L228)

    
    
    get_config()
    

[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/losses/poisson) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L1035-L1061)  
---|---  
  
Computes the Poisson loss between y_true and y_pred.

### Aliases:

  * [`tf.compat.v1.keras.losses.poisson`](/api_docs/python/tf/keras/losses/poisson)
  * [`tf.compat.v1.keras.metrics.poisson`](/api_docs/python/tf/keras/losses/poisson)
  * [`tf.compat.v2.keras.losses.poisson`](/api_docs/python/tf/keras/losses/poisson)
  * [`tf.compat.v2.keras.metrics.poisson`](/api_docs/python/tf/keras/losses/poisson)
  * [`tf.compat.v2.losses.poisson`](/api_docs/python/tf/keras/losses/poisson)
  * [`tf.compat.v2.metrics.poisson`](/api_docs/python/tf/keras/losses/poisson)
  * [`tf.keras.metrics.poisson`](/api_docs/python/tf/keras/losses/poisson)
  * [`tf.losses.poisson`](/api_docs/python/tf/keras/losses/poisson)
  * [`tf.metrics.poisson`](/api_docs/python/tf/keras/losses/poisson)

    
    
    tf.keras.losses.poisson(
        y_true,
        y_pred
    )
    

The Poisson loss is the mean of the elements of the `Tensor` `y_pred - y_true
* log(y_pred)`.

#### Usage:

    
    
    loss = tf.keras.losses.poisson([1.4, 9.3, 2.2], [4.3, 8.2, 12.2])
    print('Loss: ', loss.numpy())  # Loss: -0.8045559
    

#### Args:

  * **`y_true`** : Tensor of true targets.
  * **`y_pred`** : Tensor of predicted targets.

#### Returns:

A `Tensor` with the mean Poisson loss.

#### Raises:

  * **`InvalidArgumentError`** : If `y_true` and `y_pred` have incompatible shapes.

