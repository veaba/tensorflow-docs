将一个或多个图像从YIQ转换为RGB。

**别名** : [ `tf.compat.v1.image.yiq_to_rgb` ](/api_docs/python/tf/image/yiq_to_rgb), [ `tf.compat.v2.image.yiq_to_rgb` ](/api_docs/python/tf/image/yiq_to_rgb)

```
 tf.image.yiq_to_rgb(images)
 
```

Outputs a tensor of the same shape as the  `images`  tensor, containing the RGBvalue of the pixels.The output is only well defined if the Y value in images are in [0,1],I value are in [-0.5957,0.5957] and Q value are in [-0.5226,0.5226].

#### 参数：
- **`images`** : 2-D or higher rank. Image data to convert. Last dimension must besize 3.


#### 返回：
- **`images`** : tensor with the same shape as  `images` .
