[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/lookup/StaticHashTable) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/lookup_ops.py#L247-L325)  
  
  
## Class `StaticHashTable`

A generic hash table that is immutable once initialized.

### Aliases:

  * Class [`tf.compat.v2.lookup.StaticHashTable`](/api_docs/python/tf/lookup/StaticHashTable)

#### Example usage:

    
    
    keys_tensor = tf.constant([1, 2])
    vals_tensor = tf.constant([3, 4])
    input_tensor = tf.constant([1, 5])
    table = tf.lookup.StaticHashTable(
        tf.lookup.KeyValueTensorInitializer(keys_tensor, vals_tensor), -1)
    print(table.lookup(input_tensor))
    

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/lookup_ops.py#L262-L291)

    
    
    __init__(
        initializer,
        default_value,
        name=None
    )
    

Creates a non-initialized `HashTable` object.

Creates a table, the type of its keys and values are specified by the
initializer. Before using the table you will have to initialize it. After
initialization the table will be immutable.

#### Args:

  * **`initializer`** : The table initializer to use. See `HashTable` kernel for supported key and value types.
  * **`default_value`** : The value to use if a key is missing in the table.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `HashTable` object.

## Properties

### `default_value`

The default value of the table.

### `key_dtype`

The table key dtype.

### `name`

The name of the table.

### `resource_handle`

Returns the resource handle associated with this Resource.

### `value_dtype`

The table value dtype.

## Methods

### `export`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/lookup_ops.py#L309-L325)

    
    
    export(name=None)
    

Returns tensors of all keys and values in the table.

#### Args:

  * **`name`** : A name for the operation (optional).

#### Returns:

A pair of tensors with the first tensor containing all keys and the second
tensors containing all values in the table.

### `lookup`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/lookup_ops.py#L201-L236)

    
    
    lookup(
        keys,
        name=None
    )
    

Looks up `keys` in a table, outputs the corresponding values.

The `default_value` is used for keys not present in the table.

#### Args:

  * **`keys`** : Keys to look up. May be either a `SparseTensor` or dense `Tensor`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `SparseTensor` if keys are sparse, otherwise a dense `Tensor`.

#### Raises:

  * **`TypeError`** : when `keys` or `default_value` doesn't match the table data types.

### `size`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/lookup_ops.py#L189-L199)

    
    
    size(name=None)
    

Compute the number of elements in this table.

#### Args:

  * **`name`** : A name for the operation (optional).

#### Returns:

A scalar tensor containing the number of elements in this table.

