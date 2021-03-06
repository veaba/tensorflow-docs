Rotate image(s) counter-clockwise by 90 degrees.

**别名** : [ `tf.compat.v1.image.rot90` ](/api_docs/python/tf/image/rot90), [ `tf.compat.v2.image.rot90` ](/api_docs/python/tf/image/rot90)

```
 tf.image.rot90(
    image,
    k=1,
    name=None
)
 
```

#### 例如：


```
 a=tf.constant([[[1],[2]],[[3],[4]]])
# rotating `a` counter clockwise by 90 degrees
a_rot=tf.image.rot90(a,k=1) #rotated `a`
print(a_rot) # [[[2],[4]],[[1],[3]]]
 
```

Args:  image: 4-D Tensor of shape  `[batch, height, width, channels]`  or 3-D Tensor    of shape  `[height, width, channels]` .  k: A scalar integer. The number of times the image is rotated by 90 degrees.  name: A name for this operation (optional).

#### 返回：
A rotated tensor of the same type and shape as  `image` .

#### 加薪：
- **`ValueError`** : if the shape of  `image`  not supported.
