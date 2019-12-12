通过随机因素调整rgb图像的色调。

**别名** : [ `tf.compat.v1.image.random_hue` ](/api_docs/python/tf/image/random_hue), [ `tf.compat.v2.image.random_hue` ](/api_docs/python/tf/image/random_hue)

```
 tf.image.random_hue(
    image,
    max_delta,
    seed=None
)
 
```

Equivalent to  `adjust_hue()`  but uses a  `delta`  randomlypicked in the interval  `[-max_delta, max_delta]` .

 `max_delta`  must be in the interval  `[0, 0.5]` .

#### 参数：
- **`image`** : RGB image or images. Size of the last dimension must be 3.
- **`max_delta`** : float.  Maximum value for the random delta.
- **`seed`** : An operation-specific seed. It will be used in conjunction with thegraph-level seed to determine the real seeds that will be used in thisoperation. Please see the documentation of set_random_seed for itsinteraction with the graph-level random seed.


#### 返回：
Adjusted image(s), same shape and DType as  `image` .

#### 加薪：
- **`ValueError`** : if  `max_delta`  is invalid.
