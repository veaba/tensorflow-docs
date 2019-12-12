用于构建SignatureDef协议缓冲区的实用程序函数。

```
 tf.compat.v1.saved_model.build_signature_def(
    inputs=None,
    outputs=None,
    method_name=None
)
 
```

#### 参数：
- **`inputs`** : Inputs of the SignatureDef defined as a proto map of string totensor info.
- **`outputs`** : Outputs of the SignatureDef defined as a proto map of string totensor info.
- **`method_name`** : Method name of the SignatureDef as a string.


#### 返回：
基于提供的参数构造的signaturedef协议缓冲区。

