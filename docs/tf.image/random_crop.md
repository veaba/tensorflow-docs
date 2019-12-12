随机将张量裁剪为给定大小。

**别名** : [ `tf.compat.v1.image.random_crop` ](/api_docs/python/tf/image/random_crop), [ `tf.compat.v1.random_crop` ](/api_docs/python/tf/image/random_crop), [ `tf.compat.v2.image.random_crop` ](/api_docs/python/tf/image/random_crop)

```
 tf.image.random_crop(
    value,
    size,
    seed=None,
    name=None
)
 
```

### 在教程中使用：
- [CycleGAN](https://tensorflow.google.cn/tutorials/generative/cyclegan)
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
Slices a shape  `size`  portion out of  `value`  at a uniformly chosen offset.Requires  `value.shape >= size` .

If a dimension should not be cropped, pass the full size of that dimension.For example, RGB images can be cropped with `size = [crop_height, crop_width, 3]` .

#### 参数：
- **`value`** : Input tensor to crop.
- **`size`** : 1-D tensor with size the rank of  `value` .
- **`seed`** : Python integer. Used to create a random seed. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed)for behavior.
- **`name`** : A name for this operation (optional).


#### 返回：
A cropped tensor of the same rank as  `value`  and shape  `size` .

