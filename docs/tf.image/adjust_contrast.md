调整RGB或灰度图像的对比度。

**别名** : [ `tf.compat.v1.image.adjust_contrast` ](/api_docs/python/tf/image/adjust_contrast), [ `tf.compat.v2.image.adjust_contrast` ](/api_docs/python/tf/image/adjust_contrast)

```
 tf.image.adjust_contrast(
    images,
    contrast_factor
)
 
```

This is a convenience method that converts RGB images to floatrepresentation, adjusts their contrast, and then converts them back to theoriginal data type. If several adjustments are chained, it is advisable tominimize the number of redundant conversions.

 `images`  is a tensor of at least 3 dimensions.  The last 3 dimensions areinterpreted as  `[height, width, channels]` .  The other dimensions onlyrepresent a collection of images, such as  `[batch, height, width, channels].` 

为每个图像的每个通道独立地调整对比度。

For each channel, this Op computes the mean of the image pixels in thechannel and then adjusts each component  `x`  of each pixel to `(x - mean) * contrast_factor + mean` .

#### 参数：
- **`images`** : Images to adjust.  At least 3-D.
- **`contrast_factor`** : A float multiplier for adjusting contrast.


#### 返回：
The contrast-adjusted image or images.

#### 用法示例：


```
 import tensorflow as tf
x = tf.random.normal(shape=(256, 256, 3))
tf.image.adjust_contrast(x,2)
 
```

