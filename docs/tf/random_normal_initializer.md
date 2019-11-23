

## Class  `random_normal_initializer` 

Initializer that generates tensors with a normal distribution.

Inherits From: [ `Initializer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/initializers/Initializer)


### Aliases:
- Class [ `tf.compat.v2.initializers.RandomNormal` ](/api_docs/python/tf/random_normal_initializer)
- Class [ `tf.compat.v2.keras.initializers.RandomNormal` ](/api_docs/python/tf/random_normal_initializer)
- Class [ `tf.compat.v2.random_normal_initializer` ](/api_docs/python/tf/random_normal_initializer)
- Class [ `tf.initializers.RandomNormal` ](/api_docs/python/tf/random_normal_initializer)
- Class [ `tf.keras.initializers.RandomNormal` ](/api_docs/python/tf/random_normal_initializer)


### Used in the guide:
- [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)


### Used in the tutorials:
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)


#### Args:
- **`mean`** : a python scalar or a scalar tensor. Mean of the random valuesto generate.
- **`stddev`** : a python scalar or a scalar tensor. Standard deviation of therandom values to generate.
- **`seed`** : A Python integer. Used to create random seeds. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed)for behavior.


##  `__init__` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L277-L281)


```
__init__(
    mean=0.0,
    stddev=0.05,
    seed=None
)

```


Initialize self.  See help(type(self)) for accurate signature.


## Methods


###  `__call__` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L283-L296)


```
__call__(
    shape,
    dtype=tf.dtypes.float32
)

```


Returns a tensor object initialized as specified by the initializer.


#### Args:
- **`shape`** : Shape of the tensor.
- **`dtype`** : Optional dtype of the tensor. Only floating point types aresupported.


#### Raises:
- **`ValueError`** : If the dtype is not floating point


###  `from_config` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L69-L89)


```
from_config(
    cls,
    config
)

```


Instantiates an initializer from a configuration dictionary.


#### Example:


```
initializer = RandomUniform(-1, 1)
config = initializer.get_config()
initializer = RandomUniform.from_config(config)

```



#### Args:
- **`config`** : A Python dictionary.It will typically be the output of  `get_config` .


#### Returns:

An Initializer instance.


###  `get_config` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L298-L303)


```
get_config()

```


Returns the configuration of the initializer as a JSON-serializable dict.


#### Returns:

A JSON-serializable Python dict.
