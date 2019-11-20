[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/lookup/KeyValueTensorInitializer)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/lookup_ops.py#L415-L473)  
---|---  
  
## Class `KeyValueTensorInitializer`

Table initializers given `keys` and `values` tensors.

### Aliases:

  * Class [`tf.compat.v1.lookup.KeyValueTensorInitializer`](/api_docs/python/tf/lookup/KeyValueTensorInitializer)
  * Class [`tf.compat.v2.lookup.KeyValueTensorInitializer`](/api_docs/python/tf/lookup/KeyValueTensorInitializer)

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/lookup_ops.py#L418-L446)

    
    
    __init__(
        keys,
        values,
        key_dtype=None,
        value_dtype=None,
        name=None
    )
    

Constructs a table initializer object based on keys and values tensors.

#### Args:

  * **`keys`** : The tensor for the keys.
  * **`values`** : The tensor for the values.
  * **`key_dtype`** : The `keys` data type. Used when `keys` is a python array.
  * **`value_dtype`** : The `values` data type. Used when `values` is a python array.
  * **`name`** : A name for the operation (optional).

## Properties

### `key_dtype`

The expected table key dtype.

### `value_dtype`

The expected table value dtype.

## Methods

### `initialize`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/lookup_ops.py#L448-L473)

    
    
    initialize(table)
    

Initializes the given `table` with `keys` and `values` tensors.

#### Args:

  * **`table`** : The table to initialize.

#### Returns:

The operation that initializes the table.

#### Raises:

  * **`TypeError`** : when the keys and values data types do not match the table key and value data types.

