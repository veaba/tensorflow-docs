Compute the Leaky ReLU activation function.



### Aliases:

- [ `tf.compat.v1.nn.leaky_relu` ](/api_docs/python/tf/nn/leaky_relu)

- [ `tf.compat.v2.nn.leaky_relu` ](/api_docs/python/tf/nn/leaky_relu)



```
 tf.nn.leaky_relu(
    features,
    alpha=0.2,
    name=None
)
 
```

Source: <a href="https://ai.stanford.edu/%7Eamaas/papers/relu_hybrid_icml2013_final.pdf">Rectifier Nonlinearities Improve Neural Network Acoustic Models.
AL Maas, AY Hannun, AY Ng - Proc. ICML, 2013</a>.



#### Args:

- **`features`** : A  `Tensor`  representing preactivation values. Must be one of
the following types:  `float16` ,  `float32` ,  `float64` ,  `int32` ,  `int64` .

- **`alpha`** : Slope of the activation function at x < 0.

- **`name`** : A name for the operation (optional).



#### Returns:
The activation value.

