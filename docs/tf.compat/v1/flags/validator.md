用于定义标志验证器的函数装饰器。

```
 tf.compat.v1.flags.validator(    flag_name,    message='Flag validation failed',    flag_values=_flagvalues.FLAGS) 
```

Registers the decorated function as a validator for flag_name, e.g.

@flags.validator('foo')def _CheckFoo(foo):  ...

See register_validator() for the specification of checker function.

#### 参数：
- **`flag_name`** : str, name of the flag to be checked.
- **`message`** : str, error text to be shown to the user if checker returns False.If checker raises flags.ValidationError, message from the raisederror will be shown.
- **`flag_values`** : flags.FlagValues, optional FlagValues instance to validateagainst.


#### 返回：
将其函数参数注册为验证器的函数装饰器。

#### 加薪：
- **`AttributeError`** : Raised when flag_name is not registered as a valid flagname.
