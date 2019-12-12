

## Class  `Options` 
表示tf.data.dataset的选项。

**别名** : [ `tf.compat.v1.data.Options` ](/api_docs/python/tf/data/Options), [ `tf.compat.v2.data.Options` ](/api_docs/python/tf/data/Options)

### 在教程中使用：
- [Multi-worker training with Keras](https://tensorflow.google.cn/tutorials/distribute/multi_worker_with_keras)
An  `Options`  object can be, for instance, used to control which staticoptimizations to apply or whether to use performance modeling to dynamicallytune the parallelism of operations such as [ `tf.data.Dataset.map` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#map) or[ `tf.data.Dataset.interleave` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#interleave).

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L33-L35)

```
 __init__()
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 属性


###  `experimental_deterministic` 
Whether the outputs need to be produced in deterministic order. If None, defaults to True.

###  `experimental_distribute` 
The distribution strategy options associated with the dataset. See [ `tf.data.experimental.DistributeOptions` ](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/DistributeOptions) for more details.

###  `experimental_optimization` 
The optimization options associated with the dataset. See [ `tf.data.experimental.OptimizationOptions` ](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/OptimizationOptions) for more details.

###  `experimental_slack` 
Whether to introduce 'slack' in the last  `prefetch`  of the input pipeline, if it exists. This may reduce CPU contention with accelerator host-side activity at the start of a step. The slack frequency is determined by the number of devices attached to this input pipeline. If None, defaults to False.

###  `experimental_stats` 
The statistics options associated with the dataset. See [ `tf.data.experimental.StatsOptions` ](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/StatsOptions) for more details.

###  `experimental_threading` 
The threading options associated with the dataset. See [ `tf.data.experimental.ThreadingOptions` ](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/ThreadingOptions) for more details.

## 方法


###  `__eq__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L37-L43)

```
 __eq__(other)
 
```

Return self==value.

###  `__ne__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L45-L49)

```
 __ne__(other)
 
```

Return self!=value.

###  `merge` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L2280-L2296)

```
 merge(options)
 
```

Merges itself with the given [ `tf.data.Options` ](https://tensorflow.google.cn/api_docs/python/tf/data/Options).

The given [ `tf.data.Options` ](https://tensorflow.google.cn/api_docs/python/tf/data/Options) can be merged as long as there does not exist anattribute that is set to different values in  `self`  and  `options` .

#### 参数：
- **`options`** : a [ `tf.data.Options` ](https://tensorflow.google.cn/api_docs/python/tf/data/Options) to merge with


#### 加薪：
- **`ValueError`** : if the given [ `tf.data.Options` ](https://tensorflow.google.cn/api_docs/python/tf/data/Options) cannot be merged


#### 返回：
New [ `tf.data.Options()` ](https://tensorflow.google.cn/api_docs/python/tf/data/Options) object which is the result of merging self withthe input [ `tf.data.Options` ](https://tensorflow.google.cn/api_docs/python/tf/data/Options).

