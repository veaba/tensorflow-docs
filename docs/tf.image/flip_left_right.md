水平翻转图像（从左到右）。

**别名** : [ `tf.compat.v1.image.flip_left_right` ](/api_docs/python/tf/image/flip_left_right), [ `tf.compat.v2.image.flip_left_right` ](/api_docs/python/tf/image/flip_left_right)

```
 tf.image.flip_left_right(image)
 
```

### 在教程中使用：
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
- [Image segmentation](https://tensorflow.google.cn/tutorials/images/segmentation)
Outputs the contents of  `image`  flipped along the width dimension.

See also  `reverse()` .

#### 参数：
- **`image`** : 4-D Tensor of shape  `[batch, height, width, channels]`  or 3-D Tensorof shape  `[height, width, channels]` .


#### 返回：
A tensor of the same type and shape as  `image` .

#### 加薪：
- **`ValueError`** : if the shape of  `image`  not supported.
