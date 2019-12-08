Parses a single  `Example`  proto.



### Aliases:

- [ `tf.compat.v2.io.parse_single_example` ](/api_docs/python/tf/io/parse_single_example)



```
 tf.io.parse_single_example(
    serialized,
    features,
    example_names=None,
    name=None
)
 
```



### Used in the tutorials:

- [TFRecord and tf.Example](https://tensorflow.google.cn/tutorials/load_data/tfrecord)

Similar to  `parse_example` , except:

For dense tensors, the returned  `Tensor`  is identical to the output of
 `parse_example` , except there is no batch dimension, the output shape is the
same as the shape given in  `dense_shape` .

For  `SparseTensor` s, the first (batch) column of the indices matrix is removed
(the indices matrix is a column vector), the values vector is unchanged, and
the first ( `batch_size` ) entry of the shape vector is removed (it is now a
single element vector).

One might see performance advantages by batching  `Example`  protos with
 `parse_example`  instead of using this function directly.



#### Args:

- **`serialized`** : A scalar string Tensor, a single serialized Example.
See  `_parse_single_example_raw`  documentation for more details.

- **`features`** : A  `dict`  mapping feature keys to  `FixedLenFeature`  or
 `VarLenFeature`  values.

- **`example_names`** : (Optional) A scalar string Tensor, the associated name.
See  `_parse_single_example_raw`  documentation for more details.

- **`name`** : A name for this operation (optional).



#### Returns:
A  `dict`  mapping feature keys to  `Tensor`  and  `SparseTensor`  values.



#### Raises:

- **`ValueError`** : if any feature is invalid.

