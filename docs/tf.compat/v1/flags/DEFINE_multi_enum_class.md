Registers a flag whose value can be a list of enum members.

```
 tf.compat.v1.flags.DEFINE_multi_enum_class(    name,    default,    enum_class,    help,    flag_values=_flagvalues.FLAGS,    module_name=None,    **args) 
```

Use the flag on the command line multiple times to place multipleenum values into the list.

#### 参数：
- **`name`** : str, the flag name.
- **`default`** : Union[Iterable[Enum], Iterable[Text], Enum, Text, None], thedefault value of the flag; see `DEFINE_multi` ; only differences are documented here. If the value isa single Enum, it is treated as a single-item list of that Enum value.If it is an iterable, text values within the iterable will be convertedto the equivalent Enum objects.
- **`enum_class`** : class, the Enum class with all the possible values for the flag.help: str, the help message.
- **`flag_values`** : FlagValues, the FlagValues instance with which the flag will beregistered. This should almost never need to be overridden.
- **`module_name`** : A string, the name of the Python module declaring this flag. Ifnot provided, it will be computed using the stack trace of this call.
- **`**args`** : Dictionary with extra keyword args that are passed to the Flag**init** .
