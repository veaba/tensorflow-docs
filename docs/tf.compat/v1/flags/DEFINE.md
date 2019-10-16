
Registers a generic Flag object.
### Aliases:
- `tf.compat.v1.app.flags.DEFINE`

```
 tf.compat.v1.flags.DEFINE(
    parser,
    name,
    default,
    help,
    flag_values=_flagvalues.FLAGS,
    serializer=None,
    module_name=None,
    **args
)
```

NOTE: in the docstrings of all DEFINE* functions, "registers" is short for "creates a new flag and registers it".

Auxiliary function: clients should use the specialized DEFINE_ function instead.
#### Args:
- `parser`: ArgumentParser, used to parse the flag arguments.
- `name`: str, the flag `name`.
- `default`: The `default` value of the flag.
- `help`: str, the `help` message.
- `flag_values`: FlagValues, the FlagValues instance with which the flag will be registered. This should almost never need to be overridden.
- `serializer`: ArgumentSerializer, the flag `serializer` instance.
- `module_name`: str, the `name` of the Python module declaring this flag. If not provided, it will be computed using the stack trace of this call.
