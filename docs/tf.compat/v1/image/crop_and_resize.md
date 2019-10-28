Extracts crops from the input image tensor and resizes them.

```
 tf.compat.v1.image.crop_and_resize(
    image,
    boxes,
    box_ind=None,
    crop_size=None,
    method='bilinear',
    extrapolation_value=0,
    name=None,
    box_indices=None
)
```
Extracts crops from the input image tensor and resizes them using bilinear sampling or nearest neighbor sampling (possibly with aspect ratio change) to a common output size specified by `crop_size`. This is more general than the `crop_to_bounding_box` op which extracts a fixed size slice from the input image and does not allow resizing or aspect ratio change.
