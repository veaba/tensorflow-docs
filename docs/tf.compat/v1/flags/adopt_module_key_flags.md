Declares that all flags key to a module are key to the current module.

```
 tf.compat.v1.flags.adopt_module_key_flags(
    module,
    flag_values=_flagvalues.FLAGS
)
 
```

#### Args:
- **`module`** : module, the module object from which all key flags will be declaredas key flags to the current module.
- **`flag_values`** : FlagValues, the FlagValues instance in which the flags willbe declared as key flags. This should almost never need to beoverridden.


#### Raises:
- **`Error`** : Raised when given an argument that is a module name (a string),instead of a module object.
