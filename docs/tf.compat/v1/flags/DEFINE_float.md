
Registers a flag whose value must be a float.
### Aliases:
- `tf.compat.v1.app.flags.DEFINE_float`

```
 tf.compat.v1.flags.DEFINE_float(
    name,
    default,
    help,
    lower_bound=None,
    upper_bound=None,
    flag_values=_flagvalues.FLAGS,
    **args
)
```

If lower_bound or upper_bound are set, then this flag must be within the given range.
#### Args:
- `name`: str, the flag `name`.
- `default`: float|str|None, the `default` value of the flag.
- `help`: str, the `help` message.
- `lower_bound`: float, min value of the flag.
- `upper_bound`: float, max value of the flag.
- `flag_values`: FlagValues, the FlagValues instance with which the flag will be registered. This should almost never need to be overridden.
