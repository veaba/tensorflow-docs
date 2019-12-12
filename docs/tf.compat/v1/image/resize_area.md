Resize  `images`  to  `size`  using area interpolation.

```
 tf.compat.v1.image.resize_area(    images,    size,    align_corners=False,    name=None) 
```

输入图像可以是不同类型的，但输出图像总是浮动的。

The range of pixel values for the output image might be slightly differentfrom the range for the input image because of limited numerical precision.To guarantee an output range, for example  `[0.0, 1.0]` , apply[ `tf.clip_by_value` ](https://tensorflow.google.cn/api_docs/python/tf/clip_by_value) to the output.

Each output pixel is computed by first transforming the pixel's footprint intothe input tensor and then averaging the pixels that intersect the footprint. Aninput pixel's contribution to the average is weighted by the fraction of itsarea that intersects the footprint.  This is the same as OpenCV's INTER_AREA.

#### 参数：
- **`images`** : A  `Tensor` . Must be one of the following types:  `int8` ,  `uint8` ,  `int16` ,  `uint16` ,  `int32` ,  `int64` ,  `half` ,  `float32` ,  `float64` .4-D with shape  `[batch, height, width, channels]` .
- **`size`** :  A 1-D int32 Tensor of 2 elements:  `new_height, new_width` .  Thenew size for the images.
- **`align_corners`** : An optional  `bool` . Defaults to  `False` .If true, the centers of the 4 corner pixels of the input and output tensors arealigned, preserving the values at the corner pixels. Defaults to false.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `float32` .

