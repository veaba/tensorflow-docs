垂直翻转图像（上下颠倒）。

**别名** : [ `tf.compat.v1.image.flip_up_down` ](/api_docs/python/tf/image/flip_up_down), [ `tf.compat.v2.image.flip_up_down` ](/api_docs/python/tf/image/flip_up_down)

```
 tf.image.flip_up_down(image)
 
```

Outputs the contents of  `image`  flipped along the height dimension.

See also  `reverse()` .

#### 参数：
- **`image`** : 4-D Tensor of shape  `[batch, height, width, channels]`  or 3-D Tensorof shape  `[height, width, channels]` .


#### 返回：
A  `Tensor`  of the same type and shape as  `image` .

#### 加薪：
- **`ValueError`** : if the shape of  `image`  not supported.
