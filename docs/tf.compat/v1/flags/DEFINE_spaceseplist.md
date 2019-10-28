Registers a flag whose value is a whitespace-separated list of strings.
### Aliases:
- `tf.compat.v1.app.flags.DEFINE_spaceseplist`

```
 tf.compat.v1.flags.DEFINE_spaceseplist(
    name,
    default,
    help,
    comma_compat=False,
    flag_values=_flagvalues.FLAGS,
    **args
)
```
Any whitespace can be used as a separator.
#### Args:
- `name`: str, the flag `name`.
- `default`: list|str|None, the `default` value of the flag.
- `help`: str, the `help` message.
- `comma_compat`: bool - Whether to support comma as an additional separator. If false then only whitespace is supported. This is intended only for backwards compatibility with flags that used to be comma-separated.
- `flag_values`: FlagValues, the FlagValues instance with which the flag will be registered. This should almost never need to be overridden.
