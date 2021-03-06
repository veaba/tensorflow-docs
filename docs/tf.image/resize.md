Resize  `images`  to  `size`  using the specified  `method` .

```
 tf.image.resize(    images,    size,    method=ResizeMethod.BILINEAR,    preserve_aspect_ratio=False,    antialias=False,    name=None) 
```

### 在指南中使用：
- [tf.data: Build TensorFlow input pipelines](https://tensorflow.google.cn/guide/data)
- [Estimators](https://tensorflow.google.cn/guide/estimator)


### 在教程中使用：
- [Image segmentation](https://tensorflow.google.cn/tutorials/images/segmentation)
- [DeepDream](https://tensorflow.google.cn/tutorials/generative/deepdream)
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
- [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)
- [Adversarial example using FGSM](https://tensorflow.google.cn/tutorials/generative/adversarial_fgsm)
Resized images will be distorted if their original aspect ratio is notthe same as  `size` .  To avoid distortions see[ `tf.image.resize_with_pad` ](https://tensorflow.google.cn/api_docs/python/tf/image/resize_with_pad).

When 'antialias' is true, the sampling filter will anti-alias the input imageas well as interpolate.  When downsampling an image with [anti-aliasing](https://en.wikipedia.org/wiki/Spatial_anti-aliasing) the sampling filterkernel is scaled in order to properly anti-alias the input image signal.'antialias' has no effect when upsampling an image.

- **`bilinear`** : [Bilinear interpolation.](https://en.wikipedia.org/wiki/Bilinear_interpolation) If 'antialias' istrue, becomes a hat/tent filter function with radius 1 when downsampling.
- **`lanczos3`** :  [Lanczos kernel](https://en.wikipedia.org/wiki/Lanczos_resampling) with radius 3.High-quality practical filter but may have some ringing especially onsynthetic images.
- **`lanczos5`** : [Lanczos kernel](https://en.wikipedia.org/wiki/Lanczos_resampling) with radius 5.Very-high-quality filter but may have stronger ringing.
- **`bicubic`** : [Cubic interpolant](https://en.wikipedia.org/wiki/Bicubic_interpolation) of Keys. Equivalent toCatmull-Rom kernel. Reasonably good quality and faster than Lanczos3Kernel,particularly when upsampling.
- **`gaussian`** : [Gaussian kernel](https://en.wikipedia.org/wiki/Gaussian_filter) with radius 3,sigma = 1.5 / 3.0.
- **`nearest`** : [Nearest neighbor interpolation.](https://en.wikipedia.org/wiki/Nearest-neighbor_interpolation)'antialias' has no effect when used with nearest neighbor interpolation.
- **`area`** : Anti-aliased resampling with area interpolation.'antialias' has no effect when used with area interpolation; italways anti-aliases.
- **`mitchellcubic`** : Mitchell-Netravali Cubic non-interpolating filter.For synthetic images (especially those lacking proper prefiltering), lessringing than Keys cubic kernel but less sharp.
Note that near image edges the filtering kernel may be partially outside theimage boundaries. For these pixels, only input pixels inside the image will beincluded in the filter sum, and the output value will be appropriatelynormalized.

The return value has the same type as  `images`  if  `method`  is[ `ResizeMethod.NEAREST_NEIGHBOR` ](https://tensorflow.google.cn/api_docs/python/tf/image/ResizeMethod#NEAREST_NEIGHBOR). Otherwise, the return value has type `float32` .

#### 参数：
- **`images`** : 4-D Tensor of shape  `[batch, height, width, channels]`  or 3-D Tensorof shape  `[height, width, channels]` .
- **`size`** : A 1-D int32 Tensor of 2 elements:  `new_height, new_width` .  The newsize for the images.
- **`method`** : ResizeMethod.  Defaults to  `bilinear` .
- **`preserve_aspect_ratio`** : Whether to preserve the aspect ratio. If this is set,then  `images`  will be resized to a size that fits in  `size`  whilepreserving the aspect ratio of the original image. Scales up the image if `size`  is bigger than the current size of the  `image` . Defaults to False.
- **`antialias`** : Whether to use an anti-aliasing filter when downsampling animage.
- **`name`** : A name for this operation (optional).


#### 加薪：
- **`ValueError`** : if the shape of  `images`  is incompatible with theshape arguments to this function
- **`ValueError`** : if  `size`  has invalid shape or type.
- **`ValueError`** : if an unsupported resize method is specified.


#### 返回：
If  `images`  was 4-D, a 4-D float Tensor of shape `[batch, new_height, new_width, channels]` .If  `images`  was 3-D, a 3-D float Tensor of shape `[new_height, new_width, channels]` .

