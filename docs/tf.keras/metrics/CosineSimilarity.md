## Class CosineSimilarity
Computes the cosine similarity between the labels and predictions.
### Aliases:
- Class `tf.compat.v1.keras.metrics.CosineSimilarity`
- Class `tf.compat.v2.keras.metrics.CosineSimilarity`
- Class `tf.compat.v2.metrics.CosineSimilarity`
- Class `tf.metrics.CosineSimilarity`
cosine similarity = (a . b) / ||a|| ||b|| Cosine Similarity
For example, if `y_true` is [0, 1, 1], and `y_pred` is [1, 0, 1], the cosine similarity is 0.5.
This metric keeps the average cosine similarity between `predictions` and `labels` over a stream of data.
#### Usage:

```
 m = tf.keras.metrics.CosineSimilarity(axis=1)
m.update_state([[0., 1.], [1., 1.]], [[1., 0.], [1., 1.]])
# l2_norm(y_true) = [[0., 1.], [1./1.414], 1./1.414]]]
# l2_norm(y_pred) = [[1., 0.], [1./1.414], 1./1.414]]]
# l2_norm(y_true) . l2_norm(y_pred) = [[0., 0.], [0.5, 0.5]]
# result = mean(sum(l2_norm(y_true) . l2_norm(y_pred), axis=1))
       = ((0. + 0.) +  (0.5 + 0.5)) / 2

print('Final result: ', m.result().numpy())  # Final result: 0.5
```
Usage with tf.keras API:

```
 model = tf.keras.Model(inputs, outputs)
model.compile(
    'sgd',
    loss='mse',
    metrics=[tf.keras.metrics.CosineSimilarity(axis=1)])
```
## __init__
View source

```
 __init__(
    name='cosine_similarity',
    dtype=None,
    axis=-1
)
```
Creates a `CosineSimilarity` instance.
#### Args:
- `name`: (Optional) string `name` of the metric instance.
- `dtype`: (Optional) data type of the metric result.
- `axis`: (Optional) Defaults to -1. The dimension along which the cosine similarity is computed.
## __new__
View source

```
 __new__(
    cls,
    *args,
    **kwargs
)
```
Create and return a new object. See help(type) for accurate signature.
## Methods
### reset_states
View source

```
 reset_states()
```
Resets all of the metric state variables.
This function is called between epochs/steps, when a metric is evaluated during training.
### result
View source

```
 result()
```
Computes and returns the metric value tensor.
Result computation is an idempotent operation that simply calculates the metric value using the state variables.
### update_state
View source

```
 update_state(
    y_true,
    y_pred,
    sample_weight=None
)
```
Accumulates metric statistics.
`y_true` and `y_pred` should have the same shape.
#### Args:
- `y_true`: The ground truth values.
- `y_pred`: The predicted values.
- `sample_weight`: Optional weighting of each example. Defaults to 1. Can be a `Tensor` whose rank is either 0, or the same rank as `y_true`, and must be broadcastable to `y_true`.
#### Returns:
Update op.
