## Class Conv2D
2D convolution layer (e.g. spatial convolution over images).
### Aliases:
- Class `tf.compat.v1.keras.layers.Conv2D`
- Class `tf.compat.v1.keras.layers.Convolution2D`
- Class `tf.compat.v2.keras.layers.Conv2D`
- Class `tf.compat.v2.keras.layers.Convolution2D`
- Class `tf.keras.layers.Convolution2D`
### Used in the guide:
- ``T``h``e`` ``K``e``r``a``s`` ``f``u``n``c``t``i``o``n``a``l`` ``A``P``I`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w``
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n`` ``a``n``d`` ``A``u``t``o``G``r``a``p``h``
### Used in the tutorials:
- ``C``u``s``t``o``m`` ``l``a``y``e``r``s``
- ``I``m``a``g``e`` ``c``l``a``s``s``i``f``i``c``a``t``i``o``n``
- ``B``a``s``i``c`` ``c``l``a``s``s``i``f``i``c``a``t``i``o``n``:`` ``C``l``a``s``s``i``f``y`` ``i``m``a``g``e``s`` ``o``f`` ``c``l``o``t``h``i``n``g``
- ``P``i``x``2``P``i``x``
- ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``N``e``u``r``a``l`` ``N``e``t``w``o``r``k`` ``(``C``N``N``)``
This layer creates a convolution kernel that is convolved with the layer input to produce a tensor of outputs. If `use_bias` is True, a bias vector is created and added to the outputs. Finally, if `activation` is not `None`, it is applied to the outputs as well.
