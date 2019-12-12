应用由给定参数指定的仿射变换。

**别名** : [ `tf.compat.v1.keras.preprocessing.image.apply_affine_transform` ](/api_docs/python/tf/keras/preprocessing/image/apply_affine_transform), [ `tf.compat.v2.keras.preprocessing.image.apply_affine_transform` ](/api_docs/python/tf/keras/preprocessing/image/apply_affine_transform)

```
 tf.keras.preprocessing.image.apply_affine_transform(
    x,
    theta=0,
    tx=0,
    ty=0,
    shear=0,
    zx=1,
    zy=1,
    row_axis=0,
    col_axis=1,
    channel_axis=2,
    fill_mode='nearest',
    cval=0.0,
    order=1
)
 
```

# Arguments


```
 x: 2D numpy array, single image.
θ：旋转角度，单位为度。
tx: Width shift.
ty: Heigh shift.
剪切：以度为单位的剪切角。
zx：沿x方向缩放。
zy：沿y方向缩放
row_axis: Index of axis for rows in the input image.
col_axis: Index of axis for columns in the input image.
channel_axis: Index of axis for channels in the input image.
fill_mode: Points outside the boundaries of the input
    are filled according to the given mode
    (one of `{'constant', 'nearest', 'reflect', 'wrap'}`).
cval：用于边界外点的值
    of the input if `mode='constant'`.
order: int, order of interpolation
 
```

# Returns


```
输入的转换版本。
 
```

