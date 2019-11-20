[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/platform/tf_logging.py#L218-L232)  
---  
  
Log 'msg % args' at level 'level' once per 'n' times.

    
    
    tf.compat.v1.logging.log_every_n(
        level,
        msg,
        n,
        *args
    )
    

Logs the 1st call, (N+1)st call, (2N+1)st call, etc. Not threadsafe.

#### Args:

  * **`level`** : The level at which to log.
  * **`msg`** : The message to be logged.
  * **`n`** : The number of times this should be called before it is logged.
  * **`*args`** : The args to be substituted into the msg.

