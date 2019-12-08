

## Class  `BestExporter` 
This class exports the serving graph and checkpoints of the best models.

Inherits From: [ `Exporter` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/Exporter)



### Aliases:

- Class [ `tf.compat.v1.estimator.BestExporter` ](/api_docs/python/tf/estimator/BestExporter)

- Class [ `tf.compat.v2.estimator.BestExporter` ](/api_docs/python/tf/estimator/BestExporter)

This class performs a model export everytime the new model is better than any
existing model.



##  `__init__` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/exporter.py)



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

Create an  `Exporter`  to use with [ `tf.estimator.EvalSpec` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/EvalSpec).

Example of creating a BestExporter for training and evaluation:



```
 def,
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

- **`name`** : unique name of this  `Exporter`  that is going to be used in the
export path.

- **`serving_input_receiver_fn`** : a function that takes no arguments and returns
a  `ServingInputReceiver` .

- **`event_file_pattern`** : event file name pattern relative to model_dir. If
None, however, the exporter would not be preemption-safe. To be
preemption-safe, event_file_pattern must be specified.

- **`compare_fn`** : a function that compares two evaluation results and returns
true if current evaluation result is better. Follows the signature:


- **`assets_extra`** : An optional dict specifying how to populate the assets.extra
directory within the exported SavedModel.  Each key should give the
destination path (including the filename) relative to the assets.extra
directory.  The corresponding value gives the full path of the source
file to be copied.  For example, the simple case of copying a single
file without renaming it is specified as <code translate="no" dir="ltr">{'my_asset_file.txt':
'/path/to/my_asset_file.txt'}</code>.

- **`as_text`** : whether to write the SavedModel proto in text format. Defaults to
 `False` .

- **`exports_to_keep`** : Number of exports to keep.  Older exports will be
garbage-collected.  Defaults to 5.  Set to  `None`  to disable garbage
collection.


    - Args:

    -  `best_eval_result` : This is the evaluation result of the best model.

    -  `current_eval_result` : This is the evaluation result of current
   candidate model.

    - Returns:
True if current evaluation result is better; otherwise, False.



#### Raises:

- **`ValueError`** : if any argument is invalid.



## Properties


###  `name` 
Directory name.

A directory name under the export base directory where exports of
this type are written.  Should not be  `None`  nor empty.



## Methods


###  `export` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/exporter.py)



```
 export(
    estimator,
    export_path,
    checkpoint_path,
    eval_result,
    is_the_final_export
)
 
```

Exports the given  `Estimator`  to a specific format.



#### Args:

- **`estimator`** : the  `Estimator`  to export.

- **`export_path`** : A string containing a directory where to write the export.

- **`checkpoint_path`** : The checkpoint path to export.

- **`eval_result`** : The output of [ `Estimator.evaluate` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/estimator/Estimator#evaluate) on this checkpoint.

- **`is_the_final_export`** : This boolean is True when this is an export in the
end of training.  It is False for the intermediate exports during
the training.
When passing  `Exporter`  to [ `tf.estimator.train_and_evaluate` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/train_and_evaluate)
 `is_the_final_export`  is always False if [ `TrainSpec.max_steps` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/TrainSpec#max_steps) is
 `None` .



#### Returns:
The string path to the exported directory or  `None`  if export is skipped.

