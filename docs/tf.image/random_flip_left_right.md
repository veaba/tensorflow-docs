水平（从左到右）随机翻转图像。

**别名** : [ `tf.compat.v1.image.random_flip_left_right` ](/api_docs/python/tf/image/random_flip_left_right), [ `tf.compat.v2.image.random_flip_left_right` ](/api_docs/python/tf/image/random_flip_left_right)

```
 tf.image.random_flip_left_right(
    image,
    seed=None
)
 
```

### 在教程中使用：
- [CycleGAN](https://tensorflow.google.cn/tutorials/generative/cyclegan)
With a 1 in 2 chance, outputs the contents of  `image`  flipped along thesecond dimension, which is  `width` .  Otherwise output the image as-is.

#### 参数：
- **`image`** : 4-D Tensor of shape  `[batch, height, width, channels]`  or 3-D Tensorof shape  `[height, width, channels]` .
- **`seed`** : A Python integer. Used to create a random seed. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.


#### 返回：
A tensor of the same type and shape as  `image` .

#### 加薪：
- **`ValueError`** : if the shape of  `image`  not supported.
