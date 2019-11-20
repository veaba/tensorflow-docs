[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/initializers/Initializer) |
[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L47-L89)  
---|---  
  
## Class `Initializer`

Initializer base class: all initializers inherit from this class.

### Aliases:

  * Class [`tf.compat.v2.initializers.Initializer`](/api_docs/python/tf/keras/initializers/Initializer)
  * Class [`tf.compat.v2.keras.initializers.Initializer`](/api_docs/python/tf/keras/initializers/Initializer)
  * Class [`tf.initializers.Initializer`](/api_docs/python/tf/keras/initializers/Initializer)

## Methods

### `__call__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L51-L59)

    
    
    __call__(
        shape,
        dtype=None
    )
    

Returns a tensor object initialized as specified by the initializer.

#### Args:

  * **`shape`** : Shape of the tensor.
  * **`dtype`** : Optional dtype of the tensor. If not provided will return tensor of [`tf.float32`](https://tensorflow.google.cn/api_docs/python/tf#float32).

### `from_config`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L69-L89)

    
    
    @classmethod
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
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L61-L67)

    
    
    get_config()
    

Returns the configuration of the initializer as a JSON-serializable dict.

#### Returns:

A JSON-serializable Python dict.

