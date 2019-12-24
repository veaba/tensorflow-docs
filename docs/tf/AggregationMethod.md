## Class  `AggregationMethod` 
列出用于组合渐变的聚合方法的类。

**别名** : [ `tf.compat.v1.AggregationMethod` ](/api_docs/python/tf/AggregationMethod), [ `tf.compat.v2.AggregationMethod` ](/api_docs/python/tf/AggregationMethod)

Computing partial derivatives can require aggregating gradientcontributions. This class lists the various methods that canbe used to combine gradients in the graph.

The following aggregation methods are part of the stable API foraggregating gradients:

-  `ADD_N` : All of the gradient terms are summed as part of oneoperation using the "AddN" op (see [ `tf.add_n` ](https://tensorflow.google.cn/api_docs/python/tf/math/add_n)). Thismethod has the property that all gradients must be ready andbuffered separately in memory before any aggregation is performed.
-  `DEFAULT` : The system-chosen default aggregation method.
The following aggregation methods are experimental and may notbe supported in future releases:

-  `EXPERIMENTAL_TREE` : Gradient terms are summed in pairs usingusing the "AddN" op. This method of summing gradients may reduceperformance, but it can improve memory utilization because thegradients can be released earlier.


-  `EXPERIMENTAL_ACCUMULATE_N` : Gradient terms are summed using the"AccumulateN" op (see  `tf.accumulate_n` ), which accumulates theoverall sum in a single buffer that is shared across threads.This method of summing gradients can result in a lower memory footprintand lower latency at the expense of higher CPU/GPU utilization.For gradients of types that "AccumulateN" does not support, thissummation method falls back on the behavior of  `EXPERIMENTAL_TREE` 


## Class 成员
-  `ADD_N = 0`  
-  `DEFAULT = 0`  
-  `EXPERIMENTAL_ACCUMULATE_N = 2`  
-  `EXPERIMENTAL_TREE = 1`  
