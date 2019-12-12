返回一个op以检查变量是否已初始化。

```
 tf.compat.v1.assert_variables_initialized(var_list=None)
 
```

注意：This function is obsolete and will be removed in 6 months.  Pleasechange your implementation to use  `report_uninitialized_variables()` .

When run, the returned Op will raise the exception  `FailedPreconditionError` if any of the variables has not yet been initialized.


**Note:**  This function is implemented by trying to fetch the values of thevariables. If one of the variables is not initialized a message may belogged by the C++ runtime. This is expected.


#### 参数：
- **`var_list`** : List of  `Variable`  objects to check. Defaults to the value of `global_variables().` 


#### 返回：
An Op, or None if there are no variables.

**NOTE**  The output of this function should be used.  If it is not, a warning will be logged.  To mark the output as used, call its .mark_used() method.

