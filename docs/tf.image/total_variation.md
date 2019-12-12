计算并返回一个或多个图像的总变化。

**别名** : [ `tf.compat.v1.image.total_variation` ](/api_docs/python/tf/image/total_variation), [ `tf.compat.v2.image.total_variation` ](/api_docs/python/tf/image/total_variation)

```
 tf.image.total_variation(
    images,
    name=None
)
 
```

### 在教程中使用：
- [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)
The total variation is the sum of the absolute differences for neighboringpixel-values in the input images. This measures how much noise is in theimages.

This can be used as a loss-function during optimization so as to suppressnoise in images. If you have a batch of images, then you should calculatethe scalar loss-value as the sum: `loss = tf.reduce_sum(tf.image.total_variation(images))` 

This implements the anisotropic 2-D version of the formula described here:

https://en.wikipedia.org/wiki/Total_variation_denoising

#### 参数：
- **`images`** : 4-D Tensor of shape  `[batch, height, width, channels]`  or 3-D Tensorof shape  `[height, width, channels]` .
- **`name`** : A name for the operation (optional).


#### 加薪：
- **`ValueError`** : if images.shape is not a 3-D or 4-D vector.


#### 返回：
The total variation of  `images` .

If  `images`  was 4-D, return a 1-D float Tensor of shape  `[batch]`  with thetotal variation for each image in the batch.If  `images`  was 3-D, return a scalar float with the total variation forthat image.

