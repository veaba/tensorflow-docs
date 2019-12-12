设置签名详细级别。

**别名** : [ `tf.compat.v1.autograph.set_verbosity` ](/api_docs/python/tf/autograph/set_verbosity), [ `tf.compat.v2.autograph.set_verbosity` ](/api_docs/python/tf/autograph/set_verbosity)

```
 tf.autograph.set_verbosity(
    level,
    alsologtostdout=False
)
 
```

*Debug logging in AutoGraph*

More verbose logging is useful to enable when filing bug reports or doingmore in-depth debugging.

有两种方法可以控制日志记录的详细程度：

- The  `set_verbosity`  function


- The  `AUTOGRAPH_VERBOSITY`  environment variable


 `set_verbosity`  takes precedence over the environment variable.

#### 例如：


```
 import os
import tensorflow as tf

os.environ['AUTOGRAPH_VERBOSITY'] = 5
# Verbosity is now 5

tf.autograph.set_verbosity(0)
# Verbosity is now 0

os.environ['AUTOGRAPH_VERBOSITY'] = 1
# No effect, because set_verbosity was already called.
 
```

Logs entries are output to [absl](https://abseil.io)'s [default output](https://abseil.io/docs/python/guides/logging),with  `INFO`  level.Logs can be mirrored to stdout by using the  `alsologtostdout`  argument.Mirroring is enabled by default when Python runs in interactive mode.

#### 参数：
- **`level`** : int, the verbosity level; larger values specify increased verbosity;0 means no logging. When reporting bugs, it is recommended to set thisvalue to a larger number, like 10.
- **`alsologtostdout`** : bool, whether to also output log messages to  `sys.stdout` .
