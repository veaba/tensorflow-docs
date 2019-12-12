将一个或多个图像从rgb转换为yuv。

**别名** : [ `tf.compat.v1.image.rgb_to_yuv` ](/api_docs/python/tf/image/rgb_to_yuv), [ `tf.compat.v2.image.rgb_to_yuv` ](/api_docs/python/tf/image/rgb_to_yuv)

```
 tf.image.rgb_to_yuv(images)
 
```

Outputs a tensor of the same shape as the  `images`  tensor, containing the YUVvalue of the pixels.The output is only well defined if the value in images are in [0,1].

#### 参数：
- **`images`** : 2-D or higher rank. Image data to convert. Last dimension must besize 3.


#### 返回：
- **`images`** : tensor with the same shape as  `images` .
