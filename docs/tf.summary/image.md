Write an image summary.

```
 tf.summary.image(
    name,
    data,
    step=None,
    max_outputs=3,
    description=None
)
 
```

#### Arguments:
- **`name`** : A name for this summary. The summary tag used for TensorBoard willbe this name prefixed by any active name scopes.
- **`data`** : A  `Tensor`  representing pixel data with shape  `[k, h, w, c]` ,where  `k`  is the number of images,  `h`  and  `w`  are the height andwidth of the images, and  `c`  is the number of channels, whichshould be 1, 2, 3, or 4 (grayscale, grayscale with alpha, RGB, RGBA).Any of the dimensions may be statically unknown (i.e.,  `None` ).Floating point data will be clipped to the range [0,1).
- **`step`** : Explicit  `int64` -castable monotonic step value for this summary. Ifomitted, this defaults to [ `tf.summary.experimental.get_step()` ](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step), which mustnot be None.
- **`max_outputs`** : Optional  `int`  or rank-0 integer  `Tensor` . At most thismany images will be emitted at each step. When more than `max_outputs`  many images are provided, the first  `max_outputs`  manyimages will be used and the rest silently discarded.
- **`description`** : Optional long-form description for this summary, as aconstant  `str` . Markdown is supported. Defaults to empty.


#### Returns:
True on success, or false if no summary was emitted because no defaultsummary writer was available.

#### Raises:
- **`ValueError`** : if a default writer exists, but no step was provided and[ `tf.summary.experimental.get_step()` ](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step) is None.
