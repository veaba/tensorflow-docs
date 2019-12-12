调整RGB图像的饱和度。

**别名** : [ `tf.compat.v1.image.adjust_saturation` ](/api_docs/python/tf/image/adjust_saturation), [ `tf.compat.v2.image.adjust_saturation` ](/api_docs/python/tf/image/adjust_saturation)

```
 tf.image.adjust_saturation(
    image,
    saturation_factor,
    name=None
)
 
```

This is a convenience method that converts RGB images to floatrepresentation, converts them to HSV, add an offset to the saturation channel,converts back to RGB and then back to the original data type. If severaladjustments are chained it is advisable to minimize the number of redundantconversions.

 `image`  is an RGB image or images.  The image saturation is adjusted byconverting the images to HSV and multiplying the saturation (S) channel by `saturation_factor`  and clipping. The images are then converted back to RGB.

#### 参数：
- **`image`** : RGB image or images. Size of the last dimension must be 3.
- **`saturation_factor`** : float. Factor to multiply the saturation by.
- **`name`** : A name for this operation (optional).


#### 返回：
Adjusted image(s), same shape and DType as  `image` .

#### 用法示例：


```
 >> import tensorflow as tf
>> x = tf.random.normal(shape=(256, 256, 3))
>> tf.image.adjust_saturation(x, 0.5)
 
```

#### 加薪：
- **`InvalidArgumentError`** : input must have 3 channels
