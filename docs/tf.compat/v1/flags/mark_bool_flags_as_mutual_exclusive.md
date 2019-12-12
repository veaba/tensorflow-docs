Ensures that only one flag among flag_names is True.

```
 tf.compat.v1.flags.mark_bool_flags_as_mutual_exclusive(
    flag_names,
    required=False,
    flag_values=_flagvalues.FLAGS
)
 
```

#### 参数：
- **`flag_names`** : [str], names of the flags.
- **`required`** : bool. If true, exactly one flag must be True. Otherwise, at mostone flag can be True, and it is valid for all flags to be False.
- **`flag_values`** : flags.FlagValues, optional FlagValues instance where the flagsare defined.
