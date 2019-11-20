[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L548-L612)  
---  
  
## Class `Orthogonal`

Initializer that generates an orthogonal matrix.

Inherits From:
[`Initializer`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/keras/initializers/Initializer)

### Aliases:

  * Class [`tf.compat.v1.initializers.orthogonal`](/api_docs/python/tf/compat/v1/keras/initializers/Orthogonal)
  * Class [`tf.compat.v1.keras.initializers.orthogonal`](/api_docs/python/tf/compat/v1/keras/initializers/Orthogonal)
  * Class [`tf.compat.v1.orthogonal_initializer`](/api_docs/python/tf/compat/v1/keras/initializers/Orthogonal)

If the shape of the tensor to initialize is two-dimensional, it is initialized
with an orthogonal matrix obtained from the QR decomposition of a matrix of
random numbers drawn from a normal distribution. If the matrix has fewer rows
than columns then the output will have orthogonal rows. Otherwise, the output
will have orthogonal columns.

If the shape of the tensor to initialize is more than two-dimensional, a
matrix of shape `(shape[0] * ... * shape[n - 2], shape[n - 1])` is
initialized, where `n` is the length of the shape vector. The matrix is
subsequently reshaped to give a tensor of the desired shape.

#### Args:

  * **`gain`** : multiplicative factor to apply to the orthogonal matrix
  * **`seed`** : A Python integer. Used to create random seeds. See [`tf.compat.v1.set_random_seed`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.
  * **`dtype`** : Default data type, used if no `dtype` argument is provided when calling the initializer. Only floating point types are supported.

#### References:

[Saxe et al., 2014](https://openreview.net/forum?id=_wzZwKpTDF_9C)
([pdf](https://arxiv.org/pdf/1312.6120.pdf))

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L573-L579)

    
    
    __init__(
        gain=1.0,
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
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L581-L609)

    
    
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
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L611-L612)

    
    
    get_config()
    

Returns the configuration of the initializer as a JSON-serializable dict.

#### Returns:

A JSON-serializable Python dict.

