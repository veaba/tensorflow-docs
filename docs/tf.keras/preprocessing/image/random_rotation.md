执行Numpy图像张量的随机旋转。

**别名** : [ `tf.compat.v1.keras.preprocessing.image.random_rotation` ](/api_docs/python/tf/keras/preprocessing/image/random_rotation), [ `tf.compat.v2.keras.preprocessing.image.random_rotation` ](/api_docs/python/tf/keras/preprocessing/image/random_rotation)

```
 tf.keras.preprocessing.image.random_rotation(
    x,
    rg,
    row_axis=1,
    col_axis=2,
    channel_axis=0,
    fill_mode='nearest',
    cval=0.0,
    interpolation_order=1
)
 
```

# Arguments


```
x：输入张量。必须是三维的。
rg: Rotation range, in degrees.
row_axis: Index of axis for rows in the input tensor.
col_axis: Index of axis for columns in the input tensor.
channel_axis: Index of axis for channels in the input tensor.
fill_mode: Points outside the boundaries of the input
    are filled according to the given mode
    (one of `{'constant', 'nearest', 'reflect', 'wrap'}`).
cval：用于边界外点的值
    of the input if `mode='constant'`.
interpolation_order: int, order of spline interpolation.
    see `ndimage.interpolation.affine_transform`
 
```

# Returns


```
旋转的numpy图像张量。
 
```

