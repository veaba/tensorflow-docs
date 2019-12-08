Defined in generated file:  `python/ops/gen_nn_ops.py` 

Computes softsign:  `features / (abs(features) + 1)` .



### Aliases:

- [ `tf.compat.v1.math.softsign` ](/api_docs/python/tf/nn/softsign)

- [ `tf.compat.v1.nn.softsign` ](/api_docs/python/tf/nn/softsign)

- [ `tf.compat.v2.math.softsign` ](/api_docs/python/tf/nn/softsign)

- [ `tf.compat.v2.nn.softsign` ](/api_docs/python/tf/nn/softsign)

- [ `tf.math.softsign` ](/api_docs/python/tf/nn/softsign)



```
 tf.nn.softsign(
    features,
    name=None
)
 
```



#### Args:

- **`features`** : A  `Tensor` . Must be one of the following types:  `half` ,  `bfloat16` ,  `float32` ,  `float64` .

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor` . Has the same type as  `features` .

