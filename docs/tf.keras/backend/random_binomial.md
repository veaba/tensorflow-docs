返回值随机二项分布的张量。

**别名** : [ `tf.compat.v1.keras.backend.random_binomial` ](/api_docs/python/tf/keras/backend/random_binomial), [ `tf.compat.v2.keras.backend.random_binomial` ](/api_docs/python/tf/keras/backend/random_binomial)

```
 tf.keras.backend.random_binomial(
    shape,
    p=0.0,
    dtype=None,
    seed=None
)
 
```

The binomial distribution with parameters  `n`  and  `p`  is the probabilitydistribution of the number of successful Bernoulli process. Only supports `n`  = 1 for now.

#### 参数：
- **`shape`** : A tuple of integers, the shape of tensor to create.
- **`p`** : A float,  `0. <= p <= 1` , probability of binomial distribution.
- **`dtype`** : String, dtype of returned tensor.
- **`seed`** : Integer, random seed.


#### 返回：
张量

