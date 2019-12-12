Constructs an  `Estimator`  instance from given keras model.

```
 tf.keras.estimator.model_to_estimator(    keras_model=None,    keras_model_path=None,    custom_objects=None,    model_dir=None,    config=None,    checkpoint_format='checkpoint') 
```

### 在指南中使用：
- [Estimators](https://tensorflow.google.cn/guide/estimator)
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)


### 在教程中使用：
- [Create an Estimator from a Keras model](https://tensorflow.google.cn/tutorials/estimator/keras_model_to_estimator)
For usage example, please see:[Creating estimators from KerasModels](https://tensorflow.org/guide/estimators#model_to_estimator).

#### 参数：
- **`keras_model`** : A compiled Keras model object. This argument is mutuallyexclusive with  `keras_model_path` .
- **`keras_model_path`** : Path to a compiled Keras model saved on disk, in HDF5format, which can be generated with the  `save()`  method of a Keras model.This argument is mutually exclusive with  `keras_model` .
- **`custom_objects`** : Dictionary for custom objects.
- **`model_dir`** : Directory to save  `Estimator`  model parameters, graph, summaryfiles for TensorBoard, etc.
- **`config`** :  `RunConfig`  to config  `Estimator` .
- **`checkpoint_format`** : Sets the format of the checkpoint saved by the estimatorwhen training. May be  `saver`  or  `checkpoint` , depending on whether tosave checkpoints from [ `tf.compat.v1.train.Saver` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/Saver) or [ `tf.train.Checkpoint` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint).The default is  `checkpoint` . Estimators use name-based  `tf.train.Saver` checkpoints, while Keras models use object-based checkpoints from[ `tf.train.Checkpoint` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint). Currently, saving object-based checkpoints from `model_to_estimator`  is only supported by Functional and Sequentialmodels.


#### 返回：
来自给定keras模型的估计量。

#### 加薪：
- **`ValueError`** : if neither keras_model nor keras_model_path was given.
- **`ValueError`** : if both keras_model and keras_model_path was given.
- **`ValueError`** : if the keras_model_path is a GCS URI.
- **`ValueError`** : if keras_model has not been compiled.
- **`ValueError`** : if an invalid checkpoint_format was given.
