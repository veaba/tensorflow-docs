启用TensorFlow 2.x行为。

```
 tf.compat.v1.enable_v2_behavior()
 
```

This function can be called at the beginning of the program (before  `Tensors` , `Graphs`  or other structures have been created, and before devices have beeninitialized. It switches all global behaviors that are different betweenTensorFlow 1.x and 2.x to behave as intended for 2.x.

This function is called in the main TensorFlow  `__init__.py`  file, user shouldnot need to call it, except during complex migrations.

