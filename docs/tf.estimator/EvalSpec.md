

## Class  `EvalSpec` 
Configuration for the "eval" part for the  `train_and_evaluate`  call.

**别名** : [ `tf.compat.v1.estimator.EvalSpec` ](/api_docs/python/tf/estimator/EvalSpec), [ `tf.compat.v2.estimator.EvalSpec` ](/api_docs/python/tf/estimator/EvalSpec)

### 在指南中使用：
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)


### 在教程中使用：
- [Multi-worker training with Estimator](https://tensorflow.google.cn/tutorials/distribute/multi_worker_with_estimator)
 `EvalSpec`  combines details of evaluation of the trained model as well as itsexport. Evaluation consists of computing metrics to judge the performance ofthe trained model.  Export writes out the trained model on to externalstorage.

##  `__new__` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/training.py)

```
 @staticmethod
__new__(
    cls,
    input_fn,
    steps=100,
    name=None,
    hooks=None,
    exporters=None,
    start_delay_secs=120,
    throttle_secs=600
)
 
```

Creates a validated  `EvalSpec`  instance.

#### 参数：
- **`input_fn`** : A function that constructs the input data for evaluation.See [Premade Estimators](https://tensorflow.org/guide/premade_estimators#create_input_functions)for more information. The function should construct and return one ofthe following:


- **`steps`** : Int. Positive number of steps for which to evaluate model. If `None` , evaluates until  `input_fn`  raises an end-of-input exception.See [ `Estimator.evaluate` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/estimator/Estimator#evaluate) for details.


- **`name`** : String. Name of the evaluation if user needs to run multipleevaluations on different data sets. Metrics for different evaluationsare saved in separate folders, and appear separately in tensorboard.


- **`hooks`** : Iterable of  `tf.train.SessionRunHook`  objects to runduring evaluation.


- **`exporters`** : Iterable of  `Exporter` s, or a single one, or  `None` . `exporters`  will be invoked after each evaluation.


- **`start_delay_secs`** : Int. Start evaluating after waiting for this manyseconds.


- **`throttle_secs`** : Int. Do not re-evaluate unless the last evaluation wasstarted at least this many seconds ago. Of course, evaluation does notoccur if no new checkpoints are available, hence, this is the minimum.


    - A 'tf.data.Dataset' object: Outputs of  `Dataset`  object must be atuple (features, labels) with same constraints as below.
    - A tuple (features, labels): Where features is a  `Tensor`  or adictionary of string feature name to  `Tensor`  and labels is a `Tensor`  or a dictionary of string label name to  `Tensor` .


#### 返回：
A validated  `EvalSpec`  object.

#### 加薪：
- **`ValueError`** : If any of the input arguments is invalid.
- **`TypeError`** : If any of the arguments is not of the expected type.


## 属性


###  `input_fn` 


###  `steps` 


###  `name` 


###  `hooks` 


###  `exporters` 


###  `start_delay_secs` 


###  `throttle_secs` 
