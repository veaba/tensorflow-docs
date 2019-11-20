Registers a flag whose value can be a list of arbitrary floats.

### Aliases:

  * [`tf.compat.v1.app.flags.DEFINE_multi_float`](/api_docs/python/tf/compat/v1/flags/DEFINE_multi_float)

    
    
    tf.compat.v1.flags.DEFINE_multi_float(
        name,
        default,
        help,
        lower_bound=None,
        upper_bound=None,
        flag_values=_flagvalues.FLAGS,
        **args
    )
    

Use the flag on the command line multiple times to place multiple float values
into the list. The 'default' may be a single float (which will be converted
into a single-element list) or a list of floats.

#### Args:

  * **`name`** : str, the flag name.
  * **`default`** : Union[Iterable[float], Text, None], the default value of the flag; see `DEFINE_multi`.
  * **`help`** : str, the help message.
  * **`lower_bound`** : float, min values of the flag.
  * **`upper_bound`** : float, max values of the flag.
  * **`flag_values`** : FlagValues, the FlagValues instance with which the flag will be registered. This should almost never need to be overridden.
  * **`**args`** : Dictionary with extra keyword args that are passed to the Flag **init**.

