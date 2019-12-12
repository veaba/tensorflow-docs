Declares one flag as key to the current module.

```
 tf.compat.v1.flags.declare_key_flag(    flag_name,    flag_values=_flagvalues.FLAGS) 
```

Key flags are flags that are deemed really important for a module.They are important when listing help messages; e.g., if the--helpshort command-line flag is used, then only the key flags of themain module are listed (instead of all flags, as in the case of--helpfull).

#### Sample usage:
flags.declare_key_flag('flag_1')

#### Args:
- **`flag_name`** : str, the name of an already declared flag.(Redeclaring flags as key, including flags implicitly keybecause they were declared in this module, is a no-op.)
- **`flag_values`** : FlagValues, the FlagValues instance in which the flag willbe declared as a key flag. This should almost never need to beoverridden.


#### Raises:
- **`ValueError`** : Raised if flag_name not defined as a Python flag.
