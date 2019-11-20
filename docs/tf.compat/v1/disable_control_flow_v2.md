[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/control_flow_v2_toggles.py#L48-L58)  
---  
  
Opts out of control flow v2.

    
    
    tf.compat.v1.disable_control_flow_v2()
    

**Note:** v2 control flow is always enabled inside of tf.function. Calling
this function has no effect in that case.

If your code needs tf.disable_control_flow_v2() to be called to work properly
please file a bug.

