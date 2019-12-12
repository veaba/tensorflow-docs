计算给定符号形状的广播形状。

**别名** : [ `tf.compat.v1.broadcast_dynamic_shape` ](/api_docs/python/tf/broadcast_dynamic_shape), [ `tf.compat.v2.broadcast_dynamic_shape` ](/api_docs/python/tf/broadcast_dynamic_shape)

```
 tf.broadcast_dynamic_shape(
    shape_x,
    shape_y
)
 
```

When shape_x and shape_y are Tensors representing shapes (i.e. the result ofcalling tf.shape on another Tensor) this computes a Tensor which is the shapeof the result of a broadcasting op applied in tensors of shapes shape_x andshape_y.

For example, if shape_x is [1, 2, 3] and shape_y is [5, 1, 3], the result is aTensor whose value is [5, 2, 3].

This is useful when validating the result of a broadcasting operation when thetensors do not have statically known shapes.

#### 参数：
- **`shape_x`** : A rank 1 integer  `Tensor` , representing the shape of x.
- **`shape_y`** : A rank 1 integer  `Tensor` , representing the shape of y.


#### 返回：
A rank 1 integer  `Tensor`  representing the broadcasted shape.

