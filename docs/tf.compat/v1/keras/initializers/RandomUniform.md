[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/initializers.py#L100-L119)  
---  
  
## Class `RandomUniform`

Initializer that generates tensors with a uniform distribution.

Inherits From:
[`random_uniform_initializer`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/random_uniform_initializer)

### Aliases:

  * Class [`tf.compat.v1.keras.initializers.random_uniform`](/api_docs/python/tf/compat/v1/keras/initializers/RandomUniform)
  * Class [`tf.compat.v1.keras.initializers.uniform`](/api_docs/python/tf/compat/v1/keras/initializers/RandomUniform)

#### Args:

  * **`minval`** : A python scalar or a scalar tensor. Lower bound of the range of random values to generate. Defaults to -0.05.
  * **`maxval`** : A python scalar or a scalar tensor. Upper bound of the range of random values to generate. Defaults to 0.05.
  * **`seed`** : A Python integer. Used to create random seeds. See [`tf.compat.v1.set_random_seed`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.
  * **`dtype`** : The data type.

#### Returns:

A RandomUniform instance.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/initializers.py#L116-L119)

    
    
    __init__(
        minval=-0.05,
        maxval=0.05,
        seed=None,
        dtype=tf.dtypes.float32
    )
    

DEPRECATED FUNCTION ARGUMENTS

**Warning:** SOME ARGUMENTS ARE DEPRECATED: `(dtype)`. They will be removed in
a future version. Instructions for updating: Call initializer instance with
the dtype argument instead of passing it to the constructor

## Methods

### `__call__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L279-L283)

    
    
    __call__(
        shape,
        dtype=None,
        partition_info=None
    )
    

Returns a tensor object initialized as specified by the initializer.

#### Args:

  * **`shape`** : Shape of the tensor.
  * **`dtype`** : Optional dtype of the tensor. If not provided use the initializer dtype.
  * **`partition_info`** : Optional information about the possible partitioning of a tensor.

### `from_config`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L78-L97)

    
    
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
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L285-L291)

    
    
    get_config()
    

Returns the configuration of the initializer as a JSON-serializable dict.

#### Returns:

A JSON-serializable Python dict.

