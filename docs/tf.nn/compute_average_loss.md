Scales per-example losses with sample_weights and computes their average.

**别名** : [ `tf.compat.v1.nn.compute_average_loss` ](/api_docs/python/tf/nn/compute_average_loss), [ `tf.compat.v2.nn.compute_average_loss` ](/api_docs/python/tf/nn/compute_average_loss)

```
 tf.nn.compute_average_loss(
    per_example_loss,
    sample_weight=None,
    global_batch_size=None
)
 
```

使用分销策略和定制培训循环：

```
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
 
```

#### 参数：
- **`per_example_loss`** : Per-example loss.
- **`sample_weight`** : Optional weighting for each example.
- **`global_batch_size`** : Optional global batch size value. Defaults to (size offirst dimension of  `losses` ) * (number of replicas).


#### 返回：
标量损失值。

