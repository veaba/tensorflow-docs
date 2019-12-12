确保在程序执行期间标志不是none。

```
 tf.compat.v1.flags.mark_flag_as_required(    flag_name,    flag_values=_flagvalues.FLAGS) 
```

Registers a flag validator, which will follow usual validator rules.Important 注意：validator will pass for any non-None value, such as False,0 (zero), '' (empty string) and so on.

建议这样调用此方法：

if **name**  == '**main** ':    flags.mark_flag_as_required('your_flag_name')    app.run()

Because validation happens at app.run() we want to ensure required-nessis enforced at that time. You generally do not want to force users who importyour code to have additional required flags for their own binaries or tests.

#### 参数：
- **`flag_name`** : str, name of the flag
- **`flag_values`** : flags.FlagValues, optional FlagValues instance where the flagis defined.


#### 加薪：
- **`AttributeError`** : Raised when flag_name is not registered as a valid flagname.
