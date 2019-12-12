将一个或多个图像从RGB转换为灰度。

**别名** : [ `tf.compat.v1.image.rgb_to_grayscale` ](/api_docs/python/tf/image/rgb_to_grayscale), [ `tf.compat.v2.image.rgb_to_grayscale` ](/api_docs/python/tf/image/rgb_to_grayscale)

```
 tf.image.rgb_to_grayscale(    images,    name=None) 
```

Outputs a tensor of the same  `DType`  and rank as  `images` .  The size of thelast dimension of the output is 1, containing the Grayscale value of thepixels.

#### 参数：
- **`images`** : The RGB tensor to convert. Last dimension must have size 3 andshould contain RGB values.
- **`name`** : A name for the operation (optional).


#### 返回：
转换的灰度图像。

