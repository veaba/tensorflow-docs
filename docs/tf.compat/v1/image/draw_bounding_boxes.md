在一批图像上绘制边界框。

```
 tf.compat.v1.image.draw_bounding_boxes(
    images,
    boxes,
    name=None,
    colors=None
)
 
```

Outputs a copy of  `images`  but draws on top of the pixels zero or morebounding boxes specified by the locations in  `boxes` . The coordinates of theeach bounding box in  `boxes`  are encoded as  `[y_min, x_min, y_max, x_max]` .The bounding box coordinates are floats in  `[0.0, 1.0]`  relative to the widthand height of the underlying image.

For example, if an image is 100 x 200 pixels (height x width) and the boundingbox is  `[0.1, 0.2, 0.5, 0.9]` , the upper-left and bottom-right coordinates ofthe bounding box will be  `(40, 10)`  to  `(180, 50)`  (in (x,y) coordinates).

边界框的某些部分可能落在图像之外。

#### 参数：
- **`images`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `half` .4-D with shape  `[batch, height, width, depth]` . A batch of images.
- **`boxes`** : A  `Tensor`  of type  `float32` . 3-D with shape  `[batch,num_bounding_boxes, 4]`  containing bounding boxes.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `images` .

