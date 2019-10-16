
Defined in generated file: python/ops/gen_encode_proto_ops.py

The op serializes protobuf messages provided in the input tensors.
### Aliases:
- `tf.compat.v1.io.encode_proto`
- `tf.compat.v2.io.encode_proto`

```
 tf.io.encode_proto(
    sizes,
    values,
    field_names,
    message_type,
    descriptor_source='local://',
    name=None
)
```

The types of the tensors in values must match the schema for the fields specified in field_names. All the tensors in values must have a common shape prefix, batch_shape.

The sizes tensor specifies repeat counts for each field. The repeat count (last dimension) of a each tensor in values must be greater than or equal to corresponding repeat count in sizes.

A message_type name must be provided to give context for the field names. The actual message descriptor can be looked up either in the linked-in descriptor pool or a filename provided by the caller using the descriptor_source attribute.

For the most part, the mapping between Proto field types and TensorFlow dtypes is straightforward. However, there are a few special cases:
- A proto field that contains a submessage or group can only be converted to `DT_STRING` (the serialized submessage). This is to reduce the complexity of the API. The resulting string can be used as input to another instance of the decode_proto op.
- TensorFlow lacks support for unsigned integers. The ops represent uint64 types as a `DT_INT64` with the same twos-complement bit pattern (the obvious way). Unsigned int32 values can be represented exactly by specifying type `DT_INT64`, or using twos-complement if the caller specifies `DT_INT32` in the `output_types` attribute.

The descriptor_source attribute selects the source of protocol descriptors to consult when looking up message_type. This may be:
- ``A``n`` ``e``m``p``t``y`` ``s``t``r``i``n``g`` ``o``r`` ``"``l``o``c``a``l``:``/``/``"``,`` ``i``n`` ``w``h``i``c``h`` ``c``a``s``e`` ``p``r``o``t``o``c``o``l`` ``d``e``s``c``r``i``p``t``o``r``s`` ``a``r``e`` ``c``r``e``a``t``e``d`` ``f``o``r`` ``C``+``+`` ``(``n``o``t`` ``P``y``t``h``o``n``)`` ``p``r``o``t``o`` ``d``e``f``i``n``i``t``i``o``n``s`` ``l``i``n``k``e``d`` ``t``o`` ``t``h``e`` ``b``i``n``a``r``y``.``
- A file, in which case `protoc`ol descriptors are created from the file, which is expected to contain a `FileDescriptorSet` serialized as a string. NOTE: You can build a `descriptor_source` file using the `--descriptor_set_out` and `--include_imports` options to the `protoc`ol compiler `protoc`.
- A "bytes://", in which `protoc`ol descriptors are created from `<bytes>`, which is expected to be a `FileDescriptorSet` serialized as a string.
#### Args:
- `sizes`:` `A` ``Tensor`` `o`f`` ``t`y`p``e`` ``int32`.` ``Tensor`` `o`f`` ``int32`` `w`i``t``h`` ``s``h``a``p``e`` `[`b``a``t``c``h``_``s``h``a``p``e``,`` ``l``e``n``(``f``i``e``l``d``_``n``a``m``e``s``)`].
- `values`:` `A` ``l``i``s``t`` `o`f`` ``Tensor`` `o`b`j`e``c``t``s`.` `L`i``s``t`` `o`f`` ``t``e``n``s`or`s`` ``c`o`n``t``a``i``n``i``n`g` ``values`` ``f`or` ``t``h``e`` ``c`orr`e``s``p`o`n``d``i``n`g` ``f``i``e``l``d`.
- `f``i``e``l``d``_``n``a``m``e``s`:` `A` ``l``i``s``t`` `o`f`` ``s``t`r`i``n`g`s`.` `L`i``s``t`` `o`f`` ``s``t`r`i``n`g`s`` ``c`o`n``t``a``i``n``i``n`g` ``p`ro`t`o` ``f``i``e``l``d`` ``n``a``m``e``s`.
- `m``e``s``s``a`g`e``_``t`y`p``e`:` `A` ``s``t`r`i``n`g.` `N`a``m``e`` `o`f`` ``t``h``e`` ``p`ro`t`o` ``m``e``s``s``a`g`e`` ``t`y`p``e`` ``t`o` ``d``e``c`o`d``e`.
- `d``e``s``c`r`i``p``t`or`_``s`our`c``e`:` `A`n`` `o`p``t``i`o`n``a``l`` ``s``t`r`i``n`g.` `D`e``f``a`u`l``t``s`` ``t`o` ``"local://"`.
- `n``a``m``e`:` `A` ``n``a``m``e`` ``f`or` ``t``h``e`` `o`p``e`r`a``t``i`o`n`` ``(`o`p``t``i`o`n``a``l``)`.
#### Returns:

A Tensor of type string.
