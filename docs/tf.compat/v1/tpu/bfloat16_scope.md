Scope class for bfloat16 variables so that the model uses custom getter.

```
 tf.compat.v1.tpu.bfloat16_scope() 
```

This enables variables to be read as bfloat16 type when using get_variable.

