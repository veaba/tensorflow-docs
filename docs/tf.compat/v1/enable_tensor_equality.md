
Compare Tensors with element-wise comparison and thus be unhashable.

```
 tf.compat.v1.enable_tensor_equality()
```

Comparing tensors with element-wise allows comparisons such as tf.Variable(1.0) == 1.0. Element-wise equality implies that tensors are unhashable. Thus tensors can no longer be directly used in sets or as a key in a dictionary.
