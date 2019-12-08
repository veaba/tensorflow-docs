Opts out of control flow v2.



```
 tf.compat.v1.disable_control_flow_v2()
 
```


<aside class="note">**Note:**  v2 control flow is always enabled inside of tf.function. Calling this
function has no effect in that case.</aside>
If your code needs tf.disable_control_flow_v2() to be called to work
properly please file a bug.

