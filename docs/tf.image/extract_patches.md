Extract `patches` from `images`.
### Aliases:
- `tf.compat.v1.image.extract_patches`
- `tf.compat.v2.image.extract_patches`

```
 tf.image.extract_patches(
    images,
    sizes,
    strides,
    rates,
    padding,
    name=None
)
```
This op collects patches from the input image, as if applying a convolution. All extracted patches are stacked in the depth (last) dimension of the output.
Specifically, the op extracts patches of shape `sizes` which are `strides` apart in the input image. The output is subsampled using the `rates` argument, in the same manner as "atrous" or "dilated" convolutions.
The result is a 4D tensor which is indexed by batch, row, and column. `output[i, x, y]` contains a flattened patch of size `sizes[1], sizes[2]` which is taken from the input starting at images[i, x*strides[1], y*strides[2]].
Each output patch can be reshaped to `sizes[1], sizes[2], depth`, where `depth` is `images.shape[3]`.
The output elements are taken from the input at intervals given by the `rate` argument, as in dilated convolutions.
The `padding` argument has no effect on the size of each patch, it determines how many patches are extracted. If `VALID`, only patches which are fully contained in the input image are included. If `SAME`, all patches whose starting point is inside the input are included, and areas outside the input default to zero.
#### Example:

```
   n = 10
  # images is a 1 x 10 x 10 x 1 array that contains the numbers 1 through 100
  images = [[[[x * n + y + 1] for y in range(n)] for x in range(n)]]

  # We generate two outputs as follows:
  # 1. 3x3 patches with stride length 5
  # 2. Same as above, but the rate is increased to 2
  tf.extract_image_patches(images=images,
                           ksizes=[1, 3, 3, 1],
                           strides=[1, 5, 5, 1],
                           rates=[1, 1, 1, 1],
                           padding='VALID')

  # Yields:
  [[[[ 1  2  3 11 12 13 21 22 23]
     [ 6  7  8 16 17 18 26 27 28]]
    [[51 52 53 61 62 63 71 72 73]
     [56 57 58 66 67 68 76 77 78]]]]
```
