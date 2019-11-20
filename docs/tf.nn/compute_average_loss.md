[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/nn/compute_average_loss) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/nn_impl.py#L385-L438)  
  
  
Scales per-example losses with sample_weights and computes their average.

### Aliases:

  * [`tf.compat.v1.nn.compute_average_loss`](/api_docs/python/tf/nn/compute_average_loss)
  * [`tf.compat.v2.nn.compute_average_loss`](/api_docs/python/tf/nn/compute_average_loss)

    
    
    tf.nn.compute_average_loss(
        per_example_loss,
        sample_weight=None,
        global_batch_size=None
    )
    

### Used in the tutorials:

  * [Custom training: basics](https://tensorflow.google.cn/tutorials/customization/custom_training)
  * [Custom training with tf.distribute.Strategy](https://tensorflow.google.cn/tutorials/distribute/custom_training)

Usage with distribution strategy and custom training loop:

    
    
    with strategy.scope():
      def compute_loss(labels, predictions, sample_weight=None):
    
        # If you are using a `Loss` class instead, set reduction to `NONE` so that
        # we can do the reduction afterwards and divide by global batch size.
        per_example_loss = tf.keras.losses.sparse_categorical_crossentropy(
            labels, predictions)
    
        # Compute loss that is scaled by sample_weight and by global batch size.
        return tf.compute_average_loss(
            per_example_loss,
            sample_weight=sample_weight,
            global_batch_size=GLOBAL_BATCH_SIZE)
    

#### Args:

  * **`per_example_loss`** : Per-example loss.
  * **`sample_weight`** : Optional weighting for each example.
  * **`global_batch_size`** : Optional global batch size value. Defaults to (size of first dimension of `losses`) * (number of replicas).

#### Returns:

Scalar loss value.

