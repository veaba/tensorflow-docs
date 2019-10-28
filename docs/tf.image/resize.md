Re`size` `images` to `size` using the specified `method`.
### Aliases:
- `tf.compat.v2.image.resize`

```
 tf.image.resize(
    images,
    size,
    method=ResizeMethod.BILINEAR,
    preserve_aspect_ratio=False,
    antialias=False,
    name=None
)
```
### Used in the guide:
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
- ``E``s``t``i``m``a``t``o``r``s``
### Used in the tutorials:
- ``I``m``a``g``e`` ``s``e``g``m``e``n``t``a``t``i``o``n``
- ``D``e``e``p``D``r``e``a``m``
- ``P``i``x``2``P``i``x``
- ``N``e``u``r``a``l`` ``s``t``y``l``e`` ``t``r``a``n``s``f``e``r``
- ``A``d``v``e``r``s``a``r``i``a``l`` ``e``x``a``m``p``l``e`` ``u``s``i``n``g`` ``F``G``S``M``
Re`size`d images will be distorted if their original aspect ratio is not the same as `size`. To avoid distortions see `tf.image.resize_with_pad`.
When 'antialias' is true, the sampling filter will anti-alias the input image as well as interpolate. When downsampling an image with anti-aliasing the sampling filter kernel is scaled in order to properly anti-alias the input image signal. 'antialias' has no effect when upsampling an image.
- `bilinear`: Bilinear interpolation. If 'antialias' is true, becomes a hat/tent filter function with radius 1 when downsampling.
- `lanczos3`: Lanczos kernel with radius 3. High-quality practical filter but may have some ringing especially on synthetic images.
- `lanczos5`: Lanczos kernel with radius 5. Very-high-quality filter but may have stronger ringing.
- `bicubic`: Cubic interpolant of Keys. Equivalent to Catmull-Rom kernel. Reasonably good quality and faster than Lanczos3Kernel, particularly when upsampling.
- `gaussian`: Gaussian kernel with radius 3, sigma = 1.5 / 3.0.
- `nearest`: Nearest neighbor interpolation. 'antialias' has no effect when used with `nearest` neighbor interpolation.
- `area`: Anti-aliased resampling with `area` interpolation. 'antialias' has no effect when used with `area` interpolation; it always anti-aliases.
- `mitchellcubic`: Mitchell-Netravali Cubic non-interpolating filter. For synthetic images (especially those lacking proper prefiltering), less ringing than Keys cubic kernel but less sharp.
Note that near image edges the filtering kernel may be partially outside the image boundaries. For these pixels, only input pixels inside the image will be included in the filter sum, and the output value will be appropriately normalized.
The return value has the same type as `images` if `method` is `ResizeMethod.NEAREST_NEIGHBOR`. Otherwise, the return value has type `float32`.
#### Args:
- `images`: 4-D Tensor of shape `[batch, height, width, channels]` or 3-D Tensor of shape `[height, width, channels]`.
- `size`: A 1-D int32 Tensor of 2 elements: `new_height, new_width`. The new `size` for the images.
- `method`: ResizeMethod. Defaults to `bilinear`.
- `preserve_aspect_ratio`: Whether to preserve the aspect ratio. If this is set, then `images` will be re`size`d to a `size` that fits in `size` while preserving the aspect ratio of the original `image`. Scales up the `image` if `size` is bigger than the current `size` of the `image`. Defaults to False.
- `antialias`: Whether to use an anti-aliasing filter when downsampling an image.
- `name`: A `name` for this operation (optional).
#### Raises:
- `ValueError`: if the shape of `images` is incompatible with the shape arguments to this function
- `ValueError`: if `size` has invalid shape or type.
- `ValueError`: if an unsupported resize method is specified.
#### Returns:
If `images` was 4-D, a 4-D float Tensor of shape `[batch, new_height, new_width, channels]`. If `images` was 3-D, a 3-D float Tensor of shape `[new_height, new_width, channels]`.
