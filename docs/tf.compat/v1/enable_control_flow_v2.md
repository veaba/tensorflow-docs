
Use control flow v2.

```
 tf.compat.v1.enable_control_flow_v2()
```
[tf.while_loop](https://www.tensorflow.org/api_docs/python/tf/while_loop)control flow v2 (cfv2) is an improved version of control flow in TensorFlow with support for higher order derivatives. Enabling cfv2 will change the graph/function representation of control flow, e.g.,  and tf.cond will generate functional While and If ops instead of low-level Switch, Merge etc. ops. Note: Importing and running graphs exported with old control flow will still be supported.


Calling tf.enable_control_flow_v2() lets you opt-in to this TensorFlow 2.0 feature.
