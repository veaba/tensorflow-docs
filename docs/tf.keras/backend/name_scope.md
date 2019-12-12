定义python操作时使用的上下文管理器。

```
 tf.keras.backend.name_scope(name) 
```

This context manager pushes a name scope, which will make the name of alloperations added within it have a prefix.

For example, to define a new Python op called  `my_op` :

```
 def)
    # Define some computation that uses `a`.
    return foo_op(..., name=scope)
 
```

When executed, the Tensor  `a`  will have the name  `MyOp/a` .

#### 参数：
- **`name`** : The prefix to use on all names created within the name scope.


#### 返回：
命名作用域上下文管理器。

