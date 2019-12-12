

## Class  `ExportOutput` 
表示可以提供服务的模型的输出。

**别名** : [ `tf.compat.v1.estimator.export.ExportOutput` ](/api_docs/python/tf/estimator/export/ExportOutput), [ `tf.compat.v2.estimator.export.ExportOutput` ](/api_docs/python/tf/estimator/export/ExportOutput)

这些通常对应于模型头。

## 方法


###  `as_signature_def` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/model_utils/export_output.py#L42-L53)

```
 as_signature_def(receiver_tensors)
 
```

生成signaturedef proto以包含在metagraphdef中。

The SignatureDef will specify outputs as described in this ExportOutput,and will use the provided receiver_tensors as inputs.

#### 参数：
- **`receiver_tensors`** : a  `Tensor` , or a dict of string to  `Tensor` , specifyinginput nodes that will be fed.
