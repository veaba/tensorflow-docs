Ensures that flags are not None during program execution.

```
 tf.compat.v1.flags.mark_flags_as_required(    flag_names,    flag_values=_flagvalues.FLAGS) 
```

#### Recommended usage:
if **name**  == '**main** ':  flags.mark_flags_as_required(['flag1', 'flag2', 'flag3'])  app.run()

#### Args:
- **`flag_names`** : Sequence[str], names of the flags.
- **`flag_values`** : flags.FlagValues, optional FlagValues instance where the flagsare defined.


#### Raises:
- **`AttributeError`** : If any of flag name has not already been defined as a flag.
