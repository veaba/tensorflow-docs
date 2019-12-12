确保在程序执行期间标志不是“无”。

```
 tf.compat.v1.flags.mark_flags_as_required(    flag_names,    flag_values=_flagvalues.FLAGS) 
```

#### 推荐用法：
if **name**  == '**main** ':  flags.mark_flags_as_required(['flag1', 'flag2', 'flag3'])  app.run()

#### 参数：
- **`flag_names`** : Sequence[str], names of the flags.
- **`flag_values`** : flags.FlagValues, optional FlagValues instance where the flagsare defined.


#### 加薪：
- **`AttributeError`** : If any of flag name has not already been defined as a flag.
