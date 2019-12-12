向多个标志添加约束。

```
 tf.compat.v1.flags.register_multi_flags_validator(
    flag_names,
    multi_flags_checker,
    message='Flags validation failed',
    flag_values=_flagvalues.FLAGS
)
 
```

The constraint is validated when flags are initially parsed, and after eachchange of the corresponding flag's value.

#### 参数：
- **`flag_names`** : [str], a list of the flag names to be checked.
- **`multi_flags_checker`** : callable, a function to validate the flag.input - dict, with keys() being flag_names, and value for each key    being the value of the corresponding flag (string, boolean, etc).output - bool, True if validator constraint is satisfied.    If constraint is not satisfied, it should either return False or    raise flags.ValidationError.
- **`message`** : str, error text to be shown to the user if checker returns False.If checker raises flags.ValidationError, message from the raisederror will be shown.
- **`flag_values`** : flags.FlagValues, optional FlagValues instance to validateagainst.


#### 加薪：
- **`AttributeError`** : Raised when a flag is not registered as a valid flag name.
