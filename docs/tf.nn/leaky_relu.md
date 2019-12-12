计算leaky relu激活函数。

**别名** : [ `tf.compat.v1.nn.leaky_relu` ](/api_docs/python/tf/nn/leaky_relu), [ `tf.compat.v2.nn.leaky_relu` ](/api_docs/python/tf/nn/leaky_relu)

```
 tf.nn.leaky_relu(    features,    alpha=0.2,    name=None) 
```

Source: [Rectifier Nonlinearities Improve Neural Network Acoustic Models.AL Maas, AY Hannun, AY Ng - Proc. ICML, 2013](https://ai.stanford.edu/%7Eamaas/papers/relu_hybrid_icml2013_final.pdf).

#### 参数：
- **`features`** : A  `Tensor`  representing preactivation values. Must be one ofthe following types:  `float16` ,  `float32` ,  `float64` ,  `int32` ,  `int64` .
- **`alpha`** : Slope of the activation function at x < 0.
- **`name`** : A name for the operation (optional).


#### 返回：
激活值。

