The op serializes protobuf messages provided in the input tensors.

**Aliases** : [ `tf.compat.v1.io.encode_proto` ](/api_docs/python/tf/io/encode_proto), [ `tf.compat.v2.io.encode_proto` ](/api_docs/python/tf/io/encode_proto)

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

The types of the tensors in  `values`  must match the schema for the fieldsspecified in  `field_names` . All the tensors in  `values`  must have a commonshape prefix, *batch_shape*.

The  `sizes`  tensor specifies repeat counts for each field.  The repeat count(last dimension) of a each tensor in  `values`  must be greater than or equalto corresponding repeat count in  `sizes` .

A  `message_type`  name must be provided to give context for the field names.The actual message descriptor can be looked up either in the linked-indescriptor pool or a filename provided by the caller using the `descriptor_source`  attribute.

For the most part, the mapping between Proto field types and TensorFlow dtypesis straightforward. However, there are a few special cases:

- A proto field that contains a submessage or group can only be convertedto  `DT_STRING`  (the serialized submessage). This is to reduce the complexityof the API. The resulting string can be used as input to another instance ofthe decode_proto op.


- TensorFlow lacks support for unsigned integers. The ops represent uint64types as a  `DT_INT64`  with the same twos-complement bit pattern (the obviousway). Unsigned int32 values can be represented exactly by specifying type `DT_INT64` , or using twos-complement if the caller specifies  `DT_INT32`  inthe  `output_types`  attribute.


The  `descriptor_source`  attribute selects the source of protocoldescriptors to consult when looking up  `message_type` . This may be:

- An empty string  or "local://", in which case protocol descriptors arecreated for C++ (not Python) proto definitions linked to the binary.


- A file, in which case protocol descriptors are created from the file,which is expected to contain a  `FileDescriptorSet`  serialized as a string.NOTE: You can build a  `descriptor_source`  file using the  `--descriptor_set_out` and  `--include_imports`  options to the protocol compiler  `protoc` .


- A "bytes://<bytes>", in which protocol descriptors are created from  `<bytes>` ,which is expected to be a  `FileDescriptorSet`  serialized as a string.</bytes>


#### Args:
- **`sizes`** : A  `Tensor`  of type  `int32` .Tensor of int32 with shape  `[batch_shape, len(field_names)]` .
- **`values`** : A list of  `Tensor`  objects.List of tensors containing values for the corresponding field.
- **`field_names`** : A list of  `strings` .List of strings containing proto field names.
- **`message_type`** : A  `string` . Name of the proto message type to decode.
- **`descriptor_source`** : An optional  `string` . Defaults to  `"local://"` .
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor`  of type  `string` .

