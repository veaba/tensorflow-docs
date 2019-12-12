指数线性单位。

**别名** : [ `tf.compat.v1.keras.activations.elu` ](/api_docs/python/tf/keras/activations/elu), [ `tf.compat.v2.keras.activations.elu` ](/api_docs/python/tf/keras/activations/elu)

```
 tf.keras.activations.elu(
    x,
    alpha=1.0
)
 
```

#### 参数：
- **`x`** : Input tensor.
- **`alpha`** : A scalar, slope of negative section.


#### 返回：
The exponential linear activation:  `x`  if  `x > 0`  and   `alpha * (exp(x)-1)`  if  `x < 0` .

#### 参考：
- [Fast and Accurate Deep Network Learning by ExponentialLinear Units (ELUs)](https://arxiv.org/abs/1511.07289)
