裁剪图像的中心区域。

**别名** : [ `tf.compat.v1.image.central_crop` ](/api_docs/python/tf/image/central_crop), [ `tf.compat.v2.image.central_crop` ](/api_docs/python/tf/image/central_crop)

```
 tf.image.central_crop(
    image,
    central_fraction
)
 
```

Remove the outer parts of an image but retain the central region of the imagealong each dimension. If we specify central_fraction = 0.5, this functionreturns the region marked with "X" in the below diagram.

```
  --------
|        |
|  XXXX  |
|  XXXX  |
|        |   where "X" is the central 50% of the image.
 --------
 
```

This function works on either a single image ( `image`  is a 3-D Tensor), or abatch of images ( `image`  is a 4-D Tensor).

#### 参数：
- **`image`** : Either a 3-D float Tensor of shape [height, width, depth], or a 4-DTensor of shape [batch_size, height, width, depth].
- **`central_fraction`** : float (0, 1], fraction of size to cropUsage Example:  `python >> import tensorflow as tf >> x =tf.random.normal(shape=(256, 256, 3)) >> tf.image.central_crop(x, 0.5)` 


#### 加薪：
- **`ValueError`** : if central_crop_fraction is not within (0, 1].


#### 返回：
3-D / 4-D float Tensor, as per the input.

