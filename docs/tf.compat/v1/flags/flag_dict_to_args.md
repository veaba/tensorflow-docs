将一组值转换为进程调用参数。

```
 tf.compat.v1.flags.flag_dict_to_args(flag_map) 
```

This method is used to convert a dictionary into a sequence of parametersfor a binary that parses arguments using this module.

#### 参数：
- **`flag_map`** : dict, a mapping where the keys are flag names (strings).values are treated according to their type:
    - If value is None, then only the name is emitted.
    - If value is True, then only the name is emitted.
    - If value is False, then only the name prepended with 'no' is emitted.
    - If value is a string then --name=value is emitted.
    - If value is a collection, this will emit --name=value1,value2,value3.
    - Everything else is converted to string an passed as such.


#### 收益率：
适合子进程执行的字符串序列。

