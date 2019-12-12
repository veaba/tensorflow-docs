检查“内容”是否编码JPEG图像的便利功能。

**别名** : [ `tf.compat.v1.image.is_jpeg` ](/api_docs/python/tf/io/is_jpeg), [ `tf.compat.v1.io.is_jpeg` ](/api_docs/python/tf/io/is_jpeg), [ `tf.compat.v2.image.is_jpeg` ](/api_docs/python/tf/io/is_jpeg), [ `tf.compat.v2.io.is_jpeg` ](/api_docs/python/tf/io/is_jpeg), [ `tf.image.is_jpeg` ](/api_docs/python/tf/io/is_jpeg)

```
 tf.io.is_jpeg(
    contents,
    name=None
)
 
```

#### 参数：
- **`contents`** : 0-D  `string` . The encoded image bytes.
- **`name`** : A name for the operation (optional)


#### 返回：
A scalar boolean tensor indicating if 'contents' may be a JPEG image.is_jpeg is susceptible to false positives.

