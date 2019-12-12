Builds part of a computation outside any current TPU replicate scope.

```
 tf.compat.v1.tpu.outside_compilation(    computation,    *args,    **kwargs) 
```

#### Args:
- **`computation`** : A Python function that builds the computation toplace on the host.
- **`*args`** : the positional arguments for the computation.
- **`**kwargs`** : the keyword arguments for the computation.


#### Returns:
The Tensors returned by computation.

