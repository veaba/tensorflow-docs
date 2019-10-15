
Registers a flag whose value can be any string from enum_values.
### Aliases:
- `tf.compat.v1.app.flags.DEFINE_enum`

```
 tf.compat.v1.flags.DEFINE_enum(
    name,
    default,
    enum_values,
    help,
    flag_values=_flagvalues.FLAGS,
    module_name=None,
    **args
)
```

Instead of a string enum, prefer DEFINE_enum_class, which allows defining enums from an enum.Enum class.
#### Args:
- `name`: str, the flag `name`.
- `default`: str|None, the `default` value of the flag.
- `enum_values`: [str], a non-empty list of strings with the possible values for the flag.
- `help`: str, the `help` message.
- `flag_values`: FlagValues, the FlagValues instance with which the flag will be registered. This should almost never need to be overridden.
- `module_name`: str, the `name` of the Python module declaring this flag. If not provided, it will be computed using the stack trace of this call.
