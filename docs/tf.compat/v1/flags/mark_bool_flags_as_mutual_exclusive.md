Ensures that only one flag among flag_names is True.



### Aliases:

- [ `tf.compat.v1.app.flags.mark_bool_flags_as_mutual_exclusive` ](/api_docs/python/tf/compat/v1/flags/mark_bool_flags_as_mutual_exclusive)



```
 tf.compat.v1.flags.mark_bool_flags_as_mutual_exclusive(
    flag_names,
    required=False,
    flag_values=_flagvalues.FLAGS
)
 
```



#### Args:

- **`flag_names`** : [str], names of the flags.

- **`required`** : bool. If true, exactly one flag must be True. Otherwise, at most
one flag can be True, and it is valid for all flags to be False.

- **`flag_values`** : flags.FlagValues, optional FlagValues instance where the flags
are defined.

