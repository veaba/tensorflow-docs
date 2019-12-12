Extract the shape information of a JPEG-encoded image.

**别名** : [ `tf.compat.v1.image.extract_jpeg_shape` ](/api_docs/python/tf/io/extract_jpeg_shape), [ `tf.compat.v1.io.extract_jpeg_shape` ](/api_docs/python/tf/io/extract_jpeg_shape), [ `tf.compat.v2.image.extract_jpeg_shape` ](/api_docs/python/tf/io/extract_jpeg_shape), [ `tf.compat.v2.io.extract_jpeg_shape` ](/api_docs/python/tf/io/extract_jpeg_shape), [ `tf.image.extract_jpeg_shape` ](/api_docs/python/tf/io/extract_jpeg_shape)

```
 tf.io.extract_jpeg_shape(
    contents,
    output_type=tf.dtypes.int32,
    name=None
)
 
```

This op only parses the image header, so it is much faster than DecodeJpeg.

#### 参数：
- **`contents`** : A  `Tensor`  of type  `string` . 0-D. The JPEG-encoded image.
- **`output_type`** : An optional [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) from:  `tf.int32, tf.int64` . Defaults to [ `tf.int32` ](https://tensorflow.google.cn/api_docs/python/tf#int32).(Optional) The output type of the operation (int32 or int64).Defaults to int32.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `output_type` .

