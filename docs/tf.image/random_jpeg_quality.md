Randomly changes jpeg encoding quality for inducing jpeg noise.

**Aliases** : [ `tf.compat.v1.image.random_jpeg_quality` ](/api_docs/python/tf/image/random_jpeg_quality), [ `tf.compat.v2.image.random_jpeg_quality` ](/api_docs/python/tf/image/random_jpeg_quality)

```
 tf.image.random_jpeg_quality(
    image,
    min_jpeg_quality,
    max_jpeg_quality,
    seed=None
)
 
```

 `min_jpeg_quality`  must be in the interval  `[0, 100]`  and less than `max_jpeg_quality` . `max_jpeg_quality`  must be in the interval  `[0, 100]` .

#### Args:
- **`image`** : RGB image or images. Size of the last dimension must be 3.
- **`min_jpeg_quality`** : Minimum jpeg encoding quality to use.
- **`max_jpeg_quality`** : Maximum jpeg encoding quality to use.
- **`seed`** : An operation-specific seed. It will be used in conjunction with thegraph-level seed to determine the real seeds that will be used in thisoperation. Please see the documentation of set_random_seed for itsinteraction with the graph-level random seed.


#### Returns:
Adjusted image(s), same shape and DType as  `image` .

#### Raises:
- **`ValueError`** : if  `min_jpeg_quality`  or  `max_jpeg_quality`  is invalid.
