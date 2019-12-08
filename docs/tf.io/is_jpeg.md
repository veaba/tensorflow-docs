Convenience function to check if the 'contents' encodes a JPEG image.



### Aliases:

- [ `tf.compat.v1.image.is_jpeg` ](/api_docs/python/tf/io/is_jpeg)

- [ `tf.compat.v1.io.is_jpeg` ](/api_docs/python/tf/io/is_jpeg)

- [ `tf.compat.v2.image.is_jpeg` ](/api_docs/python/tf/io/is_jpeg)

- [ `tf.compat.v2.io.is_jpeg` ](/api_docs/python/tf/io/is_jpeg)

- [ `tf.image.is_jpeg` ](/api_docs/python/tf/io/is_jpeg)



```
 tf.io.is_jpeg(
    contents,
    name=None
)
 
```



#### Args:

- **`contents`** : 0-D  `string` . The encoded image bytes.

- **`name`** : A name for the operation (optional)



#### Returns:
A scalar boolean tensor indicating if 'contents' may be a JPEG image.
is_jpeg is susceptible to false positives.

