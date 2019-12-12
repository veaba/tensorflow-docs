

## Class  `StaticVocabularyTable` 
String to Id table wrapper that assigns out-of-vocabulary keys to buckets.

Inherits From: [ `StaticVocabularyTable` ](https://tensorflow.google.cn/api_docs/python/tf/lookup/StaticVocabularyTable)

For example, if an instance of  `StaticVocabularyTable`  is initialized with astring-to-id initializer that maps:

-  `emerson -> 0` 
-  `lake -> 1` 
-  `palmer -> 2` 
The  `Vocabulary`  object will performs the following mapping:

-  `emerson -> 0` 
-  `lake -> 1` 
-  `palmer -> 2` 
-  `<other term> -> bucket_id` , where bucket_id will be between  `3`  and `3 + num_oov_buckets - 1` , calculated by: `hash(<term>) % num_oov_buckets + vocab_size` 
If input_tensor is  `["emerson", "lake", "palmer", "king", "crimson"]` ,the lookup result is  `[0, 1, 2, 4, 7]` .

If  `initializer`  is None, only out-of-vocabulary buckets are used.

#### Example usage:


```
 num_oov_buckets = 3
input_tensor = tf.constant(["emerson", "lake", "palmer", "king", "crimnson"])
table = tf.lookup.StaticVocabularyTable(
    tf.TextFileIdTableInitializer(filename), num_oov_buckets)
out = table.lookup(input_tensor).
table.init.run()
print(out.eval())
 
```

The hash function used for generating out-of-vocabulary buckets ID isFingerprint64.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/lookup_ops.py#L1077-L1136)

```
 __init__(
    initializer,
    num_oov_buckets,
    lookup_key_dtype=None,
    name=None
)
 
```

Construct a  `StaticVocabularyTable`  object.

#### Args:
- **`initializer`** : A TableInitializerBase object that contains the data used toinitialize the table. If None, then we only use out-of-vocab buckets.
- **`num_oov_buckets`** : Number of buckets to use for out-of-vocabulary keys. Mustbe greater than zero.
- **`lookup_key_dtype`** : Data type of keys passed to  `lookup` . Defaults to `initializer.key_dtype`  if  `initializer`  is specified, otherwise[ `tf.string` ](https://tensorflow.google.cn/api_docs/python/tf#string). Must be string or integer, and must be castable to `initializer.key_dtype` .
- **`name`** : A name for the operation (optional).


#### Raises:
- **`ValueError`** : when  `num_oov_buckets`  is not positive.
- **`TypeError`** : when lookup_key_dtype or initializer.key_dtype are notinteger or string. Also when initializer.value_dtype != int64.


## Properties


###  `initializer` 


###  `key_dtype` 
The table key dtype.

###  `name` 
The name of the table.

###  `resource_handle` 
Returns the resource handle associated with this Resource.

###  `value_dtype` 
The table value dtype.

## Methods


###  `lookup` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/lookup_ops.py#L1168-L1207)

```
 lookup(
    keys,
    name=None
)
 
```

Looks up  `keys`  in the table, outputs the corresponding values.

It assigns out-of-vocabulary keys to buckets based in their hashes.

#### Args:
- **`keys`** : Keys to look up. May be either a  `SparseTensor`  or dense  `Tensor` .
- **`name`** : Optional name for the op.


#### Returns:
A  `SparseTensor`  if keys are sparse, otherwise a dense  `Tensor` .

#### Raises:
- **`TypeError`** : when  `keys`  doesn't match the table key data type.


###  `size` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/lookup_ops.py#L1159-L1166)

```
 size(name=None)
 
```

Compute the number of elements in this table.

