A function decorator for defining a multi-flag validator.

```
 tf.compat.v1.flags.multi_flags_validator(
    flag_names,
    message='Flag validation failed',
    flag_values=_flagvalues.FLAGS
)
 
```

Registers the decorated function as a validator for flag_names, e.g.

@flags.multi_flags_validator(['foo', 'bar'])def _CheckFooBar(flags_dict):  ...

See register_multi_flags_validator() for the specification of checkerfunction.

#### 参数：
- **`flag_names`** : [str], a list of the flag names to be checked.
- **`message`** : str, error text to be shown to the user if checker returns False.If checker raises flags.ValidationError, message from the raisederror will be shown.
- **`flag_values`** : flags.FlagValues, optional FlagValues instance to validateagainst.


#### 返回：
将其函数参数注册为验证器的函数装饰器。

#### 加薪：
- **`AttributeError`** : Raised when a flag is not registered as a valid flag name.
