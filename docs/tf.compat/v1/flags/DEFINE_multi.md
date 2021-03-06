注册一个通用的多重标记，用给定的解析器解析其参数。

```
 tf.compat.v1.flags.DEFINE_multi(
    parser,
    serializer,
    name,
    default,
    help,
    flag_values=_flagvalues.FLAGS,
    module_name=None,
    **args
)
 
```

Auxiliary function.  Normal users should NOT use it directly.

Developers who need to create their own 'Parser' classes for optionswhich can appear multiple times can call this module function toregister their flags.

#### 参数：
- **`parser`** : ArgumentParser, used to parse the flag arguments.
- **`serializer`** : ArgumentSerializer, the flag serializer instance.
- **`name`** : str, the flag name.
- **`default`** : Union[Iterable[T], Text, None], the default value of the flag.If the value is text, it will be parsed as if it was provided fromthe command line. If the value is a non-string iterable, it will beiterated over to create a shallow copy of the values. If it is None,it is left as-is.
- **`help`** : str, the help message.
- **`flag_values`** : FlagValues, the FlagValues instance with which the flag willbe registered. This should almost never need to be overridden.
- **`module_name`** : A string, the name of the Python module declaring this flag.If not provided, it will be computed using the stack trace of this call.
- **`**args`** : Dictionary with extra keyword args that are passed to theFlag **init** .
