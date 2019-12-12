Convert raw byte strings into tensors.

```
 tf.io.decode_raw(    input_bytes,    out_type,    little_endian=True,    fixed_length=None,    name=None) 
```

#### Args:
- **`input_bytes`** :   Each element of the input Tensor is converted to an array of bytes.
- **`out_type`** :    `DType`  of the output. Acceptable types are  `half` ,  `float` ,  `double` , `int32` ,  `uint16` ,  `uint8` ,  `int16` ,  `int8` ,  `int64` .
- **`little_endian`** :   Whether the  `input_bytes`  data is in little-endian format. Data will beconverted into host byte order if necessary.
- **`fixed_length`** :   If set, the first  `fixed_length`  bytes of each element will be converted.Data will be zero-padded or truncated to the specified length.

 `fixed_length`  must be a multiple of the size of  `out_type` . `fixed_length`  must be specified if the elements of  `input_bytes`  are ofvariable length.


- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor`  object storing the decoded bytes.

