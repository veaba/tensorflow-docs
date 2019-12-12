Log 'msg % args' at level 'level' only first 'n' times.

```
 tf.compat.v1.logging.log_first_n(
    level,
    msg,
    n,
    *args
)
 
```

Not threadsafe.

#### Args:
- **`level`** : The level at which to log.
- **`msg`** : The message to be logged.
- **`n`** : The number of times this should be called before it is logged.
- **`*args`** : The args to be substituted into the msg.
