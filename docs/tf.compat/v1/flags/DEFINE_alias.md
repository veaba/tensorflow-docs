定义现有别名标志。

```
 tf.compat.v1.flags.DEFINE_alias(
    name,
    original_name,
    flag_values=_flagvalues.FLAGS,
    module_name=None
)
 
```

#### 参数：
- **`name`** : str, the flag name.
- **`original_name`** : str, the original flag name.
- **`flag_values`** : FlagValues, the FlagValues instance with which the flag willbe registered. This should almost never need to be overridden.
- **`module_name`** : A string, the name of the module that defines this flag.


#### 加薪：
- **`flags.FlagError`** :   UnrecognizedFlagError: if the referenced flag doesn't exist.DuplicateFlagError: if the alias name has been used by some existing flag.
