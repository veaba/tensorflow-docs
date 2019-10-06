
Exponential linear unit.
### Aliases:
- `tf.compat.v1.keras.activations.elu`
- `tf.compat.v2.keras.activations.elu`

```
 tf.keras.activations.elu(
    x,
    alpha=1.0
)
```
#### Arguments:
- `x`: Input tensor.
- `alpha`: A scalar, slope of negative section.
#### Returns:

The exponential linear activation: x if x > 0 and alpha * (exp(x)-1) if x < 0.
#### Reference:
- ``F``a``s``t`` ``a``n``d`` ``A``c``c``u``r``a``t``e`` ``D``e``e``p`` ``N``e``t``w``o``r``k`` ``L``e``a``r``n``i``n``g`` ``b``y`` ``E``x``p``o``n``e``n``t``i``a``l`` ``L``i``n``e``a``r`` ``U``n``i``t``s`` ``(``E``L``U``s``)``
