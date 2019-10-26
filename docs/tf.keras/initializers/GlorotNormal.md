## Class GlorotNormal
The Glorot normal initializer, also called Xavier normal initializer.
[VarianceScaling](https://tensorflow.google.cn/api_docs/python/tf/keras/initializers/VarianceScaling)Inherits From: 

### Aliases:
- Class tf.compat.v2.initializers.GlorotNormal
- Class tf.compat.v2.initializers.glorot_normal
- Class tf.compat.v2.keras.initializers.GlorotNormal
- Class tf.compat.v2.keras.initializers.glorot_normal
- Class tf.initializers.GlorotNormal
- Class tf.initializers.glorot_normal
- Class tf.keras.initializers.glorot_normal
It draws samples from a truncated normal distribution centered on 0 with stddev = sqrt(2 / (fan_in + fan_out)) where fan_in is the number of input units in the weight tensor and fan_out is the number of output units in the weight tensor.
#### Args:
- seed: A Python integer. Used to create random seeds. See tf.compat.v1.set_random_seed for behavior.
#### References:
[Glorot et al., 2010](http://proceedings.mlr.press/v9/glorot10a.html) (pdf)

## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L603-L608)


```
 __init__(seed=None)
```
Initialize self. See help(type(self)) for accurate signature.
## Methods
### __call__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L404-L437)


```
 __call__(
    shape,
    dtype=tf.dtypes.float32
)
```
Returns a tensor object initialized as specified by the initializer.
#### Args:
- shape: Shape of the tensor.
- dtype: Optional dtype of the tensor. Only floating point types are supported.
#### Raises:
- ValueError: If the dtype is not floating point
### from_config
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
- config: A Python dictionary. It will typically be the output of get_config.
#### Returns:
An Initializer instance.
### get_config
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L610-L611)


```
 get_config()
```
Returns the configuration of the initializer as a JSON-serializable dict.
#### Returns:
A JSON-serializable Python dict.
