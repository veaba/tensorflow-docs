Ensures that only one flag among flag_names is not None.



### Aliases:

- [ `tf.compat.v1.app.flags.mark_flags_as_mutual_exclusive` ](/api_docs/python/tf/compat/v1/flags/mark_flags_as_mutual_exclusive)



```
 tf.compat.v1.flags.mark_flags_as_mutual_exclusive(
    flag_names,
    required=False,
    flag_values=_flagvalues.FLAGS
)
 
```

Important note: This validator checks if flag values are None, and it does not
distinguish between default and explicit values. Therefore, this validator
does not make sense when applied to flags with default values other than None,
including other false values (e.g. False, 0, '', []). That includes multi
flags with a default value of [] instead of None.



#### Args:

- **`flag_names`** : [str], names of the flags.

- **`required`** : bool. If true, exactly one of the flags must have a value other
than None. Otherwise, at most one of the flags can have a value other
than None, and it is valid for all of the flags to be None.

- **`flag_values`** : flags.FlagValues, optional FlagValues instance where the flags
are defined.

