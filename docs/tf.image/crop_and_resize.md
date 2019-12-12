从输入图像张量中提取作物并调整其大小。

```
 tf.image.crop_and_resize(    image,    boxes,    box_indices,    crop_size,    method='bilinear',    extrapolation_value=0,    name=None) 
```

Extracts crops from the input image tensor and resizes them using bilinearsampling or nearest neighbor sampling (possibly with aspect ratio change) to acommon output size specified by  `crop_size` . This is more general than the `crop_to_bounding_box`  op which extracts a fixed size slice from the inputimage and does not allow resizing or aspect ratio change.

Returns a tensor with  `crops`  from the input  `image`  at positions defined atthe bounding box locations in  `boxes` . The cropped boxes are all resized (withbilinear or nearest neighbor interpolation) to a fixed `size = [crop_height, crop_width]` . The result is a 4-D tensor `[num_boxes, crop_height, crop_width, depth]` . The resizing is corner aligned.In particular, if  `boxes = [[0, 0, 1, 1]]` , the method will give identicalresults to using [ `tf.compat.v1.image.resize_bilinear()` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/image/resize_bilinear) or[ `tf.compat.v1.image.resize_nearest_neighbor()` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/image/resize_nearest_neighbor)(depends on the  `method` argument) with `align_corners=True` .

#### 参数：
- **`image`** : A 4-D tensor of shape  `[batch, image_height, image_width, depth]` .Both  `image_height`  and  `image_width`  need to be positive.
- **`boxes`** : A 2-D tensor of shape  `[num_boxes, 4]` . The  `i` -th row of the tensorspecifies the coordinates of a box in the  `box_ind[i]`  image and isspecified in normalized coordinates  `[y1, x1, y2, x2]` . A normalizedcoordinate value of  `y`  is mapped to the image coordinate at  `y *(image_height - 1)` , so as the  `[0, 1]`  interval of normalized imageheight is mapped to  `[0, image_height - 1]`  in image height coordinates.We do allow  `y1`  >  `y2` , in which case the sampled crop is an up-downflipped version of the original image. The width dimension is treatedsimilarly. Normalized coordinates outside the  `[0, 1]`  range are allowed,in which case we use  `extrapolation_value`  to extrapolate the input imagevalues.
- **`box_indices`** : A 1-D tensor of shape  `[num_boxes]`  with int32 values in  `[0,batch)` . The value of  `box_ind[i]`  specifies the image that the  `i` -th boxrefers to.
- **`crop_size`** : A 1-D tensor of 2 elements,  `size = [crop_height, crop_width]` .All cropped image patches are resized to this size. The aspect ratio ofthe image content is not preserved. Both  `crop_height`  and  `crop_width` need to be positive.
- **`method`** : An optional string specifying the sampling method for resizing. Itcan be either  `"bilinear"`  or  `"nearest"`  and default to  `"bilinear"` .Currently two sampling methods are supported: Bilinear and NearestNeighbor.
- **`extrapolation_value`** : An optional  `float` . Defaults to  `0` . Value used forextrapolation, when applicable.
- **`name`** : A name for the operation (optional).


#### 返回：
A 4-D tensor of shape  `[num_boxes, crop_height, crop_width, depth]` .

