
He normal initializer.
### Aliases:
- `tf.compat.v2.initializers.he_normal`
- `tf.compat.v2.keras.initializers.he_normal`
- `tf.initializers.he_normal`

```
 tf.keras.initializers.he_normal(seed=None)
```

It draws samples from a truncated normal distribution centered on 0 with stddev = sqrt(2 / fan_in) where fan_in is the number of input units in the weight tensor.
#### Arguments:
- `seed`: A Python integer. Used to `seed` the random generator.
#### Returns:

An initializer.
#### References:
[He et al., 2015](https://www.cv-foundation.org/openaccess/content_iccv_2015/html/He_Delving_Deep_into_ICCV_2015_paper.html) # pylint: disable=line-too-long (pdf)
