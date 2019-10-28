Registers a boolean flag.
### Aliases:
- `tf.compat.v1.app.flags.DEFINE_bool`
- `tf.compat.v1.app.flags.DEFINE_boolean`
- `tf.compat.v1.flags.DEFINE_boolean`

```
 tf.compat.v1.flags.DEFINE_bool(
    name,
    default,
    help,
    flag_values=_flagvalues.FLAGS,
    module_name=None,
    **args
)
```
Such a boolean flag does not take an argument. If a user wants to specify a false value explicitly, the long option beginning with 'no' must be used: i.e. --noflag
This flag will have a value of None, True or False. None is possible if default=None and the user does not specify the flag on the command line.
#### Args:
- `name`: str, the flag `name`.
- `default`: bool|str|None, the `default` value of the flag.
- `help`: str, the `help` message.
- `flag_values`: FlagValues, the FlagValues instance with which the flag will be registered. This should almost never need to be overridden.
- `module_name`: str, the name of the Python module declaring this flag. If not provided, it will be computed using the stack trace of this call.
