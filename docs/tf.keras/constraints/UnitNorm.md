

## Class  `UnitNorm` 
将关联到每个隐藏单元的权重约束为具有单元范数。

Inherits From: [ `Constraint` ](https://tensorflow.google.cn/api_docs/python/tf/keras/constraints/Constraint)

**别名** : [ `tf.compat.v1.keras.constraints.UnitNorm` ](/api_docs/python/tf/keras/constraints/UnitNorm), [ `tf.compat.v1.keras.constraints.unit_norm` ](/api_docs/python/tf/keras/constraints/UnitNorm), [ `tf.compat.v2.keras.constraints.UnitNorm` ](/api_docs/python/tf/keras/constraints/UnitNorm), [ `tf.compat.v2.keras.constraints.unit_norm` ](/api_docs/python/tf/keras/constraints/UnitNorm), [ `tf.keras.constraints.unit_norm` ](/api_docs/python/tf/keras/constraints/UnitNorm)

#### 参数：
- **`axis`** : integer, axis along which to calculate weight norms.For instance, in a  `Dense`  layer the weight matrixhas shape  `(input_dim, output_dim)` ,set  `axis`  to  `0`  to constrain each weight vectorof length  `(input_dim,)` .In a  `Conv2D`  layer with  `data_format="channels_last"` ,the weight tensor has shape `(rows, cols, input_depth, output_depth)` ,set  `axis`  to  `[0, 1, 2]` to constrain the weights of each filter tensor of size `(rows, cols, input_depth)` .


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/constraints.py#L108-L109)

```
 __init__(axis=0)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/constraints.py#L111-L115)

```
 __call__(w)
 
```

作为函数调用self。

###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/constraints.py#L117-L118)

```
 get_config()
 
```

