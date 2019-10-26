Disables TensorFlow 2.x behaviors.

```
 tf.compat.v1.disable_v2_behavior()
```
This function can be called at the beginning of the program (before Tensors, Graphs or other structures have been created, and before devices have been initialized. It switches all global behaviors that are different between TensorFlow 1.x and 2.x to behave as intended for 1.x.
User can call this function to disable 2.x behavior during complex migrations.
