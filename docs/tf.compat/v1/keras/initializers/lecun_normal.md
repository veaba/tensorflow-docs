Lecun标准初始值设定项。

```
 tf.compat.v1.keras.initializers.lecun_normal(seed=None)
 
```

It draws samples from a truncated normal distribution centered on 0with standard deviation (after truncation) given by `stddev = sqrt(1 / fan_in)`  where  `fan_in`  is the number ofinput units in the weight tensor.

#### 参数：
- **`seed`** : A Python integer. Used to seed the random generator.


#### 返回：
初始值设定项。

#### 参考文献：
- Self-Normalizing Neural Networks,[Klambauer et al.,2017](https://papers.nips.cc/paper/6698-self-normalizing-neural-networks)# pylint: disable=line-too-long([pdf](https://papers.nips.cc/paper/6698-self-normalizing-neural-networks.pdf))
- Efficient Backprop,[Lecun et al., 1998](http://yann.lecun.com/exdb/publis/pdf/lecun-98b.pdf)
