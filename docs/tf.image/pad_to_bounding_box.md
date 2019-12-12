Pad  `image`  with zeros to the specified  `height`  and  `width` .

**别名** : [ `tf.compat.v1.image.pad_to_bounding_box` ](/api_docs/python/tf/image/pad_to_bounding_box), [ `tf.compat.v2.image.pad_to_bounding_box` ](/api_docs/python/tf/image/pad_to_bounding_box)

```
 tf.image.pad_to_bounding_box(
    image,
    offset_height,
    offset_width,
    target_height,
    target_width
)
 
```

Adds  `offset_height`  rows of zeros on top,  `offset_width`  columns ofzeros on the left, and then pads the image on the bottom and rightwith zeros until it has dimensions  `target_height` ,  `target_width` .

This op does nothing if  `offset_*`  is zero and the image already has size `target_height`  by  `target_width` .

#### 参数：
- **`image`** : 4-D Tensor of shape  `[batch, height, width, channels]`  or 3-D Tensorof shape  `[height, width, channels]` .
- **`offset_height`** : Number of rows of zeros to add on top.
- **`offset_width`** : Number of columns of zeros to add on the left.
- **`target_height`** : Height of output image.
- **`target_width`** : Width of output image.


#### 返回：
If  `image`  was 4-D, a 4-D float Tensor of shape `[batch, target_height, target_width, channels]` If  `image`  was 3-D, a 3-D float Tensor of shape `[target_height, target_width, channels]` 

#### 加薪：
- **`ValueError`** : If the shape of  `image`  is incompatible with the  `offset_*`  or `target_*`  arguments, or either  `offset_height`  or  `offset_width`  isnegative.
