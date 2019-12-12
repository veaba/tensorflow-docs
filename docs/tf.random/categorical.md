从分类分布中提取样本。

**别名** : [ `tf.compat.v1.random.categorical` ](/api_docs/python/tf/random/categorical), [ `tf.compat.v2.random.categorical` ](/api_docs/python/tf/random/categorical)

```
 tf.random.categorical(
    logits,
    num_samples,
    dtype=None,
    seed=None,
    name=None
)
 
```

### 在教程中使用：
- [Text generation with an RNN](https://tensorflow.google.cn/tutorials/text/text_generation)
- [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)


#### 示例：


```
 # samples has shape [1, 5], where each value is either 0 or 1 with equal
# probability.
samples = tf.random.categorical(tf.math.log([[0.5, 0.5]]), 5)
 
```

#### 参数：
- **`logits`** : 2-D Tensor with shape  `[batch_size, num_classes]` .  Each slice `[i, :]`  represents the unnormalized log-probabilities for all classes.
- **`num_samples`** : 0-D.  Number of independent samples to draw for each row slice.
- **`dtype`** : integer type to use for the output. Defaults to int64.
- **`seed`** : A Python integer. Used to create a random seed for the distribution.See [ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.
- **`name`** : Optional name for the operation.


#### 返回：
The drawn samples of shape  `[batch_size, num_samples]` .

