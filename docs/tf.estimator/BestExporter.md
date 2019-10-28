## Class BestExporter
This class exports the serving graph and checkpoints of the best models.
Inherits From: `Exporter`
### Aliases:
- Class `tf.compat.v1.estimator.BestExporter`
- Class `tf.compat.v2.estimator.BestExporter`
This class performs a model export everytime the new model is better than any existing model.
## __init__
View source

```
 __init__(
    name='best_exporter',
    serving_input_receiver_fn=None,
    event_file_pattern='eval/*.tfevents.*',
    compare_fn=_loss_smaller,
    assets_extra=None,
    as_text=False,
    exports_to_keep=5
)
```
Create an `Exporter` to use with `tf.estimator.EvalSpec`.
Example of creating a BestExporter for training and evaluation:

```
 def make_train_and_eval_fn():
  # Set up feature columns.
  categorical_feature_a = (
      tf.feature_column.categorical_column_with_hash_bucket(...))
  categorical_feature_a_emb = embedding_column(
      categorical_column=categorical_feature_a, ...)
  ...  # other feature columns

  estimator = tf.estimator.DNNClassifier(
      config=tf.estimator.RunConfig(
          model_dir='/my_model', save_summary_steps=100),
      feature_columns=[categorical_feature_a_emb, ...],
      hidden_units=[1024, 512, 256])

  serving_feature_spec = tf.feature_column.make_parse_example_spec(
      categorical_feature_a_emb)
  serving_input_receiver_fn = (
      tf.estimator.export.build_parsing_serving_input_receiver_fn(
      serving_feature_spec))

  exporter = tf.estimator.BestExporter(
      name="best_exporter",
      serving_input_receiver_fn=serving_input_receiver_fn,
      exports_to_keep=5)

  train_spec = tf.estimator.TrainSpec(...)

  eval_spec = [tf.estimator.EvalSpec(
    input_fn=eval_input_fn,
    steps=100,
    exporters=exporter,
    start_delay_secs=0,
    throttle_secs=5)]

  return tf.estimator.DistributedTrainingSpec(estimator, train_spec,
                                              eval_spec)
```
#### Args:
- `name`: unique `name` of this `Exporter` that is going to be used in the export path.
- `serving_input_receiver_fn`: a function that takes no arguments and returns a `ServingInputReceiver`.
- `event_file_pattern`: event file name pattern relative to model_dir. If None, however, the exporter would not be preemption-safe. To be preemption-safe, `event_file_pattern` must be specified.
- `compare_fn`: a function that compares two evaluation results and returns true if current evaluation result is better. Follows the signature:
Args:
`best_eval_result`: This is the evaluation result of the best model.
`current_eval_result`: This is the evaluation result of current candidate model.
Returns: True if current evaluation result is better; otherwise, False.
- ``A``r``g``s``:``
- `best_eval_result`: This is the evaluation result of the best model.
- `current_eval_result`: This is the evaluation result of current candidate model.
- ``R``e``t``u``r``n``s``:`` ``T``r``u``e`` ``i``f`` ``c``u``r``r``e``n``t`` ``e``v``a``l``u``a``t``i``o``n`` ``r``e``s``u``l``t`` ``i``s`` ``b``e``t``t``e``r``;`` ``o``t``h``e``r``w``i``s``e``,`` ``F``a``l``s``e``.``
- `assets_extra`: An optional dict specifying how to populate the assets.extra directory within the exported SavedModel. Each key should give the destination path (including the filename) relative to the assets.extra directory. The corresponding value gives the full path of the source file to be copied. For example, the simple case of copying a single file without renaming it is specified as `{'my_asset_file.txt': '/path/to/my_asset_file.txt'}`.
- `as_text`: whether to write the SavedModel proto in text format. Defaults to `False`.
- `exports_to_keep`: Number of exports to keep. Older exports will be garbage-collected. Defaults to 5. Set to `None` to disable garbage collection.
#### Raises:
- `ValueError`: if any argument is invalid.
## Properties
### name
Directory name.
A directory name under the export base directory where exports of this type are written. Should not be `None` nor empty.
## Methods
### export
View source

```
 export(
    estimator,
    export_path,
    checkpoint_path,
    eval_result,
    is_the_final_export
)
```
Exports the given `Estimator` to a specific format.
#### Args:
- `estimator`: the `Estimator` to export.
- `export_path`: A string containing a directory where to write the export.
- `checkpoint_path`: The checkpoint path to export.
- `eval_result`: The output of `Estimator.evaluate` on this checkpoint.
- `is_the_final_export`: This boolean is True when this is an export in the end of training. It is False for the intermediate exports during the training. When passing `Exporter` to `tf.estimator.train_and_evaluate` `is_the_final_export` is always False if `TrainSpec.max_steps` is `None`.
#### Returns:
The string path to the exported directory or `None` if export is skipped.
