测试变量是否已初始化。

```
 tf.compat.v1.is_variable_initialized(variable)
 
```

#### 参数：
- **`variable`** : A  `Variable` .


#### 返回：
Returns a scalar boolean Tensor,  `True`  if the variable has beeninitialized,  `False`  otherwise.

**NOTE**  The output of this function should be used.  If it is not, a warning will be logged.  To mark the output as used, call its .mark_used() method.

