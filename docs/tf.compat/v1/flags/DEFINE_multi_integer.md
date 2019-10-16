
Registers a flag whose value can be a list of arbitrary integers.
### Aliases:
- `tf.compat.v1.app.flags.DEFINE_multi_integer`

```
 tf.compat.v1.flags.DEFINE_multi_integer(
    name,
    default,
    help,
    lower_bound=None,
    upper_bound=None,
    flag_values=_flagvalues.FLAGS,
    **args
)
```

Use the flag on the command line multiple times to place multiple integer values into the list. The 'default' may be a single integer (which will be converted into a single-element list) or a list of integers.
#### Args:
- `name`: str, the flag `name`.
- `default`: Union[Iterable[int], Text, None], the `default` value of the flag; see `DEFINE_multi`.
- `help`: str, the `help` message.
- `lower_bound`: int, min values of the flag.
- `upper_bound`: int, max values of the flag.
- `flag_values`: FlagValues, the FlagValues instance with which the flag will be registered. This should almost never need to be overridden.
