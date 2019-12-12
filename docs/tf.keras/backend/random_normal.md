Returns a tensor with normal distribution of values.

**Aliases** : [ `tf.compat.v1.keras.backend.random_normal` ](/api_docs/python/tf/keras/backend/random_normal), [ `tf.compat.v2.keras.backend.random_normal` ](/api_docs/python/tf/keras/backend/random_normal)

```
 tf.keras.backend.random_normal(
    shape,
    mean=0.0,
    stddev=1.0,
    dtype=None,
    seed=None
)
 
```

### Used in the guide:
- [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)


#### Arguments:
- **`shape`** : A tuple of integers, the shape of tensor to create.
- **`mean`** : A float, mean of the normal distribution to draw samples.
- **`stddev`** : A float, standard deviation of the normal distributionto draw samples.
- **`dtype`** : String, dtype of returned tensor.
- **`seed`** : Integer, random seed.


#### Returns:
A tensor.

