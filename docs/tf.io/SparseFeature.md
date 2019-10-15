## Class SparseFeature

Configuration for parsing a sparse input feature from an Example.
### Aliases:
- Class `tf.compat.v1.SparseFeature`
- Class `tf.compat.v1.io.SparseFeature`
- Class `tf.compat.v2.io.SparseFeature`

Note, preferably use VarLenFeature (possibly in combination with a SequenceExample) in order to parse out SparseTensors instead of SparseFeature due to its simplicity.

Closely mimicking the SparseTensor that will be obtained by parsing an Example with a SparseFeature config, a SparseFeature contains a
- `value_key`: The name of key for a `Feature` in the `Example` whose parsed `Tensor` will be the resulting `SparseTensor.values`.
- `index_key`: A l`i`st of names - one for each `dim`ens`i`on `i`n the result`i`ng `SparseTensor` whose `i`nd`i`ces[`i`][`dim`] `i`nd`i`cat`i`ng the pos`i`t`i`on of the `i`-th value `i`n the `dim` `dim`ens`i`on w`i`ll be equal to the `i`-th value `i`n the `Feature` w`i`th key named `index_key`[`dim`] `i`n the `Example`.
- `size`: A l`i`st of `i`nts for the result`i`ng `SparseTensor`.dense_shape.

For example, we can represent the following 2D SparseTensor

```
 SparseTensor(indices=[[3, 1], [20, 0]],
             values=[0.5, -1.0]
             dense_shape=[100, 3])
```

with an Example input proto

```
 features {
  feature { key: "val" value { float_list { value: [ 0.5, -1.0 ] } } }
  feature { key: "ix0" value { int64_list { value: [ 3, 20 ] } } }
  feature { key: "ix1" value { int64_list { value: [ 1, 0 ] } } }
}
```

and SparseFeature config with 2 index_keys

```
 SparseFeature(index_key=["ix0", "ix1"],
              value_key="val",
              dtype=tf.float32,
              size=[100, 3])
```
#### Fields:
- `index_key`: A single string name or a list of string names of index features. For each key the underlying feature's type must be `int64` and its length must always match that of the `value_key` feature. To represent `SparseTensor`s with a `dense_shape` of `rank` higher than 1 a list of length `rank` should be used.
- `value_key`: Name of value feature. The underlying feature's type must be `dtype` and its length must always match that of all the `index_key`s' features.
- `dtype`: Data type of the `value_key` feature.
## __new__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/parsing_ops.py#L130-L132)


```
 @staticmethod
__new__(
    cls,
    index_key,
    value_key,
    dtype,
    size,
    already_sorted=False
)
```

Create new instance of SparseFeature(index_key, value_key, dtype, size, already_sorted)
## Properties
### index_key
### value_key
### dtype
### size
### already_sorted
