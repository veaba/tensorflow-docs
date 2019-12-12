A transformation that prefetches dataset values to the given  `device` .

**别名** : [ `tf.compat.v1.data.experimental.prefetch_to_device` ](/api_docs/python/tf/data/experimental/prefetch_to_device), [ `tf.compat.v2.data.experimental.prefetch_to_device` ](/api_docs/python/tf/data/experimental/prefetch_to_device)

```
 tf.data.experimental.prefetch_to_device(
    device,
    buffer_size=None
)
 
```

注意：Although the transformation creates a [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset), thetransformation must be the final  `Dataset`  in the input pipeline.

#### 参数：
- **`device`** : A string. The name of a device to which elements will be prefetched.
- **`buffer_size`** : (Optional.) The number of elements to buffer on  `device` .Defaults to an automatically chosen value.


#### 返回：
A  `Dataset`  transformation function, which can be passed to[ `tf.data.Dataset.apply` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

