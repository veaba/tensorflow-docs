Use control flow v2.

```
 tf.compat.v1.enable_control_flow_v2()
 
```

control flow v2 (cfv2) is an improved version of control flow in TensorFlowwith support for higher order derivatives. Enabling cfv2 will change thegraph/function representation of control flow, e.g., [ `tf.while_loop` ](https://tensorflow.google.cn/api_docs/python/tf/while_loop) and[ `tf.cond` ](https://tensorflow.google.cn/api_docs/python/tf/cond) will generate functional  `While`  and  `If`  ops instead of low-level `Switch` ,  `Merge`  etc. ops. Note: Importing and running graphs exportedwith old control flow will still be supported.

Calling tf.enable_control_flow_v2() lets you opt-in to this TensorFlow 2.0feature.


**Note:**  v2 control flow is always enabled inside of tf.function. Calling thisfunction is not required.
