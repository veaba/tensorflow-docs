Opts out of control flow v2.

```
 tf.compat.v1.disable_control_flow_v2()
 
```


**Note:**  v2 control flow is always enabled inside of tf.function. Calling thisfunction has no effect in that case.
If your code needs tf.disable_control_flow_v2() to be called to workproperly please file a bug.

