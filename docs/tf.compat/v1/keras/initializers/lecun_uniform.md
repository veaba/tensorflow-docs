LeCun uniform initializer.

```
 tf.compat.v1.keras.initializers.lecun_uniform(seed=None) 
```

It draws samples from a uniform distribution within [-limit, limit]where  `limit`  is  `sqrt(3 / fan_in)` where  `fan_in`  is the number of input units in the weight tensor.

#### Arguments:
- **`seed`** : A Python integer. Used to seed the random generator.


#### Returns:
An initializer.

#### References:
- Self-Normalizing Neural Networks,[Klambauer et al.,2017](https://papers.nips.cc/paper/6698-self-normalizing-neural-networks)# pylint: disable=line-too-long([pdf](https://papers.nips.cc/paper/6698-self-normalizing-neural-networks.pdf))
- Efficient Backprop,[Lecun et al., 1998](http://yann.lecun.com/exdb/publis/pdf/lecun-98b.pdf)
