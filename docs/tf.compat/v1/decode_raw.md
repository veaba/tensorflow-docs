Convert raw byte strings into tensors. (deprecated arguments)

```
 tf.compat.v1.decode_raw(    input_bytes=None,    out_type=None,    little_endian=True,    name=None,    bytes=None) 
```


**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(bytes)` . They will be removed in a future version.Instructions for updating:bytes is deprecated, use input_bytes instead


#### Args:
- **`input_bytes`** :   Each element of the input Tensor is converted to an array of bytes.
- **`out_type`** :    `DType`  of the output. Acceptable types are  `half` ,  `float` ,  `double` , `int32` ,  `uint16` ,  `uint8` ,  `int16` ,  `int8` ,  `int64` .
- **`little_endian`** :   Whether the  `input_bytes`  data is in little-endian format. Data will beconverted into host byte order if necessary.
- **`name`** : A name for the operation (optional).
- **`bytes`** : Deprecated parameter. Use  `input_bytes`  instead.


#### Returns:
A  `Tensor`  object storing the decoded bytes.

