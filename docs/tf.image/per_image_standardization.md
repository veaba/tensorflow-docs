Linearly scales each image in  `image`  to have mean 0 and variance 1.

**别名** : [ `tf.compat.v1.image.per_image_standardization` ](/api_docs/python/tf/image/per_image_standardization), [ `tf.compat.v2.image.per_image_standardization` ](/api_docs/python/tf/image/per_image_standardization)

```
 tf.image.per_image_standardization(image)
 
```

For each 3-D image  `x`  in  `image` , computes  `(x - mean) / adjusted_stddev` ,where

-  `mean`  is the average of all values in  `x` 
-  `adjusted_stddev = max(stddev, 1.0/sqrt(N))`  is capped away from 0 toprotect against division by 0 when handling uniform images
    -  `N`  is the number of elements in  `x` 
    -  `stddev`  is the standard deviation of all values in  `x` 


#### 参数：
- **`image`** : An n-D Tensor with at least 3 dimensions, the last 3 of which are thedimensions of each image.


#### 返回：
A  `Tensor`  with same shape and dtype as  `image` .

#### 加薪：
- **`ValueError`** : if the shape of 'image' is incompatible with this function.
