[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/random_uniform_initializer) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L219-L260)  
  
  
## Class `random_uniform_initializer`

Initializer that generates tensors with a uniform distribution.

Inherits From:
[`Initializer`](https://tensorflow.google.cn/api_docs/python/tf/keras/initializers/Initializer)

### Aliases:

  * Class [`tf.compat.v2.initializers.RandomUniform`](/api_docs/python/tf/random_uniform_initializer)
  * Class [`tf.compat.v2.keras.initializers.RandomUniform`](/api_docs/python/tf/random_uniform_initializer)
  * Class [`tf.compat.v2.random_uniform_initializer`](/api_docs/python/tf/random_uniform_initializer)
  * Class [`tf.initializers.RandomUniform`](/api_docs/python/tf/random_uniform_initializer)
  * Class [`tf.keras.initializers.RandomUniform`](/api_docs/python/tf/random_uniform_initializer)

#### Args:

  * **`minval`** : A python scalar or a scalar tensor. Lower bound of the range of random values to generate.
  * **`maxval`** : A python scalar or a scalar tensor. Upper bound of the range of random values to generate. Defaults to 1 for float types.
  * **`seed`** : A Python integer. Used to create random seeds. See [`tf.compat.v1.set_random_seed`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L232-L236)

    
    
    __init__(
        minval=-0.05,
        maxval=0.05,
        seed=None
    )
    

Initialize self. See help(type(self)) for accurate signature.

## Methods

### `__call__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L238-L253)

    
    
    __call__(
        shape,
        dtype=tf.dtypes.float32
    )
    

Returns a tensor object initialized as specified by the initializer.

#### Args:

  * **`shape`** : Shape of the tensor.
  * **`dtype`** : Optional dtype of the tensor. Only floating point and integer types are supported.

#### Raises:

  * **`ValueError`** : If the dtype is not numeric.

### `from_config`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L69-L89)

    
    
    from_config(
        cls,
        config
    )
    

Instantiates an initializer from a configuration dictionary.

#### Example:

    
    
    initializer = RandomUniform(-1, 1)
    config = initializer.get_config()
    initializer = RandomUniform.from_config(config)
    

#### Args:

  * **`config`** : A Python dictionary. It will typically be the output of `get_config`.

#### Returns:

An Initializer instance.

### `get_config`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L255-L260)

    
    
    get_config()
    

Returns the configuration of the initializer as a JSON-serializable dict.

#### Returns:

A JSON-serializable Python dict.

