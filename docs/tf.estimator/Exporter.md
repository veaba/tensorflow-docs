## Class Exporter
A class representing a type of model export.
### Aliases:
- Class `tf.compat.v1.estimator.Exporter`
- Class `tf.compat.v2.estimator.Exporter`
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
