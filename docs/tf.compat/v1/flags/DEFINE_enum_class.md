Registers a flag whose value can be the name of enum members.
### Aliases:
- `tf.compat.v1.app.flags.DEFINE_enum_class`

```
 tf.compat.v1.flags.DEFINE_enum_class(
    name,
    default,
    enum_class,
    help,
    flag_values=_flagvalues.FLAGS,
    module_name=None,
    **args
)
```
#### Args:
- `name`: str, the flag `name`.
- `default`: Enum|str|None, the `default` value of the flag.
- `enum_class`: class, the Enum class with all the possible values for the flag.
- `help`: str, the `help` message.
- `flag_values`: FlagValues, the FlagValues instance with which the flag will be registered. This should almost never need to be overridden.
- `module_name`: str, the name of the Python module declaring this flag. If not provided, it will be computed using the stack trace of this call.
