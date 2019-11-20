[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/estimator/FinalExporter) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/exporter.py)  
  
  
## Class `FinalExporter`

This class exports the serving graph and checkpoints at the end.

Inherits From:
[`Exporter`](https://tensorflow.google.cn/api_docs/python/tf/estimator/Exporter)

### Aliases:

  * Class [`tf.compat.v1.estimator.FinalExporter`](/api_docs/python/tf/estimator/FinalExporter)
  * Class [`tf.compat.v2.estimator.FinalExporter`](/api_docs/python/tf/estimator/FinalExporter)

This class performs a single export at the end of training.

## `__init__`

[View
source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/exporter.py)

    
    
    __init__(
        name,
        serving_input_receiver_fn,
        assets_extra=None,
        as_text=False
    )
    

Create an `Exporter` to use with
[`tf.estimator.EvalSpec`](https://tensorflow.google.cn/api_docs/python/tf/estimator/EvalSpec).

#### Args:

  * **`name`** : unique name of this `Exporter` that is going to be used in the export path.
  * **`serving_input_receiver_fn`** : a function that takes no arguments and returns a `ServingInputReceiver`.
  * **`assets_extra`** : An optional dict specifying how to populate the assets.extra directory within the exported SavedModel. Each key should give the destination path (including the filename) relative to the assets.extra directory. The corresponding value gives the full path of the source file to be copied. For example, the simple case of copying a single file without renaming it is specified as `{'my_asset_file.txt': '/path/to/my_asset_file.txt'}`.
  * **`as_text`** : whether to write the SavedModel proto in text format. Defaults to `False`.

#### Raises:

  * **`ValueError`** : if any arguments is invalid.

## Properties

### `name`

Directory name.

A directory name under the export base directory where exports of this type
are written. Should not be `None` nor empty.

## Methods

### `export`

[View
source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/exporter.py)

    
    
    export(
        estimator,
        export_path,
        checkpoint_path,
        eval_result,
        is_the_final_export
    )
    

Exports the given `Estimator` to a specific format.

#### Args:

  * **`estimator`** : the `Estimator` to export.
  * **`export_path`** : A string containing a directory where to write the export.
  * **`checkpoint_path`** : The checkpoint path to export.
  * **`eval_result`** : The output of [`Estimator.evaluate`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/estimator/Estimator#evaluate) on this checkpoint.
  * **`is_the_final_export`** : This boolean is True when this is an export in the end of training. It is False for the intermediate exports during the training. When passing `Exporter` to [`tf.estimator.train_and_evaluate`](https://tensorflow.google.cn/api_docs/python/tf/estimator/train_and_evaluate) `is_the_final_export` is always False if [`TrainSpec.max_steps`](https://tensorflow.google.cn/api_docs/python/tf/estimator/TrainSpec#max_steps) is `None`.

#### Returns:

The string path to the exported directory or `None` if export is skipped.

