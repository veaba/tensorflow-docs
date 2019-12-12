Generate a single randomly distorted bounding box for an image.

```
 tf.image.sample_distorted_bounding_box(    image_size,    bounding_boxes,    seed=0,    min_object_covered=0.1,    aspect_ratio_range=None,    area_range=None,    max_attempts=None,    use_image_if_no_bounding_boxes=None,    name=None) 
```

Bounding box annotations are often supplied in addition to ground-truth labelsin image recognition or object localization tasks. A common technique fortraining such a system is to randomly distort an image while preservingits content, i.e. *data augmentation*. This Op outputs a randomly distortedlocalization of an object, i.e. bounding box, given an  `image_size` , `bounding_boxes`  and a series of constraints.

The output of this Op is a single bounding box that may be used to crop theoriginal image. The output is returned as 3 tensors:  `begin` ,  `size`  and `bboxes` . The first 2 tensors can be fed directly into [ `tf.slice` ](https://tensorflow.google.cn/api_docs/python/tf/slice) to crop theimage. The latter may be supplied to [ `tf.image.draw_bounding_boxes` ](https://tensorflow.google.cn/api_docs/python/tf/image/draw_bounding_boxes) tovisualize what the bounding box looks like.

Bounding boxes are supplied and returned as  `[y_min, x_min, y_max, x_max]` .The bounding box coordinates are floats in  `[0.0, 1.0]`  relative to the widthand height of the underlying image.

For example,

```
     # Generate a single distorted bounding box.
    begin, size, bbox_for_draw = tf.image.sample_distorted_bounding_box(
        tf.shape(image),
        bounding_boxes=bounding_boxes,
        min_object_covered=0.1)

    # Draw the bounding box in an image summary.
    image_with_box = tf.image.draw_bounding_boxes(tf.expand_dims(image, 0),
                                                  bbox_for_draw)
    tf.compat.v1.summary.image('images_with_box', image_with_box)

    # Employ the bounding box to distort the image.
    distorted_image = tf.slice(image, begin, size)
 
```

Note that if no bounding box information is available, setting `use_image_if_no_bounding_boxes = true`  will assume there is a single implicitbounding box covering the whole image. If  `use_image_if_no_bounding_boxes`  isfalse and no bounding boxes are supplied, an error is raised.

#### Args:
- **`image_size`** : A  `Tensor` . Must be one of the following types:  `uint8` ,  `int8` , `int16` ,  `int32` ,  `int64` . 1-D, containing  `[height, width, channels]` .
- **`bounding_boxes`** : A  `Tensor`  of type  `float32` . 3-D with shape  `[batch, N, 4]` describing the N bounding boxes associated with the image.
- **`seed`** : An optional  `int` . Defaults to  `0` . If  `seed`  is set to non-zero, therandom number generator is seeded by the given  `seed` .  Otherwise, it isseeded by a random seed.
- **`min_object_covered`** : A Tensor of type  `float32` . Defaults to  `0.1` . Thecropped area of the image must contain at least this fraction of anybounding box supplied. The value of this parameter should be non-negative.In the case of 0, the cropped area does not need to overlap any of thebounding boxes supplied.
- **`aspect_ratio_range`** : An optional list of  `floats` . Defaults to  `[0.75,1.33]` . The cropped area of the image must have an aspect  `ratio = width /height`  within this range.
- **`area_range`** : An optional list of  `floats` . Defaults to  `[0.05, 1]` . Thecropped area of the image must contain a fraction of the supplied imagewithin this range.
- **`max_attempts`** : An optional  `int` . Defaults to  `100` . Number of attempts atgenerating a cropped region of the image of the specified constraints.After  `max_attempts`  failures, return the entire image.
- **`use_image_if_no_bounding_boxes`** : An optional  `bool` . Defaults to  `False` .Controls behavior if no bounding boxes supplied. If true, assume animplicit bounding box covering the whole input. If false, raise an error.
- **`name`** : A name for the operation (optional).


#### Returns:
A tuple of  `Tensor`  objects (begin, size, bboxes).

- **`begin`** : A  `Tensor` . Has the same type as  `image_size` . 1-D, containing `[offset_height, offset_width, 0]` . Provide as input to[ `tf.slice` ](https://tensorflow.google.cn/api_docs/python/tf/slice).
- **`size`** : A  `Tensor` . Has the same type as  `image_size` . 1-D, containing `[target_height, target_width, -1]` . Provide as input to[ `tf.slice` ](https://tensorflow.google.cn/api_docs/python/tf/slice).
- **`bboxes`** : A  `Tensor`  of type  `float32` . 3-D with shape  `[1, 1, 4]`  containingthe distorted bounding box.Provide as input to [ `tf.image.draw_bounding_boxes` ](https://tensorflow.google.cn/api_docs/python/tf/image/draw_bounding_boxes).
