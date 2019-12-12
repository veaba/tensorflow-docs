Registers a flag whose value is a comma-separated list of strings.

```
 tf.compat.v1.flags.DEFINE_list(    name,    default,    help,    flag_values=_flagvalues.FLAGS,    **args) 
```

标志值由csv解析器解析。

#### 参数：
- **`name`** : str, the flag name.
- **`default`** : list|str|None, the default value of the flag.
- **`help`** : str, the help message.
- **`flag_values`** : FlagValues, the FlagValues instance with which the flag willbe registered. This should almost never need to be overridden.
- **`**args`** : Dictionary with extra keyword args that are passed to theFlag **init** .
