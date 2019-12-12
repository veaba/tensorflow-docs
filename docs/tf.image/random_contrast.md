通过随机因素调整图像的对比度。

**别名** : [ `tf.compat.v1.image.random_contrast` ](/api_docs/python/tf/image/random_contrast), [ `tf.compat.v2.image.random_contrast` ](/api_docs/python/tf/image/random_contrast)

```
 tf.image.random_contrast(
    image,
    lower,
    upper,
    seed=None
)
 
```

Equivalent to  `adjust_contrast()`  but uses a  `contrast_factor`  randomlypicked in the interval  `[lower, upper]` .

#### 参数：
- **`image`** : An image tensor with 3 or more dimensions.
- **`lower`** : float.  Lower bound for the random contrast factor.
- **`upper`** : float.  Upper bound for the random contrast factor.
- **`seed`** : A Python integer. Used to create a random seed. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.


#### 返回：
The contrast-adjusted image(s).

#### 加薪：
- **`ValueError`** : if  `upper <= lower`  or if  `lower < 0` .
