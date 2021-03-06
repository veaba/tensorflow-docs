

## Class  `Metric` 
封装度量逻辑和状态。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.metrics.Metric` ](/api_docs/python/tf/keras/metrics/Metric), [ `tf.compat.v2.keras.metrics.Metric` ](/api_docs/python/tf/keras/metrics/Metric), [ `tf.compat.v2.metrics.Metric` ](/api_docs/python/tf/keras/metrics/Metric), [ `tf.metrics.Metric` ](/api_docs/python/tf/keras/metrics/Metric)

#### 用法：


```
 m = SomeMetric(...)
for input in ...:
  m.update_state(input)
print('Final result: ', m.result().numpy())
 
```

与tf.keras api一起使用：

```
 model = tf.keras.Sequential()
model.add(tf.keras.layers.Dense(64, activation='relu'))
model.add(tf.keras.layers.Dense(64, activation='relu'))
model.add(tf.keras.layers.Dense(10, activation='softmax'))

model.compile(optimizer=tf.compat.v1.train.RMSPropOptimizer(0.01),
              loss=tf.keras.losses.categorical_crossentropy,
              metrics=[tf.keras.metrics.CategoricalAccuracy()])

data = np.random.random((1000, 32))
labels = np.random.random((1000, 10))

dataset = tf.data.Dataset.from_tensor_slices((data, labels))
dataset = dataset.batch(32)
dataset = dataset.repeat()

model.fit(dataset, epochs=10, steps_per_epoch=30)
 
```

To be implemented by subclasses:

-  `__init__()` : All state variables should be created in this method bycalling  `self.add_weight()`  like:  `self.var = self.add_weight(...)` 
-  `update_state()` : Has all updates to the state variables like:self.var.assign_add(...).
-  `result()` : Computes and returns a value for the metricfrom the state variables.
子类实现示例：

```
 class BinaryTruePositives(tf.keras.metrics.Metric):

  def __init__(self, name='binary_true_positives', **kwargs):
    super(BinaryTruePositives, self).__init__(name=name, **kwargs)
    self.true_positives = self.add_weight(name='tp', initializer='zeros')

  def update_state(self, y_true, y_pred, sample_weight=None):
    y_true = tf.cast(y_true, tf.bool)
    y_pred = tf.cast(y_pred, tf.bool)

    values = tf.logical_and(tf.equal(y_true, True), tf.equal(y_pred, True))
    values = tf.cast(values, self.dtype)
    if sample_weight is not None:
      sample_weight = tf.cast(sample_weight, self.dtype)
      sample_weight = tf.broadcast_weights(sample_weight, values)
      values = tf.multiply(values, sample_weight)
    self.true_positives.assign_add(tf.reduce_sum(values))

  def result(self):
    return self.true_positives
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L135-L142)

```
 __init__(
    name=None,
    dtype=None,
    **kwargs
)
 
```

##  `__new__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L144-L160)

```
 @staticmethod
__new__(
    cls,
    *args,
    **kwargs
)
 
```

Create and return a new object.  See help(type) for accurate signature.

## 方法


###  `add_weight` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L244-L273)

```
 add_weight(
    name,
    shape=(),
    aggregation=tf.compat.v1.VariableAggregation.SUM,
    synchronization=tf.VariableSynchronization.ON_READ,
    initializer=None,
    dtype=None
)
 
```

添加状态变量。只供子类使用。

###  `reset_states` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L203-L209)

```
 reset_states()
 
```

重置所有度量状态变量。

This function is called between epochs/steps,when a metric is evaluated during training.

###  `result` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L234-L241)

```
 result()
 
```

计算并返回度量值张量。

Result computation is an idempotent operation that simply calculates themetric value using the state variables.

###  `update_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/metrics.py#L211-L232)

```
 update_state(
    *args,
    **kwargs
)
 
```

累积度量的统计信息。


**Note:**  This function is executed as a graph function in graph mode.This means:  a) Operations on the same resource are executed in textual order.     This should make it easier to do things like add the updated     value of a variable to another, for example.  b) You don't need to worry about collecting the update ops to execute.     All update ops added to the graph by this function will be executed.  As a result, code should generally work the same way with graph or  eager execution.
Please use [ `tf.config.experimental_run_functions_eagerly(True)` ](https://tensorflow.google.cn/api_docs/python/tf/config/experimental_run_functions_eagerly) to executethis function eagerly for debugging or profiling.

#### 参数：
- **`*args`** : * **`**kwargs`** : A mini-batch of inputs to the Metric.
