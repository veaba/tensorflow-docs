Registers a flag whose value can be a list strings from enum_values.

```
 tf.compat.v1.flags.DEFINE_multi_enum(    name,    default,    enum_values,    help,    flag_values=_flagvalues.FLAGS,    case_sensitive=True,    **args) 
```

Use the flag on the command line multiple times to place multipleenum values into the list.  The 'default' may be a single string(which will be converted into a single-element list) or a list ofstrings.

#### Args:
- **`name`** : str, the flag name.
- **`default`** : Union[Iterable[Text], Text, None], the default value of the flag;see  `DEFINE_multi` .
- **`enum_values`** : [str], a non-empty list of strings with the possible values forthe flag.
- **`help`** : str, the help message.
- **`flag_values`** : FlagValues, the FlagValues instance with which the flag willbe registered. This should almost never need to be overridden.
- **`case_sensitive`** : Whether or not the enum is to be case-sensitive.
- **`**args`** : Dictionary with extra keyword args that are passed to theFlag **init** .
