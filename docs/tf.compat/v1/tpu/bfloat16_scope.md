bfloat16变量的作用域类，以便模型使用自定义getter。

```
 tf.compat.v1.tpu.bfloat16_scope() 
```

This enables variables to be read as bfloat16 type when using get_variable.

