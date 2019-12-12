均匀方差标度初始值设定项。

**别名** : [ `tf.compat.v2.initializers.he_uniform` ](/api_docs/python/tf/keras/initializers/he_uniform), [ `tf.compat.v2.keras.initializers.he_uniform` ](/api_docs/python/tf/keras/initializers/he_uniform), [ `tf.initializers.he_uniform` ](/api_docs/python/tf/keras/initializers/he_uniform)

```
 tf.keras.initializers.he_uniform(seed=None)
 
```

It draws samples from a uniform distribution within [-limit, limit]where  `limit`  is  `sqrt(6 / fan_in)` where  `fan_in`  is the number of input units in the weight tensor.

#### 参数：
- **`seed`** : A Python integer. Used to seed the random generator.


#### 返回：
初始值设定项。

#### 参考文献：
[He et al., 2015](https://www.cv-foundation.org/openaccess/content_iccv_2015/html/He_Delving_Deep_into_ICCV_2015_paper.html) # pylint: disable=line-too-long([pdf](https://www.cv-foundation.org/openaccess/content_iccv_2015/papers/He_Delving_Deep_into_ICCV_2015_paper.pdf))

