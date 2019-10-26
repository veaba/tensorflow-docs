Registers a flag whose value can be a list of any strings.
### Aliases:
- tf.compat.v1.app.flags.DEFINE_multi_string

```
 tf.compat.v1.flags.DEFINE_multi_string(
    name,
    default,
    help,
    flag_values=_flagvalues.FLAGS,
    **args
)
```
Use the flag on the command line multiple times to place multiple string values into the list. The 'default' may be a single string (which will be converted into a single-element list) or a list of strings.
#### Args:
- name: str, the flag name.
- default: Union[Iterable[Text], Text, None], the default value of the flag; see DEFINE_multi.
- help: str, the help message.
- flag_values: FlagValues, the FlagValues instance with which the flag will be registered. This should almost never need to be overridden.
- **args: Dictionary with extra keyword args that are passed to the Flag init.
