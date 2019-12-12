在“level”级别每“n”次记录一次“msg%args”。

```
 tf.compat.v1.logging.log_every_n(
    level,
    msg,
    n,
    *args
)
 
```

Logs the 1st call, (N+1)st call, (2N+1)st call,  etc.Not threadsafe.

#### 参数：
- **`level`** : The level at which to log.
- **`msg`** : The message to be logged.
- **`n`** : The number of times this should be called before it is logged.
- **`*args`** : The args to be substituted into the msg.
