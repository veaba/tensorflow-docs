返回初始化所有局部变量的操作。

```
 tf.compat.v1.local_variables_initializer()
 
```

This is just a shortcut for  `variables_initializer(local_variables())` 

#### 返回：
初始化图中所有局部变量的操作。

