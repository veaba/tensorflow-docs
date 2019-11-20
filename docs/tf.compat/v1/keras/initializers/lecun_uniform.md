[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L1336-L1360)  
---  
  
LeCun uniform initializer.

### Aliases:

  * [`tf.compat.v1.initializers.lecun_uniform`](/api_docs/python/tf/compat/v1/keras/initializers/lecun_uniform)

    
    
    tf.compat.v1.keras.initializers.lecun_uniform(seed=None)
    

It draws samples from a uniform distribution within [-limit, limit] where
`limit` is `sqrt(3 / fan_in)` where `fan_in` is the number of input units in
the weight tensor.

#### Arguments:

  * **`seed`** : A Python integer. Used to seed the random generator.

#### Returns:

An initializer.

#### References:

  * Self-Normalizing Neural Networks, [Klambauer et al., 2017](https://papers.nips.cc/paper/6698-self-normalizing-neural-networks) # pylint: disable=line-too-long ([pdf](https://papers.nips.cc/paper/6698-self-normalizing-neural-networks.pdf))
  * Efficient Backprop, [Lecun et al., 1998](http://yann.lecun.com/exdb/publis/pdf/lecun-98b.pdf)

