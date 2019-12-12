根据已知形状计算广播的形状。

**别名** : [ `tf.compat.v1.broadcast_static_shape` ](/api_docs/python/tf/broadcast_static_shape), [ `tf.compat.v2.broadcast_static_shape` ](/api_docs/python/tf/broadcast_static_shape)

```
 tf.broadcast_static_shape(
    shape_x,
    shape_y
)
 
```

When shape_x and shape_y are fully known TensorShapes this computes aTensorShape which is the shape of the result of a broadcasting op applied intensors of shapes shape_x and shape_y.

For example, if shape_x is [1, 2, 3] and shape_y is [5, 1, 3], the result is aTensorShape whose value is [5, 2, 3].

This is useful when validating the result of a broadcasting operation when thetensors have statically known shapes.

#### 参数：
- **`shape_x`** : A  `TensorShape` 
- **`shape_y`** : A  `TensorShape` 


#### 返回：
A  `TensorShape`  representing the broadcasted shape.

#### 加薪：
- **`ValueError`** : If the two shapes can not be broadcasted.
