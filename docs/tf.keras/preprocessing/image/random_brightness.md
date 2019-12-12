执行随机亮度偏移。

**别名** : [ `tf.compat.v1.keras.preprocessing.image.random_brightness` ](/api_docs/python/tf/keras/preprocessing/image/random_brightness), [ `tf.compat.v2.keras.preprocessing.image.random_brightness` ](/api_docs/python/tf/keras/preprocessing/image/random_brightness)

```
 tf.keras.preprocessing.image.random_brightness(
    x,
    brightness_range
)
 
```

# Arguments


```
x：输入张量。必须是三维的。
brightness_range: Tuple of floats; brightness range.
channel_axis: Index of axis for channels in the input tensor.
 
```

# Returns


```
纽米图像张量。
 
```

# Raises


```
 ValueError if `brightness_range` isn't a tuple.
 
```

