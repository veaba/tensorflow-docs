注册一个标志，其值可以是任何字符串的列表。

```
 tf.compat.v1.flags.DEFINE_multi_string(    name,    default,    help,    flag_values=_flagvalues.FLAGS,    **args) 
```

Use the flag on the command line multiple times to place multiplestring values into the list.  The 'default' may be a single string(which will be converted into a single-element list) or a list ofstrings.

#### 参数：
- **`name`** : str, the flag name.
- **`default`** : Union[Iterable[Text], Text, None], the default value of the flag;see  `DEFINE_multi` .
- **`help`** : str, the help message.
- **`flag_values`** : FlagValues, the FlagValues instance with which the flag willbe registered. This should almost never need to be overridden.
- **`**args`** : Dictionary with extra keyword args that are passed to theFlag **init** .
