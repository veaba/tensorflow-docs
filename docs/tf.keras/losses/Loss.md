[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/losses/Loss) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L44-L177)  
---|---  
  
## Class `Loss`

Loss base class.

### Aliases:

  * Class [`tf.compat.v1.keras.losses.Loss`](/api_docs/python/tf/keras/losses/Loss)
  * Class [`tf.compat.v2.keras.losses.Loss`](/api_docs/python/tf/keras/losses/Loss)
  * Class [`tf.compat.v2.losses.Loss`](/api_docs/python/tf/keras/losses/Loss)
  * Class [`tf.losses.Loss`](/api_docs/python/tf/keras/losses/Loss)

To be implemented by subclasses: * `call()`: Contains the logic for loss
calculation using `y_true`, `y_pred`.

Example subclass implementation:

    
    
    class MeanSquaredError(Loss):
      def call(self, y_true, y_pred):
        y_pred = ops.convert_to_tensor(y_pred)
        y_true = math_ops.cast(y_true, y_pred.dtype)
        return K.mean(math_ops.square(y_pred - y_true), axis=-1)
    

When used with
[`tf.distribute.Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy),
outside of built-in training loops such as
[`tf.keras`](https://tensorflow.google.cn/api_docs/python/tf/keras) `compile`
and `fit`, please use 'SUM' or 'NONE' reduction types, and reduce losses
explicitly in your training loop. Using 'AUTO' or 'SUM_OVER_BATCH_SIZE' will
raise an error.

Please see
https://www.tensorflow.org/alpha/tutorials/distribute/training_loops for more
details on this.

You can implement 'SUM_OVER_BATCH_SIZE' using global batch size like:

    
    
    with strategy.scope():
      loss_obj = tf.keras.losses.CategoricalCrossentropy(
          reduction=tf.keras.losses.Reduction.NONE)
      ....
      loss = (tf.reduce_sum(loss_obj(labels, predictions)) *
              (1. / global_batch_size))
    

#### Args:

  * **`reduction`** : (Optional) Type of [`tf.keras.losses.Reduction`](https://tensorflow.google.cn/api_docs/python/tf/keras/losses/Reduction) to apply to loss. Default value is `AUTO`. `AUTO` indicates that the reduction option will be determined by the usage context. For almost all cases this defaults to `SUM_OVER_BATCH_SIZE`. When used with [`tf.distribute.Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy), outside of built-in training loops such as [`tf.keras`](https://tensorflow.google.cn/api_docs/python/tf/keras) `compile` and `fit`, using `AUTO` or `SUM_OVER_BATCH_SIZE` will raise an error. Please see https://www.tensorflow.org/alpha/tutorials/distribute/training_loops for more details on this.
  * **`name`** : Optional name for the op.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L91-L94)

    
    
    __init__(
        reduction=losses_utils.ReductionV2.AUTO,
        name=None
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

### `call`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L145-L154)

    
    
    call(
        y_true,
        y_pred
    )
    

Invokes the `Loss` instance.

#### Args:

  * **`y_true`** : Ground truth values, with the same shape as 'y_pred'.
  * **`y_pred`** : The predicted values.

### `from_config`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L130-L140)

    
    
    @classmethod
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
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L142-L143)

    
    
    get_config()
    

