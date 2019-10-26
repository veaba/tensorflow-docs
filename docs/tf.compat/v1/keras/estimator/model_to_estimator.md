Constructs an Estimator instance from given keras model.

```
 tf.compat.v1.keras.estimator.model_to_estimator(
    keras_model=None,
    keras_model_path=None,
    custom_objects=None,
    model_dir=None,
    config=None,
    checkpoint_format='saver'
)
```
[Creating estimators from Keras Models](https://tensorflow.org/guide/estimators#model_to_estimator)For usage example, please see: .

Sample Weights Estimators returned by model_to_estimator are configured to handle sample weights (similar to keras_model.fit(x, y, sample_weights)). To pass sample weights when training or evaluating the Estimator, the first item returned by the input function should be a dictionary with keys features and sample_weights. Example below:

```
 keras_model = tf.keras.Model(...)
keras_model.compile(...)

estimator = tf.keras.estimator.model_to_estimator(keras_model)

def input_fn():
  return dataset_ops.Dataset.from_tensors(
      ({'features': features, 'sample_weights': sample_weights},
       targets))

estimator.train(input_fn, steps=1)
```
#### Args:
- keras_model: A compiled Keras model object. This argument is mutually exclusive with keras_model_path.
- keras_model_path: Path to a compiled Keras model saved on disk, in HDF5 format, which can be generated with the save() method of a Keras model. This argument is mutually exclusive with keras_model.
- custom_objects: Dictionary for custom objects.
- model_dir: Directory to save Estimator model parameters, graph, summary files for TensorBoard, etc.
- config: RunConfig to config Estimator.
- checkpoint_format: Sets the format of the checkpoint saved by the estimator when training. May be saver or checkpoint, depending on whether to save checkpoints from tf.train.Saver or tf.train.Checkpoint. This argument currently defaults to saver. When 2.0 is released, the default will be checkpoint. Estimators use name-based tf.train.Saver checkpoints, while Keras models use object-based checkpoints from tf.train.Checkpoint. Currently, saving object-based checkpoints from model_to_estimator is only supported by Functional and Sequential models.
#### Returns:
An Estimator from given keras model.
#### Raises:
- ValueError: if neither keras_model nor keras_model_path was given.
- ValueError: if both keras_model and keras_model_path was given.
- ValueError: if the keras_model_path is a GCS URI.
- ValueError: if keras_model has not been compiled.
- ValueError: if an invalid checkpoint_format was given.
