

## Class  `InMemoryEvaluatorHook` 
在没有检查点的训练中进行挂钩运行评估。

Inherits From: [ `SessionRunHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/SessionRunHook)

**别名** : [ `tf.compat.v1.estimator.experimental.InMemoryEvaluatorHook` ](/api_docs/python/tf/estimator/experimental/InMemoryEvaluatorHook), [ `tf.compat.v2.estimator.experimental.InMemoryEvaluatorHook` ](/api_docs/python/tf/estimator/experimental/InMemoryEvaluatorHook)

#### 示例：


```
 def train_input_fn():
  ...
  return train_dataset

def eval_input_fn():
  ...
  return eval_dataset

estimator = tf.estimator.DNNClassifier(...)

evaluator = tf.estimator.experimental.InMemoryEvaluatorHook(
    estimator, eval_input_fn)
estimator.train(train_input_fn, hooks=[evaluator])
 
```

这种方法目前的局限性是：

- It doesn't support multi-node distributed mode.
- It doesn't support saveable objects other than variables (such as boostedtree support)
- It doesn't support custom saver logic (such as ExponentialMovingAveragesupport)


##  `__init__` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/hooks/hooks.py)

```
 __init__(
    estimator,
    input_fn,
    steps=None,
    hooks=None,
    name=None,
    every_n_iter=100
)
 
```

Initializes a  `InMemoryEvaluatorHook` .

#### 参数：
- **`estimator`** : A [ `tf.estimator.Estimator` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/Estimator) instance to call evaluate.
- **`input_fn`** :  Equivalent to the  `input_fn`  arg to  `estimator.evaluate` . Afunction that constructs the input data for evaluation.See [Creating input functions](https://tensorflow.org/guide/premade_estimators#create_input_functions)for more information. The function should construct and return one ofthe following:


- **`steps`** : Equivalent to the  `steps`  arg to  `estimator.evaluate` .  Number ofsteps for which to evaluate model. If  `None` , evaluates until  `input_fn` raises an end-of-input exception.


- **`hooks`** : Equivalent to the  `hooks`  arg to  `estimator.evaluate` . List of `SessionRunHook`  subclass instances. Used for callbacks inside theevaluation call.


- **`name`** :  Equivalent to the  `name`  arg to  `estimator.evaluate` . Name of theevaluation if user needs to run multiple evaluations on different datasets, such as on training data vs test data. Metrics for differentevaluations are saved in separate folders, and appear separately intensorboard.


- **`every_n_iter`** :  `int` , runs the evaluator once every N training iteration.


    - A 'tf.data.Dataset' object: Outputs of  `Dataset`  object must be atuple (features, labels) with same constraints as below.
    - A tuple (features, labels): Where  `features`  is a  `Tensor`  or adictionary of string feature name to  `Tensor`  and  `labels`  is a `Tensor`  or a dictionary of string label name to  `Tensor` . Both `features`  and  `labels`  are consumed by  `model_fn` . They shouldsatisfy the expectation of  `model_fn`  from inputs.


#### 加薪：
- **`ValueError`** : if  `every_n_iter`  is non-positive or it's not a single machinetraining


## 方法


###  `after_create_session` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/hooks/hooks.py)

```
 after_create_session(
    session,
    coord
)
 
```

进行第一次跑步，显示训练前的评估指标。

###  `after_run` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/hooks/hooks.py)

```
 after_run(
    run_context,
    run_values
)
 
```

运行Evaluator。

###  `before_run` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/session_run_hook.py#L129-L150)

```
 before_run(run_context)
 
```

在每次调用run（）之前调用。

You can return from this call a  `SessionRunArgs`  object indicating ops ortensors to add to the upcoming  `run()`  call.  These ops/tensors will be runtogether with the ops/tensors originally passed to the original run() call.The run args you return can also contain feeds to be added to the run()call.

The  `run_context`  argument is a  `SessionRunContext`  that providesinformation about the upcoming  `run()`  call: the originally requestedop/tensors, the TensorFlow Session.

此时图表已完成，无法添加操作。

#### 参数：
- **`run_context`** : A  `SessionRunContext`  object.


#### 返回：
None or a  `SessionRunArgs`  object.

###  `begin` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/hooks/hooks.py)

```
 begin()
 
```

建立评估图并恢复操作。

###  `end` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/hooks/hooks.py)

```
 end(session)
 
```

运行最终模型的计算器。

