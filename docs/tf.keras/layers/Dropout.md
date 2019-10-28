## Class Dropout
Applies Dropout to the input.
Inherits From: `Layer`
### Aliases:
- Class `tf.compat.v1.keras.layers.Dropout`
- Class `tf.compat.v2.keras.layers.Dropout`
### Used in the guide:
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
- ``T``h``e`` ``K``e``r``a``s`` ``f``u``n``c``t``i``o``n``a``l`` ``A``P``I`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w``
### Used in the tutorials:
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
- ``D``e``e``p`` ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``G``e``n``e``r``a``t``i``v``e`` ``A``d``v``e``r``s``a``r``i``a``l`` ``N``e``t``w``o``r``k``
- ``I``m``a``g``e`` ``c``l``a``s``s``i``f``i``c``a``t``i``o``n``
- ``B``a``s``i``c`` ``c``l``a``s``s``i``f``i``c``a``t``i``o``n``:`` ``C``l``a``s``s``i``f``y`` ``i``m``a``g``e``s`` ``o``f`` ``c``l``o``t``h``i``n``g``
- ``E``x``p``l``o``r``e`` ``o``v``e``r``f``i``t`` ``a``n``d`` ``u``n``d``e``r``f``i``t``
Dropout consists in randomly setting a fraction `rate` of input units to 0 at each update during training time, which helps prevent overfitting.
#### Arguments:
- `rate`: Float between 0 and 1. Fraction of the input units to drop.
#### Call arguments:
- `inputs`: Input tensor (of any rank).
- `training`: Python boolean indicating whether the layer should behave in `training` mode (adding dropout) or in inference mode (doing nothing).
## __init__
View source

```
 __init__(
    rate,
    noise_shape=None,
    seed=None,
    **kwargs
)
```
