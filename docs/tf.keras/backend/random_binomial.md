Returns a tensor with random binomial distribution of values.
### Aliases:
- `tf.compat.v1.keras.backend.random_binomial`
- `tf.compat.v2.keras.backend.random_binomial`

```
 tf.keras.backend.random_binomial(
    shape,
    p=0.0,
    dtype=None,
    seed=None
)
```
The bi`n`omial distributio`n` with `p`arameters `n` a`n`d `p` is the `p`robability distributio`n` of the `n`umber of successful Ber`n`oulli `p`rocess. O`n`ly su`p``p`orts `n` = 1 for `n`ow.
#### Arguments:
- `shape`: A tuple of integers, the `shape` of tensor to create.
- `p`: A float, `0. <= p <= 1`, `p`robability of binomial distribution.
- `dtype`: String, `dtype` of returned tensor.
- `seed`: Integer, random `seed`.
#### Returns:
A tensor.
