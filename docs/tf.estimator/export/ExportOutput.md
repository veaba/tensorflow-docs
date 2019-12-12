

## Class  `ExportOutput` 
Represents an output of a model that can be served.

**Aliases** : [ `tf.compat.v1.estimator.export.ExportOutput` ](/api_docs/python/tf/estimator/export/ExportOutput), [ `tf.compat.v2.estimator.export.ExportOutput` ](/api_docs/python/tf/estimator/export/ExportOutput)

These typically correspond to model heads.

## Methods


###  `as_signature_def` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/model_utils/export_output.py#L42-L53)

```
 as_signature_def(receiver_tensors)
 
```

Generate a SignatureDef proto for inclusion in a MetaGraphDef.

The SignatureDef will specify outputs as described in this ExportOutput,and will use the provided receiver_tensors as inputs.

#### Args:
- **`receiver_tensors`** : a  `Tensor` , or a dict of string to  `Tensor` , specifyinginput nodes that will be fed.
