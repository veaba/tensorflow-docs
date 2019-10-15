
Registers a flag whose value can be a list strings from enum_values.
### Aliases:
- `tf.compat.v1.app.flags.DEFINE_multi_enum`

```
 tf.compat.v1.flags.DEFINE_multi_enum(
    name,
    default,
    enum_values,
    help,
    flag_values=_flagvalues.FLAGS,
    case_sensitive=True,
    **args
)
```

Use the flag on the command line multiple times to place multiple enum values into the list. The 'default' may be a single string (which will be converted into a single-element list) or a list of strings.
#### Args:
- `name`: str, the flag `name`.
- `default`: Union[Iterable[Text], Text, None], the `default` value of the flag; see `DEFINE_multi`.
- `enum_values`: [str], a non-empty list of strings with the possible values for the flag.
- `help`: str, the `help` message.
- `flag_values`: FlagValues, the FlagValues instance with which the flag will be registered. This should almost never need to be overridden.
- `case_sensitive`: Whether or not the enum is to be case-sensitive.
