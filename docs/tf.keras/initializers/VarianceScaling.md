

## Class  `VarianceScaling` 
Initializer capable of adapting its scale to the shape of weights tensors.

Inherits From: [ `Initializer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/initializers/Initializer)



### Aliases:

- Class [ `tf.compat.v2.initializers.VarianceScaling` ](/api_docs/python/tf/keras/initializers/VarianceScaling)

- Class [ `tf.compat.v2.keras.initializers.VarianceScaling` ](/api_docs/python/tf/keras/initializers/VarianceScaling)

- Class [ `tf.initializers.VarianceScaling` ](/api_docs/python/tf/keras/initializers/VarianceScaling)

With  `distribution="truncated_normal" or "untruncated_normal"` ,
samples are drawn from a truncated/untruncated normal
distribution with a mean of zero and a standard deviation (after truncation,
if used)  `stddev = sqrt(scale / n)` 
where n is:
  - number of input units in the weight tensor, if mode = "fan_in"
  - number of output units, if mode = "fan_out"
  - average of the numbers of input and output units, if mode = "fan_avg"

With  `distribution="uniform"` , samples are drawn from a uniform distribution
within [-limit, limit], with  `limit = sqrt(3 * scale / n)` .



#### Args:

- **`scale`** : Scaling factor (positive float).

- **`mode`** : One of "fan_in", "fan_out", "fan_avg".

- **`distribution`** : Random distribution to use. One of "truncated_normal",
"untruncated_normal" and  "uniform".

- **`seed`** : A Python integer. Used to create random seeds. See
[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed)
for behavior.



#### Raises:

- **`ValueError`** : In case of an invalid value for the "scale", mode" or
"distribution" arguments.



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L382-L402)



```
 __init__(
    scale=1.0,
    mode='fan_in',
    distribution='truncated_normal',
    seed=None
)
 
```

Initialize self.  See help(type(self)) for accurate signature.



## Methods


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L404-L437)



```
 __call__(
    shape,
    dtype=tf.dtypes.float32
)
 
```

Returns a tensor object initialized as specified by the initializer.



#### Args:

- **`shape`** : Shape of the tensor.

- **`dtype`** : Optional dtype of the tensor. Only floating point types are
supported.



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

- **`config`** : A Python dictionary.
It will typically be the output of  `get_config` .



#### Returns:
An Initializer instance.



###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L439-L445)



```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.



#### Returns:
A JSON-serializable Python dict.

