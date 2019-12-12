通过随机因素调整rgb图像的饱和度。

**别名** : [ `tf.compat.v1.image.random_saturation` ](/api_docs/python/tf/image/random_saturation), [ `tf.compat.v2.image.random_saturation` ](/api_docs/python/tf/image/random_saturation)

```
 tf.image.random_saturation(
    image,
    lower,
    upper,
    seed=None
)
 
```

Equivalent to  `adjust_saturation()`  but uses a  `saturation_factor`  randomlypicked in the interval  `[lower, upper]` .

#### 参数：
- **`image`** : RGB image or images. Size of the last dimension must be 3.
- **`lower`** : float.  Lower bound for the random saturation factor.
- **`upper`** : float.  Upper bound for the random saturation factor.
- **`seed`** : An operation-specific seed. It will be used in conjunction with thegraph-level seed to determine the real seeds that will be used in thisoperation. Please see the documentation of set_random_seed for itsinteraction with the graph-level random seed.


#### 返回：
Adjusted image(s), same shape and DType as  `image` .

#### 加薪：
- **`ValueError`** : if  `upper <= lower`  or if  `lower < 0` .
