

## Class  `Exporter` 
表示模型导出类型的类。

**别名** : [ `tf.compat.v1.estimator.Exporter` ](/api_docs/python/tf/estimator/Exporter), [ `tf.compat.v2.estimator.Exporter` ](/api_docs/python/tf/estimator/Exporter)

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

