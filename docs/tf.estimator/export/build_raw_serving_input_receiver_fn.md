Build a serving_input_receiver_fn expecting feature Tensors.
### Aliases:
- tf.compat.v1.estimator.export.build_raw_serving_input_receiver_fn
- tf.compat.v2.estimator.export.build_raw_serving_input_receiver_fn

```
 tf.estimator.export.build_raw_serving_input_receiver_fn(
    features,
    default_batch_size=None
)
```
Creates an serving_input_receiver_fn that expects all features to be fed directly.
#### Args:
- features: a dict of string to Tensor.
- default_batch_size: the number of query examples expected per batch. Leave unset for variable batch size (recommended).
#### Returns:
A serving_input_receiver_fn.
