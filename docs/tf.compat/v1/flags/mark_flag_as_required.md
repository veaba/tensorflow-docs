Ensures that flag is not None during program execution.

```
 tf.compat.v1.flags.mark_flag_as_required(    flag_name,    flag_values=_flagvalues.FLAGS) 
```

Registers a flag validator, which will follow usual validator rules.Important note: validator will pass for any non-None value, such as False,0 (zero), '' (empty string) and so on.

It is recommended to call this method like this:

if **name**  == '**main** ':    flags.mark_flag_as_required('your_flag_name')    app.run()

Because validation happens at app.run() we want to ensure required-nessis enforced at that time. You generally do not want to force users who importyour code to have additional required flags for their own binaries or tests.

#### Args:
- **`flag_name`** : str, name of the flag
- **`flag_values`** : flags.FlagValues, optional FlagValues instance where the flagis defined.


#### Raises:
- **`AttributeError`** : Raised when flag_name is not registered as a valid flagname.
