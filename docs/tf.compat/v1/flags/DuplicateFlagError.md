## Class DuplicateFlagError
Raised if there is a flag naming conflict.
[Error](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/Error)Inherits From: 

### Aliases:
- Class tf.compat.v1.app.flags.DuplicateFlagError
## Methods
### from_flag

```
 @classmethod
from_flag(
    cls,
    flagname,
    flag_values,
    other_flag_values=None
)
```
Creates a DuplicateFlagError by providing flag name and values.
#### Args:
- flagname: str, the name of the flag being redefined.
- flag_values: FlagValues, the FlagValues instance containing the first definition of flagname.
- other_flag_values: FlagValues, if it is not None, it should be the FlagValues object where the second definition of flagname occurs. If it is None, we assume that we're being called when attempting to create the flag a second time, and we use the module calling this one as the source of the second definition.
#### Returns:
An instance of DuplicateFlagError.
