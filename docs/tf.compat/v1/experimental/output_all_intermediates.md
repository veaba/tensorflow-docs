是否从功能控制流操作输出所有中间产物。

```
 tf.compat.v1.experimental.output_all_intermediates(state)
 
```

The "default" behavior to is to output all intermediates when using v2 controlflow inside Keras models in graph mode (possibly inside Estimators). This isneeded to support taking gradients of v2 control flow. In graph mode, Kerascan sometimes freeze the forward graph before the gradient computation whichdoes not work for v2 control flow since it requires updating the forward opsto output the needed intermediates. We work around this by proactivelyoutputting the needed intermediates when building the forward pass itself.Ideally any such extra tensors should be pruned out at runtime. However, iffor any reason this doesn't work for you or if you have an infernce-only modelyou can turn this behavior off using[ `tf.compat.v1.experimental.output_all_intermediates(False)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/experimental/output_all_intermediates).

If with the default behavior you are still seeing errors of the form"Connecting to invalid output X of source node Y which has Z outputs" trysetting [ `tf.compat.v1.experimental.output_all_intermediates(True)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/experimental/output_all_intermediates) andplease file an issue at https://github.com/tensorflow/tensorflow/issues.

#### 参数：
- **`state`** : True, False or None. None restores the default behavior.
