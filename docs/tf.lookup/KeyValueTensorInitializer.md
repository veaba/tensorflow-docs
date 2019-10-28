## Class KeyValueTensorInitializer
Table initializers given `keys` and `values` tensors.
### Aliases:
- Class `tf.compat.v1.lookup.KeyValueTensorInitializer`
- Class `tf.compat.v2.lookup.KeyValueTensorInitializer`
## __init__
View source

```
 __init__(
    keys,
    values,
    key_dtype=None,
    value_dtype=None,
    name=None
)
```
Constructs a table initializer object based on keys and values tensors.
#### Args:
- `keys`: The tensor for the `keys`.
- `values`: The tensor for the `values`.
- `key_dtype`: The `keys` data type. Used when `keys` is a python array.
- `value_dtype`: The `values` data type. Used when `values` is a python array.
- `name`: A `name` for the operation (optional).
## Properties
### key_dtype
The expected table key dtype.
### value_dtype
The expected table value dtype.
## Methods
### initialize
View source

```
 initialize(table)
```
Initializes the given `table` with `keys` and `values` tensors.
#### Args:
- `table`: The `table` to initialize.
#### Returns:
The operation that initializes the table.
#### Raises:
- `TypeError`: when the keys and values data types do not match the table key and value data types.
