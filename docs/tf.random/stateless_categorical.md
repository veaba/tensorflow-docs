从类别分布中提取确定性伪随机样本。

**别名** : [ `tf.compat.v1.random.stateless_categorical` ](/api_docs/python/tf/random/stateless_categorical), [ `tf.compat.v2.random.stateless_categorical` ](/api_docs/python/tf/random/stateless_categorical)

```
 tf.random.stateless_categorical(
    logits,
    num_samples,
    seed,
    dtype=tf.dtypes.int64,
    name=None
)
 
```

This is a stateless version of  `tf.categorical` : if run twice with thesame seeds, it will produce the same pseudorandom numbers.  The output isconsistent across multiple runs on the same hardware (and between CPUand GPU), but may change between versions of TensorFlow or on non-CPU/GPUhardware.

#### 示例：


```
 # samples has shape [1, 5], where each value is either 0 or 1 with equal
# probability.
samples = tf.random.stateless_categorical(
    tf.math.log([[0.5, 0.5]]), 5, seed=[7, 17])
 
```

#### 参数：
- **`logits`** : 2-D Tensor with shape  `[batch_size, num_classes]` .  Each slice `[i, :]`  represents the unnormalized log-probabilities for all classes.
- **`num_samples`** : 0-D.  Number of independent samples to draw for each row slice.
- **`seed`** : A shape [2] integer Tensor of seeds to the random number generator.
- **`dtype`** : integer type to use for the output. Defaults to int64.
- **`name`** : Optional name for the operation.


#### 返回：
The drawn samples of shape  `[batch_size, num_samples]` .

