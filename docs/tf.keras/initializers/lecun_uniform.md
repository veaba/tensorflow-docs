Lecun统一初始值设定项。

**别名** : [ `tf.compat.v2.initializers.lecun_uniform` ](/api_docs/python/tf/keras/initializers/lecun_uniform), [ `tf.compat.v2.keras.initializers.lecun_uniform` ](/api_docs/python/tf/keras/initializers/lecun_uniform), [ `tf.initializers.lecun_uniform` ](/api_docs/python/tf/keras/initializers/lecun_uniform)

```
 tf.keras.initializers.lecun_uniform(seed=None)
 
```

It draws samples from a uniform distribution within [-limit, limit]where  `limit`  is  `sqrt(3 / fan_in)` where  `fan_in`  is the number of input units in the weight tensor.

#### 参数：
- **`seed`** : A Python integer. Used to seed the random generator.


#### 返回：
初始值设定项。

#### 参考文献：
- Self-Normalizing Neural Networks,[Klambauer et al., 2017](https://papers.nips.cc/paper/6698-self-normalizing-neural-networks) # pylint: disable=line-too-long([pdf](https://papers.nips.cc/paper/6698-self-normalizing-neural-networks.pdf))
- Efficient Backprop,[Lecun et al., 1998](http://yann.lecun.com/exdb/publis/pdf/lecun-98b.pdf)
