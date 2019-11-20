[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/nn/weighted_cross_entropy_with_logits)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/nn_impl.py#L243-L318)  
---|---  
  
Computes a weighted cross entropy.

### Aliases:

  * [`tf.compat.v2.nn.weighted_cross_entropy_with_logits`](/api_docs/python/tf/nn/weighted_cross_entropy_with_logits)

    
    
    tf.nn.weighted_cross_entropy_with_logits(
        labels,
        logits,
        pos_weight,
        name=None
    )
    

### Used in the guide:

  * [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)

This is like `sigmoid_cross_entropy_with_logits()` except that `pos_weight`,
allows one to trade off recall and precision by up- or down-weighting the cost
of a positive error relative to a negative error.

The usual cross-entropy cost is defined as:

    
    
    labels * -log(sigmoid(logits)) +
        (1 - labels) * -log(1 - sigmoid(logits))
    

A value `pos_weight > 1` decreases the false negative count, hence increasing
the recall. Conversely setting `pos_weight < 1` decreases the false positive
count and increases the precision. This can be seen from the fact that
`pos_weight` is introduced as a multiplicative coefficient for the positive
labels term in the loss expression:

    
    
    labels * -log(sigmoid(logits)) * pos_weight +
        (1 - labels) * -log(1 - sigmoid(logits))
    

For brevity, let `x = logits`, `z = labels`, `q = pos_weight`. The loss is:

    
    
      qz * -log(sigmoid(x)) + (1 - z) * -log(1 - sigmoid(x))
    = qz * -log(1 / (1 + exp(-x))) + (1 - z) * -log(exp(-x) / (1 + exp(-x)))
    = qz * log(1 + exp(-x)) + (1 - z) * (-log(exp(-x)) + log(1 + exp(-x)))
    = qz * log(1 + exp(-x)) + (1 - z) * (x + log(1 + exp(-x))
    = (1 - z) * x + (qz +  1 - z) * log(1 + exp(-x))
    = (1 - z) * x + (1 + (q - 1) * z) * log(1 + exp(-x))
    

Setting `l = (1 + (q - 1) * z)`, to ensure stability and avoid overflow, the
implementation uses

    
    
    (1 - z) * x + l * (log(1 + exp(-abs(x))) + max(-x, 0))
    

`logits` and `labels` must have the same type and shape.

#### Args:

  * **`labels`** : A `Tensor` of the same type and shape as `logits`.
  * **`logits`** : A `Tensor` of type `float32` or `float64`.
  * **`pos_weight`** : A coefficient to use on the positive examples.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of the same shape as `logits` with the componentwise weighted
logistic losses.

#### Raises:

  * **`ValueError`** : If `logits` and `labels` do not have the same shape.

