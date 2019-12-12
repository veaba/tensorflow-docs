将一个标志声明为当前模块的键。

```
 tf.compat.v1.flags.declare_key_flag(    flag_name,    flag_values=_flagvalues.FLAGS) 
```

Key flags are flags that are deemed really important for a module.They are important when listing help messages; e.g., if the--helpshort command-line flag is used, then only the key flags of themain module are listed (instead of all flags, as in the case of--helpfull).

#### 示例用法：
flags.declare_key_flag('flag_1')

#### 参数：
- **`flag_name`** : str, the name of an already declared flag.(Redeclaring flags as key, including flags implicitly keybecause they were declared in this module, is a no-op.)
- **`flag_values`** : FlagValues, the FlagValues instance in which the flag willbe declared as a key flag. This should almost never need to beoverridden.


#### 加薪：
- **`ValueError`** : Raised if flag_name not defined as a Python flag.
