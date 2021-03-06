将一个或多个图像从灰度转换为RGB。

**别名** : [ `tf.compat.v1.image.grayscale_to_rgb` ](/api_docs/python/tf/image/grayscale_to_rgb), [ `tf.compat.v2.image.grayscale_to_rgb` ](/api_docs/python/tf/image/grayscale_to_rgb)

```
 tf.image.grayscale_to_rgb(
    images,
    name=None
)
 
```

Outputs a tensor of the same  `DType`  and rank as  `images` .  The size of thelast dimension of the output is 3, containing the RGB value of the pixels.The input images' last dimension must be size 1.

#### 参数：
- **`images`** : The Grayscale tensor to convert. Last dimension must be size 1.
- **`name`** : A name for the operation (optional).


#### 返回：
转换的灰度图像。

