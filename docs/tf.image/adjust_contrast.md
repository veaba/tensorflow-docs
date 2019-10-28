Adjust contrast of RGB or grayscale images.
### Aliases:
- `tf.compat.v1.image.adjust_contrast`
- `tf.compat.v2.image.adjust_contrast`

```
 tf.image.adjust_contrast(
    images,
    contrast_factor
)
```
This is a convenience method that converts RGB images to float representation, adjusts their contrast, and then converts them back to the original data type. If several adjustments are chained, it is advisable to minimize the number of redundant conversions.
`images` is a tensor of at least 3 dimensions. The last 3 dimensions are interpreted as `[height, width, channels]`. The other dimensions only represent a collection of `images`, such as `[batch, height, width, channels].`
Contrast is adjusted independently for each channel of each image.
