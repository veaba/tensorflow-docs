乙状结肠。

**别名** : [ `tf.compat.v1.keras.activations.sigmoid` ](/api_docs/python/tf/keras/activations/sigmoid), [ `tf.compat.v2.keras.activations.sigmoid` ](/api_docs/python/tf/keras/activations/sigmoid)

```
 tf.keras.activations.sigmoid(x)
 
```

Applies the sigmoid activation function. The sigmoid function is defined as1 divided by (1 + exp(-x)). It's curve is like an "S" and is like a smoothedversion of the Heaviside (Unit Step Function) function. For small values(<-5) the sigmoid returns a value close to zero and for larger values (>5)the result of the function gets close to 1.Arguments:    x: A tensor or variable.

#### 返回：
张量

乙状结肠激活功能。

#### 参数：
- **`x`** : Input tensor.


#### 返回：
The sigmoid activation:  `(1.0 / (1.0 + exp(-x)))` .

