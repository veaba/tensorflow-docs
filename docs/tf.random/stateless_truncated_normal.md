Outputs deterministic pseudorandom values, truncated normally distributed.

**别名** : [ `tf.compat.v1.random.stateless_truncated_normal` ](/api_docs/python/tf/random/stateless_truncated_normal), [ `tf.compat.v2.random.stateless_truncated_normal` ](/api_docs/python/tf/random/stateless_truncated_normal)

```
 tf.random.stateless_truncated_normal(
    shape,
    seed,
    mean=0.0,
    stddev=1.0,
    dtype=tf.dtypes.float32,
    name=None
)
 
```

This is a stateless version of [ `tf.random.truncated_normal` ](https://tensorflow.google.cn/api_docs/python/tf/random/truncated_normal): if run twice withthesame seeds, it will produce the same pseudorandom numbers.  The output isconsistent across multiple runs on the same hardware (and between CPUand GPU), but may change between versions of TensorFlow or on non-CPU/GPUhardware.

The generated values follow a normal distribution with specified mean andstandard deviation, except that values whose magnitude is more than 2 standarddeviations from the mean are dropped and re-picked.

#### 参数：
- **`shape`** : A 1-D integer Tensor or Python array. The shape of the output tensor.
- **`seed`** : A shape [2] integer Tensor of seeds to the random number generator.
- **`mean`** : A 0-D Tensor or Python value of type  `dtype` . The mean of thetruncated normal distribution.
- **`stddev`** : A 0-D Tensor or Python value of type  `dtype` . The standard deviationof the normal distribution, before truncation.
- **`dtype`** : The type of the output.
- **`name`** : A name for the operation (optional).


#### 返回：
指定形状的张量，填充随机截断的法值。

