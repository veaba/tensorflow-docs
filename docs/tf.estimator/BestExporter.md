

## Class  `BestExporter` 
这个类导出最佳模型的服务图和检查点。

Inherits From: [ `Exporter` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/Exporter)

**别名** : [ `tf.compat.v1.estimator.BestExporter` ](/api_docs/python/tf/estimator/BestExporter), [ `tf.compat.v2.estimator.BestExporter` ](/api_docs/python/tf/estimator/BestExporter)

This class performs a model export everytime the new model is better than anyexisting model.

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

为培训和评估创建最佳导出程序的示例：

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

#### 参数：
- **`name`** : unique name of this  `Exporter`  that is going to be used in theexport path.
- **`serving_input_receiver_fn`** : a function that takes no arguments and returnsa  `ServingInputReceiver` .
- **`event_file_pattern`** : event file name pattern relative to model_dir. IfNone, however, the exporter would not be preemption-safe. To bepreemption-safe, event_file_pattern must be specified.
- **`compare_fn`** : a function that compares two evaluation results and returnstrue if current evaluation result is better. Follows the signature:
- **`assets_extra`** : An optional dict specifying how to populate the assets.extradirectory within the exported SavedModel.  Each key should give thedestination path (including the filename) relative to the assets.extradirectory.  The corresponding value gives the full path of the sourcefile to be copied.  For example, the simple case of copying a singlefile without renaming it is specified as  `{'my_asset_file.txt':'/path/to/my_asset_file.txt'}` .
- **`as_text`** : whether to write the SavedModel proto in text format. Defaults to `False` .
- **`exports_to_keep`** : Number of exports to keep.  Older exports will begarbage-collected.  Defaults to 5.  Set to  `None`  to disable garbagecollection.
    - Args:
    -  `best_eval_result` : This is the evaluation result of the best model.
    -  `current_eval_result` : This is the evaluation result of current   candidate model.
    - Returns:True if current evaluation result is better; otherwise, False.


#### 加薪：
- **`ValueError`** : if any argument is invalid.


## 属性


###  `name` 
目录名。

A directory name under the export base directory where exports ofthis type are written.  Should not be  `None`  nor empty.

## 方法


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

#### 参数：
- **`estimator`** : the  `Estimator`  to export.
- **`export_path`** : A string containing a directory where to write the export.
- **`checkpoint_path`** : The checkpoint path to export.
- **`eval_result`** : The output of [ `Estimator.evaluate` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/estimator/Estimator#evaluate) on this checkpoint.
- **`is_the_final_export`** : This boolean is True when this is an export in theend of training.  It is False for the intermediate exports duringthe training.When passing  `Exporter`  to [ `tf.estimator.train_and_evaluate` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/train_and_evaluate) `is_the_final_export`  is always False if [ `TrainSpec.max_steps` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/TrainSpec#max_steps) is `None` .


#### 返回：
The string path to the exported directory or  `None`  if export is skipped.

