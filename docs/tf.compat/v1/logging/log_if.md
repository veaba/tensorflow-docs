[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/platform/tf_logging.py#L251-L255)  
---  
  
Log 'msg % args' at level 'level' only if condition is fulfilled.

    
    
    tf.compat.v1.logging.log_if(
        level,
        msg,
        condition,
        *args
    )
    

