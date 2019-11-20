Defines an alias flag for an existing one.

### Aliases:

  * [`tf.compat.v1.app.flags.DEFINE_alias`](/api_docs/python/tf/compat/v1/flags/DEFINE_alias)

    
    
    tf.compat.v1.flags.DEFINE_alias(
        name,
        original_name,
        flag_values=_flagvalues.FLAGS,
        module_name=None
    )
    

#### Args:

  * **`name`** : str, the flag name.
  * **`original_name`** : str, the original flag name.
  * **`flag_values`** : FlagValues, the FlagValues instance with which the flag will be registered. This should almost never need to be overridden.
  * **`module_name`** : A string, the name of the module that defines this flag.

#### Raises:

  * **`flags.FlagError`** : UnrecognizedFlagError: if the referenced flag doesn't exist. DuplicateFlagError: if the alias name has been used by some existing flag.

