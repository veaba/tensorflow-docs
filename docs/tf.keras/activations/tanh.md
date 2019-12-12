双曲正切（tanh）激活函数。

**别名** : [ `tf.compat.v1.keras.activations.tanh` ](/api_docs/python/tf/keras/activations/tanh), [ `tf.compat.v2.keras.activations.tanh` ](/api_docs/python/tf/keras/activations/tanh)

```
 tf.keras.activations.tanh(x)
 
```

#### 例如：


```
 # Constant 1-D tensor populated with value list.
a = tf.constant([-3.0,-1.0, 0.0,1.0,3.0], dtype = tf.float32)
b = tf.keras.activations.tanh(a) #[-0.9950547,-0.7615942,
0.,0.7615942,0.9950547]
 
```

Arguments:    x: Input tensor.

#### 返回：
A tensor of same shape and dtype of input  `x` .The tanh activation:  `tanh(x) = sinh(x)/cosh(x) = ((exp(x) -exp(-x))/(exp(x) + exp(-x)))` .

