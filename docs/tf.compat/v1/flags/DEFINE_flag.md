
Registers a 'Flag' object with a 'FlagValues' object.
### Aliases:
- `tf.compat.v1.app.flags.DEFINE_flag`

```
 tf.compat.v1.flags.DEFINE_flag(
    flag,
    flag_values=_flagvalues.FLAGS,
    module_name=None
)
```

By default, the global FLAGS 'FlagValue' object is used.

Typical users will use one of the more specialized DEFINE_xxx functions, such as DEFINE_string or DEFINE_integer. But developers who need to create Flag objects themselves should use this function to register their flags.
#### Args:
- `flag`: Flag, a `flag` that is key to the module.
- `flag`_values: FlagValues, the FlagValues instance with which the `flag` will be registered. This should almost never need to be overridden.
- `module_name`: str, the name of the Python module declaring this `flag`. If not provided, it will be computed using the stack trace of this call.
