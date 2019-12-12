设置当前线程的默认摘要步骤。

```
 tf.summary.experimental.set_step(step) 
```

For convenience, this function sets a default value for the  `step`  parameterused in summary-writing functions elsewhere in the API so that it need notbe explicitly passed in every such invocation. The value can be a constantor a variable, and can be retrieved via [ `tf.summary.experimental.get_step()` ](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step).


**Note:**  when using this with @tf.functions, the step value will be captured atthe time the function is traced, so changes to the step outside the functionwill not be reflected inside the function unless using a [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable) step.


#### 参数：
- **`step`** : An  `int64` -castable default step value, or None to unset.
