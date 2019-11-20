[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/losses/CosineSimilarity) |
[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L1097-L1141)  
---|---  
  
## Class `CosineSimilarity`

Computes the cosine similarity between `y_true` and `y_pred`.

### Aliases:

  * Class [`tf.compat.v1.keras.losses.CosineSimilarity`](/api_docs/python/tf/keras/losses/CosineSimilarity)
  * Class [`tf.compat.v2.keras.losses.CosineSimilarity`](/api_docs/python/tf/keras/losses/CosineSimilarity)
  * Class [`tf.compat.v2.losses.CosineSimilarity`](/api_docs/python/tf/keras/losses/CosineSimilarity)
  * Class [`tf.losses.CosineSimilarity`](/api_docs/python/tf/keras/losses/CosineSimilarity)

#### Usage:

    
    
    cosine_loss = tf.keras.losses.CosineSimilarity(axis=1)
    loss = cosine_loss([[0., 1.], [1., 1.]], [[1., 0.], [1., 1.]])
    # l2_norm(y_true) = [[0., 1.], [1./1.414], 1./1.414]]]
    # l2_norm(y_pred) = [[1., 0.], [1./1.414], 1./1.414]]]
    # l2_norm(y_true) . l2_norm(y_pred) = [[0., 0.], [0.5, 0.5]]
    # loss = mean(sum(l2_norm(y_true) . l2_norm(y_pred), axis=1))
           = ((0. + 0.) +  (0.5 + 0.5)) / 2
    
    print('Loss: ', loss.numpy())  # Loss: 0.5
    

Usage with the `compile` API:

    
    
    model = tf.keras.Model(inputs, outputs)
    model.compile('sgd', loss=tf.keras.losses.CosineSimilarity(axis=1))
    

#### Args:

  * **`axis`** : (Optional) Defaults to -1. The dimension along which the cosine similarity is computed.
  * **`reduction`** : (Optional) Type of [`tf.keras.losses.Reduction`](https://tensorflow.google.cn/api_docs/python/tf/keras/losses/Reduction) to apply to loss. Default value is `AUTO`. `AUTO` indicates that the reduction option will be determined by the usage context. For almost all cases this defaults to `SUM_OVER_BATCH_SIZE`. When used with [`tf.distribute.Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy), outside of built-in training loops such as [`tf.keras`](https://tensorflow.google.cn/api_docs/python/tf/keras) `compile` and `fit`, using `AUTO` or `SUM_OVER_BATCH_SIZE` will raise an error. Please see https://www.tensorflow.org/alpha/tutorials/distribute/training_loops for more details on this.
  * **`name`** : Optional name for the op.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L1136-L1141)

    
    
    __init__(
        axis=-1,
        reduction=losses_utils.ReductionV2.AUTO,
        name='cosine_similarity'
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
    

