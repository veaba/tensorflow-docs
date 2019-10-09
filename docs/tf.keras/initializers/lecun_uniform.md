
LeCun uniform initializer.
### Aliases:
- `tf.compat.v2.initializers.lecun_uniform`
- `tf.compat.v2.keras.initializers.lecun_uniform`
- `tf.initializers.lecun_uniform`

```
 tf.keras.initializers.lecun_uniform(seed=None)
```

It draws samples from a uniform distribution within [-limit, limit] where limit is sqrt(3 / fan_in) where fan_in is the number of input units in the weight tensor.
#### Arguments:
- `seed`: A Python integer. Used to `seed` the random generator.
#### Returns:

An initializer.
#### References:
- ``S``e``l``f``-``N``o``r``m``a``l``i``z``i``n``g`` ``N``e``u``r``a``l`` ``N``e``t``w``o``r``k``s``,`` ``K``l``a``m``b``a``u``e``r`` ``e``t`` ``a``l``.``,`` ``2``0``1``7`` ``#`` ``p``y``l``i``n``t``:`` ``d``i``s``a``b``l``e``=``l``i``n``e``-``t``o``o``-``l``o``n``g`` ``(``p``d``f``)``
- ``E``f``f``i``c``i``e``n``t`` ``B``a``c``k``p``r``o``p``,`` ``L``e``c``u``n`` ``e``t`` ``a``l``.``,`` ``1``9``9``8``