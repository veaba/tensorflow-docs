SoftMax激活函数转换输出，以便所有值都在

**别名** : [ `tf.compat.v1.keras.activations.softmax` ](/api_docs/python/tf/keras/activations/softmax), [ `tf.compat.v2.keras.activations.softmax` ](/api_docs/python/tf/keras/activations/softmax)

```
 tf.keras.activations.softmax(
    x,
    axis=-1
)
 
```

range (0, 1) and sum to 1. It is often used as the activation for the lastlayer of a classification network because the result could be interpreted asa probability distribution. The softmax of x is calculated byexp(x)/tf.reduce_sum(exp(x)).

#### 参数：
- **`x`** : Input tensor.
- **`axis`** : Integer, axis along which the softmax normalization is applied.


#### 返回：
Tensor, output of softmax transformation (all values are non-negative  and sum to 1).

#### 加薪：
- **`ValueError`** : In case  `dim(x) == 1` .
