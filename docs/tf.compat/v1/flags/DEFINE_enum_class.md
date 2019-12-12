注册一个标志，其值可以是枚举成员的名称。

```
 tf.compat.v1.flags.DEFINE_enum_class(    name,    default,    enum_class,    help,    flag_values=_flagvalues.FLAGS,    module_name=None,    **args) 
```

#### 参数：
- **`name`** : str, the flag name.
- **`default`** : Enum|str|None, the default value of the flag.
- **`enum_class`** : class, the Enum class with all the possible values for the flag.
- **`help`** : str, the help message.
- **`flag_values`** : FlagValues, the FlagValues instance with which the flag willbe registered. This should almost never need to be overridden.
- **`module_name`** : str, the name of the Python module declaring this flag.If not provided, it will be computed using the stack trace of this call.
- **`**args`** : dict, the extra keyword args that are passed to Flag **init** .
