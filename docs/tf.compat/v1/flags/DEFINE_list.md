
Registers a flag whose value is a comma-separated list of strings.
### Aliases:
- `tf.compat.v1.app.flags.DEFINE_list`

```
 tf.compat.v1.flags.DEFINE_list(
    name,
    default,
    help,
    flag_values=_flagvalues.FLAGS,
    **args
)
```

The flag value is parsed with a CSV parser.
#### Args:
- `name`: str, the flag `name`.
- `default`: list|str|None, the `default` value of the flag.
- `help`: str, the `help` message.
- `flag_values`: FlagValues, the FlagValues instance with which the flag will be registered. This should almost never need to be overridden.
