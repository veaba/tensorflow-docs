## Class ImageDataGenerator
Generate batches of tensor image data with real-time data augmentation.
### Aliases:
- Class `tf.compat.v1.keras.preprocessing.image.ImageDataGenerator`
- Class `tf.compat.v2.keras.preprocessing.image.ImageDataGenerator`
### Used in the guide:
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
### Used in the tutorials:
- ``I``m``a``g``e`` ``c``l``a``s``s``i``f``i``c``a``t``i``o``n``
- ``B``a``s``i``c`` ``c``l``a``s``s``i``f``i``c``a``t``i``o``n``:`` ``C``l``a``s``s``i``f``y`` ``i``m``a``g``e``s`` ``o``f`` ``c``l``o``t``h``i``n``g``
- ``T``r``a``n``s``f``e``r`` ``l``e``a``r``n``i``n``g`` ``w``i``t``h`` ``T``e``n``s``o``r``F``l``o``w`` ``H``u``b``
- ``L``o``a``d`` ``i``m``a``g``e``s``
``T``h``e`` ``d``a``t``a`` ``w``i``l``l`` ``b``e`` ``l``o``o``p``e``d`` ``o``v``e``r`` ``(``i``n`` ``b``a``t``c``h``e``s``)``.``
#### Arguments:
- `featurewise_center`: Boolean. Set input mean to 0 over the dataset, feature-wise.
- `samplewise_center`: Boolean. Set each sample mean to 0.
- `featurewise_std_normalization`: Boolean. Divide inputs by std of the dataset, feature-wise.
- `samplewise_std_normalization`: Boolean. Divide each input by its std.
- `zca_epsilon`: epsilon for ZCA whitening. Default is 1e-6.
- `zca_whitening`: Boolean. Apply ZCA whitening.
- `rotation_range`: Int. Degree range for random rotations.
- `width_shift_range`: Float, 1-D array-like or int
float: fraction of total width, if < 1, or pixels if >= 1.
1-D array-like: random elements from the array.
int: integer number of pixels from interval `-width_shift_range, +width_shift_range)`
With `width_shift_range`=2 possible values are integers `[-1, 0, +1]`, same as with `width_shift_range`=`[-1, 0, +1]`, while with `width_shift_range`=1.0 possible values are floats in the interval [-1.0, +1.0).
- ``f``l``o``a``t``:`` ``f``r``a``c``t``i``o``n`` ``o``f`` ``t``o``t``a``l`` ``w``i``d``t``h``,`` ``i``f`` ``<`` ``1``,`` ``o``r`` ``p``i``x``e``l``s`` ``i``f`` ``>``=`` ``1``.``
- ``1``-``D`` ``a``r``r``a``y``-``l``i``k``e``:`` ``r``a``n``d``o``m`` ``e``l``e``m``e``n``t``s`` ``f``r``o``m`` ``t``h``e`` ``a``r``r``a``y``.``
- int: integer number of pixels from interval `-width_shift_range, +width_shift_range)`
- With `width_shift_range=2` possible values are integers `[-1, 0, +1]`, same as with `width_shift_range=[-1, 0, +1]`, while with `width_shift_range=1.0` possible values are floats in the interval [-1.0, +1.0).
- `height_shift_range`: Float, 1-D array-like or int
float: fraction of total height, if < 1, or pixels if >= 1.
1-D array-like: random elements from the array.
int: integer number of pixels from interval `-height_shift_range, +height_shift_range)`
With `height_shift_range`=2 possible values are integers `[-1, 0, +1]`, same as with `height_shift_range`=`[-1, 0, +1]`, while with `height_shift_range`=1.0 possible values are floats in the interval [-1.0, +1.0).
- ``f``l``o``a``t``:`` ``f``r``a``c``t``i``o``n`` ``o``f`` ``t``o``t``a``l`` ``h``e``i``g``h``t``,`` ``i``f`` ``<`` ``1``,`` ``o``r`` ``p``i``x``e``l``s`` ``i``f`` ``>``=`` ``1``.``
- ``1``-``D`` ``a``r``r``a``y``-``l``i``k``e``:`` ``r``a``n``d``o``m`` ``e``l``e``m``e``n``t``s`` ``f``r``o``m`` ``t``h``e`` ``a``r``r``a``y``.``
- int: integer number of pixels from interval `-height_shift_range, +height_shift_range)`
- With `height_shift_range=2` possible values are integers `[-1, 0, +1]`, same as with `height_shift_range=[-1, 0, +1]`, while with `height_shift_range=1.0` possible values are floats in the interval [-1.0, +1.0).
- `brightness_range`: Tuple or list of two floats. Range for picking a brightness shift value from.
- `shear_range`: Float. Shear Intensity (Shear angle in counter-clockwise direction in degrees)
- `zoom_range`: Float or [lower, upper]. Range for random zoom. If a float, `[lower, upper] = [1-zoom_range, 1+zoom_range]`.
- `channel_shift_range`: Float. Range for random channel shifts.
- `fill_mode`: One of {"constant", "nearest", "reflect" or "wrap"}. Default is 'nearest'. Points outside the boundaries of the input are filled according to the given mode:
'constant': kkkkkkkk|abcd|kkkkkkkk (cval=k)
'nearest': aaaaaaaa|abcd|dddddddd
'reflect': abcddcba|abcd|dcbaabcd
'wrap': abcdabcd|abcd|abcdabcd
- ``'``c``o``n``s``t``a``n``t``'``:`` ``k``k``k``k``k``k``k``k``|``a``b``c``d``|``k``k``k``k``k``k``k``k`` ``(``c``v``a``l``=``k``)``
- ``'``n``e``a``r``e``s``t``'``:`` ``a``a``a``a``a``a``a``a``|``a``b``c``d``|``d``d``d``d``d``d``d``d``
- ``'``r``e``f``l``e``c``t``'``:`` ``a``b``c``d``d``c``b``a``|``a``b``c``d``|``d``c``b``a``a``b``c``d``
- ``'``w``r``a``p``'``:`` ``a``b``c``d``a``b``c``d``|``a``b``c``d``|``a``b``c``d``a``b``c``d``
- `cval`: Float or Int. Value used for points outside the boundaries when `fill_mode = "constant"`.
- `horizontal_flip`: Boolean. Randomly flip inputs horizontally.
- `vertical_flip`: Boolean. Randomly flip inputs vertically.
- `rescale`: rescaling factor. Defaults to None. If None or 0, no rescaling is applied, otherwise we multiply the data by the value provided (after applying all other transformations).
- `preprocessing_function`: function that will be implied on each input. The function will run after the image is resized and augmented. The function should take one argument: one image (Numpy tensor with rank 3), and should output a Numpy tensor with the same shape.
- `data_format`: Image data format, either "channels_first" or "channels_last". "channels_last" mode means that the images should have shape `samples, height, width, channels)`, "channels_first" mode means that the images should have shape `samples, channels, height, width)`. It defaults to the `image_data_format` value found in your Keras config file at `~/.keras/keras.json`. If you never set it, then it will be "channels_last".
- `validation_split`: Float. Fraction of images reserved for validation (strictly between 0 and 1).
- `dtype`: Dtype to use for the generated arrays.
#### Examples:
