Defined in generated file:  `python/ops/gen_sdca_ops.py` 

Applies L1 regularization shrink step on the parameters.



```
 tf.compat.v1.train.sdca_shrink_l1(
    weights,
    l1,
    l2,
    name=None
)
 
```



#### Args:

- **`weights`** : A list of  `Tensor`  objects with type mutable  `float32` .
a list of vectors where each value is the weight associated with a
feature group.

- **`l1`** : A  `float` . Symmetric l1 regularization strength.

- **`l2`** : A  `float` .
Symmetric l2 regularization strength. Should be a positive float.

- **`name`** : A name for the operation (optional).



#### Returns:
The created Operation.

