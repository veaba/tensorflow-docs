[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L102-L119)  
---  
  
## Class `ones_initializer`

Initializer that generates tensors initialized to 1.

Inherits From:
[`Initializer`](https://tensorflow.google.cn/api_docs/python/tf/keras/initializers/Initializer)

### Aliases:

  * Class [`tf.compat.v2.initializers.Ones`](/api_docs/python/tf/ones_initializer)
  * Class [`tf.compat.v2.initializers.ones`](/api_docs/python/tf/ones_initializer)
  * Class [`tf.compat.v2.keras.initializers.Ones`](/api_docs/python/tf/ones_initializer)
  * Class [`tf.compat.v2.keras.initializers.ones`](/api_docs/python/tf/ones_initializer)
  * Class [`tf.compat.v2.ones_initializer`](/api_docs/python/tf/ones_initializer)
  * Class [`tf.initializers.Ones`](/api_docs/python/tf/ones_initializer)
  * Class [`tf.initializers.ones`](/api_docs/python/tf/ones_initializer)
  * Class [`tf.keras.initializers.Ones`](/api_docs/python/tf/ones_initializer)
  * Class [`tf.keras.initializers.ones`](/api_docs/python/tf/ones_initializer)

### Used in the guide:

  * [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)

## Methods

### `__call__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L105-L119)

    
    
    __call__(
        shape,
        dtype=tf.dtypes.float32
    )
    

Returns a tensor object initialized as specified by the initializer.

#### Args:

  * **`shape`** : Shape of the tensor.
  * **`dtype`** : Optional dtype of the tensor. Only numeric or boolean dtypes are supported.

#### Raises:

  * **`ValuesError`** : If the dtype is not numeric or boolean.

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
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L61-L67)

    
    
    get_config()
    

Returns the configuration of the initializer as a JSON-serializable dict.

#### Returns:

A JSON-serializable Python dict.

