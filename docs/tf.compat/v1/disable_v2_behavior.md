禁用TensorFlow 2.x行为。

```
 tf.compat.v1.disable_v2_behavior()
 
```

This function can be called at the beginning of the program (before  `Tensors` , `Graphs`  or other structures have been created, and before devices have beeninitialized. It switches all global behaviors that are different betweenTensorFlow 1.x and 2.x to behave as intended for 1.x.

用户可以调用此函数来禁用复杂迁移期间的2.x行为。

