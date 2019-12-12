执行亮度偏移。

**别名** : [ `tf.compat.v1.keras.preprocessing.image.apply_brightness_shift` ](/api_docs/python/tf/keras/preprocessing/image/apply_brightness_shift), [ `tf.compat.v2.keras.preprocessing.image.apply_brightness_shift` ](/api_docs/python/tf/keras/preprocessing/image/apply_brightness_shift)

```
 tf.keras.preprocessing.image.apply_brightness_shift(
    x,
    brightness
)
 
```

# Arguments


```
x：输入张量。必须是三维的。
亮度：浮动。新的亮度值。
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

