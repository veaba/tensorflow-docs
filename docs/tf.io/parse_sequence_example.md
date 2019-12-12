Parses a batch of  `SequenceExample`  protos.

**别名** : [ `tf.compat.v1.io.parse_sequence_example` ](/api_docs/python/tf/io/parse_sequence_example), [ `tf.compat.v2.io.parse_sequence_example` ](/api_docs/python/tf/io/parse_sequence_example)

```
 tf.io.parse_sequence_example(
    serialized,
    context_features=None,
    sequence_features=None,
    example_names=None,
    name=None
)
 
```

Parses a vector of serialized[ `SequenceExample` ](https://tensorflow.google.cn/code/tensorflow/core/example/example.proto)protos given in  `serialized` .

This op parses serialized sequence examples into a tuple of dictionaries,each mapping keys to  `Tensor`  and  `SparseTensor`  objects.The first dictionary contains mappings for keys appearing in `context_features` , and the second dictionary contains mappings for keysappearing in  `sequence_features` .

At least one of  `context_features`  and  `sequence_features`  must be providedand non-empty.

The  `context_features`  keys are associated with a  `SequenceExample`  as awhole, independent of time / frame.  In contrast, the  `sequence_features`  keysprovide a way to access variable-length data within the  `FeatureList`  sectionof the  `SequenceExample`  proto.  While the shapes of  `context_features`  valuesare fixed with respect to frame, the frame dimension (the first dimension)of  `sequence_features`  values may vary between  `SequenceExample`  protos,and even between  `feature_list`  keys within the same  `SequenceExample` .

 `context_features`  contains  `VarLenFeature`  and  `FixedLenFeature`  objects.Each  `VarLenFeature`  is mapped to a  `SparseTensor` , and each  `FixedLenFeature` is mapped to a  `Tensor` , of the specified type, shape, and default value.

 `sequence_features`  contains  `VarLenFeature`  and  `FixedLenSequenceFeature` objects. Each  `VarLenFeature`  is mapped to a  `SparseTensor` , and each `FixedLenSequenceFeature`  is mapped to a  `Tensor` , each of the specified type.The shape will be  `(B,T,) + df.dense_shape`  for  `FixedLenSequenceFeature`  `df` , where  `B`  is the batch size, and  `T`  is the length of the associated `FeatureList`  in the  `SequenceExample` . For instance, `FixedLenSequenceFeature([])`  yields a scalar 2-D  `Tensor`  of static shape `[None, None]`  and dynamic shape  `[B, T]` , while `FixedLenSequenceFeature([k])`  (for  `int k >= 1` ) yields a 3-D matrix  `Tensor` of static shape  `[None, None, k]`  and dynamic shape  `[B, T, k]` .

Like the input, the resulting output tensors have a batch dimension. Thismeans that the original per-example shapes of  `VarLenFeature` s and `FixedLenSequenceFeature` s can be lost. To handle that situation, this op alsoprovides dicts of shape tensors as part of the output. There is one dict forthe context features, and one for the feature_list features. Context featuresof type  `FixedLenFeature` s will not be present, since their shapes are alreadyknown by the caller. In situations where the input 'FixedLenFeature`s are ofdifferent lengths across examples, the shorter examples will be padded withdefault datatype values: 0 for numeric types, and the empty string for stringtypes.

Each  `SparseTensor`  corresponding to  `sequence_features`  represents a raggedvector.  Its indices are  `[time, index]` , where  `time`  is the  `FeatureList` entry and  `index`  is the value's index in the list of values associated withthat time.

 `FixedLenFeature`  entries with a  `default_value`  and  `FixedLenSequenceFeature` entries with  `allow_missing=True`  are optional; otherwise, we will fail ifthat  `Feature`  or  `FeatureList`  is missing from any example in  `serialized` .

 `example_name`  may contain a descriptive name for the corresponding serializedproto. This may be useful for debugging purposes, but it has no effect on theoutput. If not  `None` ,  `example_name`  must be a scalar.

#### 参数：
- **`serialized`** : A vector (1-D Tensor) of type string containing binaryserialized  `SequenceExample`  protos.
- **`context_features`** : A  `dict`  mapping feature keys to  `FixedLenFeature`  or `VarLenFeature`  values. These features are associated with a `SequenceExample`  as a whole.
- **`sequence_features`** : A  `dict`  mapping feature keys to `FixedLenSequenceFeature`  or  `VarLenFeature`  values. These features areassociated with data within the  `FeatureList`  section of the `SequenceExample`  proto.
- **`example_names`** : A vector (1-D Tensor) of strings (optional), the name of theserialized protos.
- **`name`** : A name for this operation (optional).


#### 返回：
A tuple of three  `dict` s, each mapping keys to  `Tensor` s and `SparseTensor` s. The first dict contains the context key/values,the second dict contains the feature_list key/values, and the final dictcontains the lengths of any dense feature_list features.

#### 加薪：
- **`ValueError`** : if any feature is invalid.
