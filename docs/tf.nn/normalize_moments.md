在充分统计的基础上计算的均值和方差。

**别名** : [ `tf.compat.v1.nn.normalize_moments` ](/api_docs/python/tf/nn/normalize_moments), [ `tf.compat.v2.nn.normalize_moments` ](/api_docs/python/tf/nn/normalize_moments)

```
 tf.nn.normalize_moments(
    counts,
    mean_ss,
    variance_ss,
    shift,
    name=None
)
 
```

#### 参数：
- **`counts`** : A  `Tensor`  containing the total count of the data (one value).
- **`mean_ss`** : A  `Tensor`  containing the mean sufficient statistics: the (possiblyshifted) sum of the elements to average over.
- **`variance_ss`** : A  `Tensor`  containing the variance sufficient statistics: the(possibly shifted) squared sum of the data to compute the variance over.
- **`shift`** : A  `Tensor`  containing the value by which the data is shifted fornumerical stability, or  `None`  if no shift was performed.
- **`name`** : Name used to scope the operations that compute the moments.


#### 返回：
Two  `Tensor`  objects:  `mean`  and  `variance` .

