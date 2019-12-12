Create global step tensor in graph.

```
 tf.compat.v1.train.create_global_step(graph=None)
 
```

#### Args:
- **`graph`** : The graph in which to create the global step tensor. If missing, usedefault graph.


#### Returns:
Global step tensor.

#### Raises:
- **`ValueError`** : if global step tensor is already defined.
