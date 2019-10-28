Parses a batch of `SequenceExample` protos.
### Aliases:
- `tf.compat.v1.io.parse_sequence_example`
- `tf.compat.v2.io.parse_sequence_example`

```
 tf.io.parse_sequence_example(
    serialized,
    context_features=None,
    sequence_features=None,
    example_names=None,
    name=None
)
```
Parses a vector of `serialized` `SequenceExample` protos given in `serialized`.
This op parses serialized sequence examples into a tuple of dictionaries, each mapping keys to `Tensor` and `SparseTensor` objects. The first dictionary contains mappings for keys appearing in `context_features`, and the second dictionary contains mappings for keys appearing in `sequence_features`.
At least one of `context_features` and `sequence_features` must be provided and non-empty.
The `context_features` keys are associated with a `SequenceExample` as a whole, independent of time / frame. In contrast, the `sequence_features` keys provide a way to access variable-length data within the `FeatureList` section of the `SequenceExample` proto. While the shapes of `context_features` values are fixed with respect to frame, the frame dimension (the first dimension) of `sequence_features` values may vary between `SequenceExample` protos, and even between `feature_list` keys within the same `SequenceExample`.
`context_features` contains `VarLenFeature` and `FixedLenFeature` objects. Each `VarLenFeature` is mapped to a `SparseTensor`, and each `FixedLenFeature` is mapped to a `Tensor`, of the specified type, shape, and default value.
