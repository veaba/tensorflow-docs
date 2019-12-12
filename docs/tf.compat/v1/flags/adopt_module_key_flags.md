声明模块的所有标志键都是当前模块的键。

```
 tf.compat.v1.flags.adopt_module_key_flags(
    module,
    flag_values=_flagvalues.FLAGS
)
 
```

#### 参数：
- **`module`** : module, the module object from which all key flags will be declaredas key flags to the current module.
- **`flag_values`** : FlagValues, the FlagValues instance in which the flags willbe declared as key flags. This should almost never need to beoverridden.


#### 加薪：
- **`Error`** : Raised when given an argument that is a module name (a string),instead of a module object.
