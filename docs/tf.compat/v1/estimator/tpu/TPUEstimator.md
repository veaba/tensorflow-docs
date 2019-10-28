## Class TPUEstimator
Estimator with TPU support.
Inherits From: `Estimator`
TPUEstimator also supports training on CPU and GPU. You don't need to define a separate `tf.estimator.Estimator`.
TPUEstimator handles many of the details of running on TPU devices, such as replicating inputs and models for each core, and returning to host periodically to run hooks.
TPUEstimator transforms a global batch size in params to a per-shard batch size when calling the `input_fn` and `model_fn`. Users should specify global batch size in constructor, and then get the batch size for each shard in `input_fn` and `model_fn` by `params['batch_size']`.
- For training, `model_fn` gets per-core batch size; `input_fn` may get per-core or per-host batch size depending on `per_host_input_for_training` in `TPUConfig` (See docstring for `TPUConfig` for details).
- For evaluation and prediction, `model_fn` gets per-core batch size and `input_fn` get per-host batch size.
# Evaluation
`model_fn` should return `TPUEstimatorSpec`, which expects the `eval_metrics` for TPU evaluation. If eval_on_tpu is False, the evaluation will execute on CPU or GPU; in this case the following discussion on TPU evaluation does not apply.
`TPUEstimatorSpec.eval_metrics` is a tuple of `metric_fn` and `tensors`, where `tensors` could be a list of any nested structure of `Tensor`s (See `TPUEstimatorSpec` for details). `metric_fn` takes the `tensors` and returns a dict from metric string name to the result of calling a metric function, namely a `metric_tensor, update_op)` tuple.
One can set `use_tpu` to `False` for testing. All training, evaluation, and predict will be executed on CPU. `input_fn` and `model_fn` will receive `train_batch_size` or `eval_batch_size` unmodified as `params['batch_size']`.
#### Current limitations:
## Example (MNIST):

```
 # The metric Fn which runs on CPU.
def metric_fn(labels, logits):
  predictions = tf.argmax(logits, 1)
  return {
    'accuracy': tf.compat.v1.metrics.precision(
        labels=labels, predictions=predictions),
  }

# Your model Fn which runs on TPU (eval_metrics is list in this example)
def model_fn(features, labels, mode, config, params):
  ...
  logits = ...

  if mode = tf.estimator.ModeKeys.EVAL:
    return tpu_estimator.TPUEstimatorSpec(
        mode=mode,
        loss=loss,
        eval_metrics=(metric_fn, [labels, logits]))

# or specify the eval_metrics tensors as dict.
def model_fn(features, labels, mode, config, params):
  ...
  final_layer_output = ...

  if mode = tf.estimator.ModeKeys.EVAL:
    return tpu_estimator.TPUEstimatorSpec(
        mode=mode,
        loss=loss,
        eval_metrics=(metric_fn, {
            'labels': labels,
            'logits': final_layer_output,
        }))
```
# Prediction
Prediction on TPU is an experimental feature to support large batch inference. It is not designed for latency-critical system. In addition, due to some usability issues, for prediction with small dataset, CPU `.predict`, i.e., creating a new `TPUEstimator` instance with `use_tpu=False`, might be more convenient.
#### Current limitations:
## Example (MNIST):

```
 height = 32
width = 32
total_examples = 100

def predict_input_fn(params):
  batch_size = params['batch_size']

  images = tf.random.uniform(
      [total_examples, height, width, 3], minval=-1, maxval=1)

  dataset = tf.data.Dataset.from_tensor_slices(images)
  dataset = dataset.map(lambda images: {'image': images})

  dataset = dataset.batch(batch_size)
  return dataset

def model_fn(features, labels, params, mode):
   # Generate predictions, called 'output', from features['image']

  if mode == tf.estimator.ModeKeys.PREDICT:
    return tf.contrib.tpu.TPUEstimatorSpec(
        mode=mode,
        predictions={
            'predictions': output,
            'is_padding': features['is_padding']
        })

tpu_est = TPUEstimator(
    model_fn=model_fn,
    ...,
    predict_batch_size=16)

# Fully consume the generator so that TPUEstimator can shutdown the TPU
# system.
for item in tpu_est.predict(input_fn=input_fn):
  # Filter out item if the `is_padding` is 1.
  # Process the 'predictions'
```
# Exporting
`export_saved_model` exports 2 metagraphs, one with `saved_model.SERVING`, and another with `saved_model.SERVING` and `saved_model.TPU` tags. At serving time, these tags are used to select the appropriate metagraph to load.
