## Class Conv2DTranspose
Transposed convolution layer (sometimes called Deconvolution).
Inherits From: `Conv2D`
### Aliases:
- Class `tf.compat.v1.keras.layers.Conv2DTranspose`
- Class `tf.compat.v1.keras.layers.Convolution2DTranspose`
- Class `tf.compat.v2.keras.layers.Conv2DTranspose`
- Class `tf.compat.v2.keras.layers.Convolution2DTranspose`
- Class `tf.keras.layers.Convolution2DTranspose`
### Used in the guide:
- ``T``h``e`` ``K``e``r``a``s`` ``f``u``n``c``t``i``o``n``a``l`` ``A``P``I`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w``
### Used in the tutorials:
- ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``V``a``r``i``a``t``i``o``n``a``l`` ``A``u``t``o``e``n``c``o``d``e``r``
- ``D``e``e``p`` ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``G``e``n``e``r``a``t``i``v``e`` ``A``d``v``e``r``s``a``r``i``a``l`` ``N``e``t``w``o``r``k``
- ``P``i``x``2``P``i``x``
- ``I``m``a``g``e`` ``s``e``g``m``e``n``t``a``t``i``o``n``
The need for transposed convolutions generally arises from the desire to use a transformation going in the opposite direction of a normal convolution, i.e., from something that has the shape of the output of some convolution to something that has the shape of its input while maintaining a connectivity pattern that is compatible with said convolution.
