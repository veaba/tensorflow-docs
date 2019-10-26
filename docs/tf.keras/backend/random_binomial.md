Returns a tensor with random binomial distribution of values.
### Aliases:
- tf.compat.v1.keras.backend.random_binomial
- tf.compat.v2.keras.backend.random_binomial

```
 tf.keras.backend.random_binomial(
    shape,
    p=0.0,
    dtype=None,
    seed=None
)
```
The binomial distribution with parameters n and p is the probability distribution of the number of successful Bernoulli process. Only supports n = 1 for now.
#### Arguments:
- shape: A tuple of integers, the shape of tensor to create.
- p: A float, 0. <= p <= 1, probability of binomial distribution.
- dtype: String, dtype of returned tensor.
- seed: Integer, random seed.
#### Returns:
A tensor.
