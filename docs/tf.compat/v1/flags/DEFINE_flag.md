用“flagValues”对象注册“flag”对象。

```
 tf.compat.v1.flags.DEFINE_flag(
    flag,
    flag_values=_flagvalues.FLAGS,
    module_name=None
)
 
```

By default, the global FLAGS 'FlagValue' object is used.

Typical users will use one of the more specialized DEFINE_xxxfunctions, such as DEFINE_string or DEFINE_integer.  But developerswho need to create Flag objects themselves should use this functionto register their flags.

#### 参数：
- **`flag`** : Flag, a flag that is key to the module.
- **`flag_values`** : FlagValues, the FlagValues instance with which the flag willbe registered. This should almost never need to be overridden.
- **`module_name`** : str, the name of the Python module declaring this flag.If not provided, it will be computed using the stack trace of this call.
