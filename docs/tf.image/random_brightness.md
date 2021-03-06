通过随机因素调整图像的亮度。

**别名** : [ `tf.compat.v1.image.random_brightness` ](/api_docs/python/tf/image/random_brightness), [ `tf.compat.v2.image.random_brightness` ](/api_docs/python/tf/image/random_brightness)

```
 tf.image.random_brightness(
    image,
    max_delta,
    seed=None
)
 
```

Equivalent to  `adjust_brightness()`  using a  `delta`  randomly picked in theinterval  `[-max_delta, max_delta)` .

#### 参数：
- **`image`** : An image or images to adjust.
- **`max_delta`** : float, must be non-negative.
- **`seed`** : A Python integer. Used to create a random seed. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.


#### 返回：
The brightness-adjusted image(s).

#### 加薪：
- **`ValueError`** : if  `max_delta`  is negative.
