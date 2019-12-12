Convert JSON-encoded Example records to binary protocol buffer strings.

**别名** : [ `tf.compat.v1.decode_json_example` ](/api_docs/python/tf/io/decode_json_example), [ `tf.compat.v1.io.decode_json_example` ](/api_docs/python/tf/io/decode_json_example), [ `tf.compat.v2.io.decode_json_example` ](/api_docs/python/tf/io/decode_json_example)

```
 tf.io.decode_json_example(
    json_examples,
    name=None
)
 
```

This op translates a tensor containing Example records, encoded usingthe [standard JSONmapping](https://developers.google.cn/protocol-buffers/docs/proto3#json),into a tensor containing the same records encoded as binary protocolbuffers. The resulting tensor can then be fed to any of the otherExample-parsing ops.

#### 参数：
- **`json_examples`** : A  `Tensor`  of type  `string` .Each string is a JSON object serialized according to the JSONmapping of the Example proto.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `string` .

