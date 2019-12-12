对输入图像执行伽马校正。

**别名** : [ `tf.compat.v1.image.adjust_gamma` ](/api_docs/python/tf/image/adjust_gamma), [ `tf.compat.v2.image.adjust_gamma` ](/api_docs/python/tf/image/adjust_gamma)

```
 tf.image.adjust_gamma(    image,    gamma=1,    gain=1) 
```

Also known as Power Law Transform. This function converts theinput images at first to float representation, then transforms thempixelwise according to the equation  `Out = gain * In**gamma` ,and then converts the back to the original data type.

#### 参数：
- **`image`** : RGB image or images to adjust.
- **`gamma`** : A scalar or tensor. Non negative real number.
- **`gain`** : A scalar or tensor. The constant multiplier.


#### 返回：
A Tensor. A Gamma-adjusted tensor of the same shape and type as  `image` .

#### 用法示例：


```
 >> import tensorflow as tf
>> x = tf.random.normal(shape=(256, 256, 3))
>> tf.image.adjust_gamma(x, 0.2)
 
```

#### 加薪：
- **`ValueError`** : If gamma is negative.


#### 注：
For gamma greater than 1, the histogram will shift towards left andthe output image will be darker than the input image.For gamma less than 1, the histogram will shift towards right andthe output image will be brighter than the input image.

#### 参考文献：
[1] http://en.wikipedia.org/wiki/Gamma_correction

