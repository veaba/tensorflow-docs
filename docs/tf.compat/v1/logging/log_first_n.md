仅在“level”级别记录“msg%args”前“n”次。

```
 tf.compat.v1.logging.log_first_n(
    level,
    msg,
    n,
    *args
)
 
```

不是线程安全的。

#### 参数：
- **`level`** : The level at which to log.
- **`msg`** : The message to be logged.
- **`n`** : The number of times this should be called before it is logged.
- **`*args`** : The args to be substituted into the msg.
