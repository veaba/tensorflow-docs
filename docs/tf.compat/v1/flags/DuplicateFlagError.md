

## Class  `DuplicateFlagError` 
Raised if there is a flag naming conflict.

Inherits From: [ `Error` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/Error)



### Aliases:

- Class [ `tf.compat.v1.app.flags.DuplicateFlagError` ](/api_docs/python/tf/compat/v1/flags/DuplicateFlagError)



## Methods


###  `from_flag` 

<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">@classmethod
from_flag(
    cls,
    flagname,
    flag_values,
    other_flag_values=None
)
</code></pre></devsite-code>
Creates a DuplicateFlagError by providing flag name and values.



#### Args:

- **`flagname`** : str, the name of the flag being redefined.

- **`flag_values`** : FlagValues, the FlagValues instance containing the first
definition of flagname.

- **`other_flag_values`** : FlagValues, if it is not None, it should be the
FlagValues object where the second definition of flagname occurs.
If it is None, we assume that we're being called when attempting
to create the flag a second time, and we use the module calling
this one as the source of the second definition.



#### Returns:
An instance of DuplicateFlagError.

