

## Class  `MaxNorm` 
最大范数权重约束。

Inherits From: [ `Constraint` ](https://tensorflow.google.cn/api_docs/python/tf/keras/constraints/Constraint)

**别名** : [ `tf.compat.v1.keras.constraints.MaxNorm` ](/api_docs/python/tf/keras/constraints/MaxNorm), [ `tf.compat.v1.keras.constraints.max_norm` ](/api_docs/python/tf/keras/constraints/MaxNorm), [ `tf.compat.v2.keras.constraints.MaxNorm` ](/api_docs/python/tf/keras/constraints/MaxNorm), [ `tf.compat.v2.keras.constraints.max_norm` ](/api_docs/python/tf/keras/constraints/MaxNorm), [ `tf.keras.constraints.max_norm` ](/api_docs/python/tf/keras/constraints/MaxNorm)

Constrains the weights incident to each hidden unitto have a norm less than or equal to a desired value.

#### 参数：
- **`m`** : the maximum norm for the incoming weights.
- **`axis`** : integer, axis along which to calculate weight norms.For instance, in a  `Dense`  layer the weight matrixhas shape  `(input_dim, output_dim)` ,set  `axis`  to  `0`  to constrain each weight vectorof length  `(input_dim,)` .In a  `Conv2D`  layer with  `data_format="channels_last"` ,the weight tensor has shape `(rows, cols, input_depth, output_depth)` ,set  `axis`  to  `[0, 1, 2]` to constrain the weights of each filter tensor of size `(rows, cols, input_depth)` .


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/constraints.py#L67-L69)

```
 __init__(
    max_value=2,
    axis=0
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/constraints.py#L71-L75)

```
 __call__(w)
 
```

作为函数调用self。

###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/constraints.py#L77-L78)

```
 get_config()
 
```

