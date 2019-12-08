Defined in generated file:  `python/ops/gen_parsing_ops.py` 

Convert JSON-encoded Example records to binary protocol buffer strings.



### Aliases:

- [ `tf.compat.v1.decode_json_example` ](/api_docs/python/tf/io/decode_json_example)

- [ `tf.compat.v1.io.decode_json_example` ](/api_docs/python/tf/io/decode_json_example)

- [ `tf.compat.v2.io.decode_json_example` ](/api_docs/python/tf/io/decode_json_example)



```
 tf.io.decode_json_example(
    json_examples,
    name=None
)
 
```

This op translates a tensor containing Example records, encoded using
the <a href="https://developers.google.cn/protocol-buffers/docs/proto3#json">standard JSON
mapping</a>,
into a tensor containing the same records encoded as binary protocol
buffers. The resulting tensor can then be fed to any of the other
Example-parsing ops.



#### Args:

- **`json_examples`** : A  `Tensor`  of type  `string` .
Each string is a JSON object serialized according to the JSON
mapping of the Example proto.

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor`  of type  `string` .

