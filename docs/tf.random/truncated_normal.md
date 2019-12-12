从截断正态分布输出随机值。

**别名** : [ `tf.compat.v1.random.truncated_normal` ](/api_docs/python/tf/random/truncated_normal), [ `tf.compat.v1.truncated_normal` ](/api_docs/python/tf/random/truncated_normal), [ `tf.compat.v2.random.truncated_normal` ](/api_docs/python/tf/random/truncated_normal)

```
 tf.random.truncated_normal(
    shape,
    mean=0.0,
    stddev=1.0,
    dtype=tf.dtypes.float32,
    seed=None,
    name=None
)
 
```

### 在指南中使用：
- [Ragged tensors](https://tensorflow.google.cn/guide/ragged_tensor)
The generated values follow a normal distribution with specified mean andstandard deviation, except that values whose magnitude is more than 2 standarddeviations from the mean are dropped and re-picked.

#### 参数：
- **`shape`** : A 1-D integer Tensor or Python array. The shape of the output tensor.
- **`mean`** : A 0-D Tensor or Python value of type  `dtype` . The mean of thetruncated normal distribution.
- **`stddev`** : A 0-D Tensor or Python value of type  `dtype` . The standard deviationof the normal distribution, before truncation.
- **`dtype`** : The type of the output.
- **`seed`** : A Python integer. Used to create a random seed for the distribution.See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed)for behavior.
- **`name`** : A name for the operation (optional).


#### 返回：
指定形状的张量，填充随机截断的法值。

