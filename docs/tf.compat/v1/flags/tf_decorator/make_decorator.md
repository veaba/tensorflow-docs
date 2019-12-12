从包装器和目标生成装饰器。

```
 tf.compat.v1.flags.tf_decorator.make_decorator(    target,    decorator_func,    decorator_name=None,    decorator_doc='',    decorator_argspec=None) 
```

#### 参数：
- **`target`** : The final callable to be wrapped.
- **`decorator_func`** : The wrapper function.
- **`decorator_name`** : The name of the decorator. If  `None` , the name of thefunction calling make_decorator.
- **`decorator_doc`** : Documentation specific to this application of `decorator_func`  to  `target` .
- **`decorator_argspec`** : The new callable signature of this decorator.


#### 返回：
The  `decorator_func`  argument with new metadata attached.

