禁用紧急执行。

```
 tf.compat.v1.disable_eager_execution()
 
```

This function can only be called before any Graphs, Ops, or Tensors have beencreated. It can be used at the beginning of the program for complex migrationprojects from TensorFlow 1.x to 2.x.

