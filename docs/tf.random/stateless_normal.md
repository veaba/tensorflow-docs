从正态分布输出确定性伪随机值。

**别名** : [ `tf.compat.v1.random.stateless_normal` ](/api_docs/python/tf/random/stateless_normal), [ `tf.compat.v2.random.stateless_normal` ](/api_docs/python/tf/random/stateless_normal)

```
 tf.random.stateless_normal(    shape,    seed,    mean=0.0,    stddev=1.0,    dtype=tf.dtypes.float32,    name=None) 
```

This is a stateless version of [ `tf.random.normal` ](https://tensorflow.google.cn/api_docs/python/tf/random/normal): if run twice with thesame seeds, it will produce the same pseudorandom numbers.  The output isconsistent across multiple runs on the same hardware (and between CPUand GPU), but may change between versions of TensorFlow or on non-CPU/GPUhardware.

#### 参数：
- **`shape`** : A 1-D integer Tensor or Python array. The shape of the output tensor.
- **`seed`** : A shape [2] integer Tensor of seeds to the random number generator.
- **`mean`** : A 0-D Tensor or Python value of type  `dtype` . The mean of the normaldistribution.
- **`stddev`** : A 0-D Tensor or Python value of type  `dtype` . The standard deviationof the normal distribution.
- **`dtype`** : The type of the output.
- **`name`** : A name for the operation (optional).


#### 返回：
由随机法值填充的指定形状的张量。

