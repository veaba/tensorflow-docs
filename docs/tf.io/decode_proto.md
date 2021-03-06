op将序列化协议缓冲区消息中的字段提取为张量。

**别名** : [ `tf.compat.v1.io.decode_proto` ](/api_docs/python/tf/io/decode_proto), [ `tf.compat.v2.io.decode_proto` ](/api_docs/python/tf/io/decode_proto)

```
 tf.io.decode_proto(    bytes,    message_type,    field_names,    output_types,    descriptor_source='local://',    message_format='binary',    sanitize=False,    name=None) 
```

The  `decode_proto`  op extracts fields from a serialized protocol buffersmessage into tensors.  The fields in  `field_names`  are decoded and convertedto the corresponding  `output_types`  if possible.

A  `message_type`  name must be provided to give context for the field names.The actual message descriptor can be looked up either in the linked-indescriptor pool or a filename provided by the caller using the `descriptor_source`  attribute.

Each output tensor is a dense tensor. This means that it is padded to holdthe largest number of repeated elements seen in the input minibatch. (Theshape is also padded by one to prevent zero-sized dimensions). The actualrepeat counts for each example in the minibatch can be found in the  `sizes` output. In many cases the output of  `decode_proto`  is fed immediately intotf.squeeze if missing values are not a concern. When using tf.squeeze, alwayspass the squeeze dimension explicitly to avoid surprises.

For the most part, the mapping between Proto field types and TensorFlow dtypesis straightforward. However, there are a few special cases:

- A proto field that contains a submessage or group can only be convertedto  `DT_STRING`  (the serialized submessage). This is to reduce the complexityof the API. The resulting string can be used as input to another instance ofthe decode_proto op.


- TensorFlow lacks support for unsigned integers. The ops represent uint64types as a  `DT_INT64`  with the same twos-complement bit pattern (the obviousway). Unsigned int32 values can be represented exactly by specifying type `DT_INT64` , or using twos-complement if the caller specifies  `DT_INT32`  inthe  `output_types`  attribute.


Both binary and text proto serializations are supported, and can bechosen using the  `format`  attribute.

The  `descriptor_source`  attribute selects the source of protocoldescriptors to consult when looking up  `message_type` . This may be:

- An empty string  or "local://", in which case protocol descriptors arecreated for C++ (not Python) proto definitions linked to the binary.


- A file, in which case protocol descriptors are created from the file,which is expected to contain a  `FileDescriptorSet`  serialized as a string.注意：You can build a  `descriptor_source`  file using the  `--descriptor_set_out` and  `--include_imports`  options to the protocol compiler  `protoc` .


- A "bytes://<bytes>", in which protocol descriptors are created from  `<bytes>` ,which is expected to be a  `FileDescriptorSet`  serialized as a string.</bytes>


#### 参数：
- **`bytes`** : A  `Tensor`  of type  `string` .Tensor of serialized protos with shape  `batch_shape` .
- **`message_type`** : A  `string` . Name of the proto message type to decode.
- **`field_names`** : A list of  `strings` .List of strings containing proto field names. An extension field can be decodedby using its full name, e.g. EXT_PACKAGE.EXT_FIELD_NAME.
- **`output_types`** : A list of  `tf.DTypes` .List of TF types to use for the respective field in field_names.
- **`descriptor_source`** : An optional  `string` . Defaults to  `"local://"` .Either the special value  `local://`  or a path to a file containinga serialized  `FileDescriptorSet` .
- **`message_format`** : An optional  `string` . Defaults to  `"binary"` .Either  `binary`  or  `text` .
- **`sanitize`** : An optional  `bool` . Defaults to  `False` .Whether to sanitize the result or not.
- **`name`** : A name for the operation (optional).


#### 返回：
A tuple of  `Tensor`  objects (sizes, values).

- **`sizes`** : A  `Tensor`  of type  `int32` .
- **`values`** : A list of  `Tensor`  objects of type  `output_types` .
