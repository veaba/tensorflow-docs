Extracts crops from the input image tensor and resizes them.

```
 tf.compat.v1.image.crop_and_resize(    image,    boxes,    box_ind=None,    crop_size=None,    method='bilinear',    extrapolation_value=0,    name=None,    box_indices=None) 
```

Extracts crops from the input image tensor and resizes them using bilinearsampling or nearest neighbor sampling (possibly with aspect ratio change) to acommon output size specified by  `crop_size` . This is more general than the `crop_to_bounding_box`  op which extracts a fixed size slice from the input imageand does not allow resizing or aspect ratio change.

Returns a tensor with  `crops`  from the input  `image`  at positions defined at thebounding box locations in  `boxes` . The cropped boxes are all resized (withbilinear or nearest neighbor interpolation) to a fixed `size = [crop_height, crop_width]` . The result is a 4-D tensor `[num_boxes, crop_height, crop_width, depth]` . The resizing is corner aligned.In particular, if  `boxes = [[0, 0, 1, 1]]` , the method will give identicalresults to using  `tf.image.resize_bilinear()`  or `tf.image.resize_nearest_neighbor()` (depends on the  `method`  argument) with `align_corners=True` .

#### Args:
- **`image`** : A  `Tensor` . Must be one of the following types:  `uint8` ,  `uint16` ,  `int8` ,  `int16` ,  `int32` ,  `int64` ,  `half` ,  `float32` ,  `float64` .A 4-D tensor of shape  `[batch, image_height, image_width, depth]` .Both  `image_height`  and  `image_width`  need to be positive.
- **`boxes`** : A  `Tensor`  of type  `float32` .A 2-D tensor of shape  `[num_boxes, 4]` . The  `i` -th row of the tensorspecifies the coordinates of a box in the  `box_ind[i]`  image and is specifiedin normalized coordinates  `[y1, x1, y2, x2]` . A normalized coordinate value of `y`  is mapped to the image coordinate at  `y * (image_height - 1)` , so as the `[0, 1]`  interval of normalized image height is mapped to `[0, image_height - 1]`  in image height coordinates. We do allow  `y1`  >  `y2` , inwhich case the sampled crop is an up-down flipped version of the originalimage. The width dimension is treated similarly. Normalized coordinatesoutside the  `[0, 1]`  range are allowed, in which case we use `extrapolation_value`  to extrapolate the input image values.
- **`box_ind`** : A  `Tensor`  of type  `int32` .A 1-D tensor of shape  `[num_boxes]`  with int32 values in  `[0, batch)` .The value of  `box_ind[i]`  specifies the image that the  `i` -th box refers to.
- **`crop_size`** : A  `Tensor`  of type  `int32` .A 1-D tensor of 2 elements,  `size = [crop_height, crop_width]` . Allcropped image patches are resized to this size. The aspect ratio of the imagecontent is not preserved. Both  `crop_height`  and  `crop_width`  need to bepositive.
- **`method`** : An optional  `string`  from:  `"bilinear", "nearest"` . Defaults to  `"bilinear"` .A string specifying the sampling method for resizing. It can be either `"bilinear"`  or  `"nearest"`  and default to  `"bilinear"` . Currently two samplingmethods are supported: Bilinear and Nearest Neighbor.
- **`extrapolation_value`** : An optional  `float` . Defaults to  `0` .Value used for extrapolation, when applicable.
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor`  of type  `float32` .

