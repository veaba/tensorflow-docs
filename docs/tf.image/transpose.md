通过交换高度和宽度维度来转置图像。

**别名** : [ `tf.compat.v1.image.transpose` ](/api_docs/python/tf/image/transpose), [ `tf.compat.v1.image.transpose_image` ](/api_docs/python/tf/image/transpose), [ `tf.compat.v2.image.transpose` ](/api_docs/python/tf/image/transpose)

```
 tf.image.transpose(
    image,
    name=None
)
 
```

#### 参数：
- **`image`** : 4-D Tensor of shape  `[batch, height, width, channels]`  or 3-D Tensorof shape  `[height, width, channels]` .
- **`name`** : A name for this operation (optional).


#### 返回：
If  `image`  was 4-D, a 4-D float Tensor of shape `[batch, width, height, channels]`  If  `image`  was 3-D, a 3-D float Tensor of shape `[width, height, channels]` 

#### 加薪：
- **`ValueError`** : if the shape of  `image`  not supported.
