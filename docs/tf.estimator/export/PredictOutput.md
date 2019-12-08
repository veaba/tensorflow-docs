

## Class  `PredictOutput` 
Represents the output of a generic prediction head.

Inherits From: [ `ExportOutput` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/ExportOutput)



### Aliases:

- Class [ `tf.compat.v1.estimator.export.PredictOutput` ](/api_docs/python/tf/estimator/export/PredictOutput)

- Class [ `tf.compat.v2.estimator.export.PredictOutput` ](/api_docs/python/tf/estimator/export/PredictOutput)

A generic prediction need not be either a classification or a regression.

Named outputs must be provided as a dict from string to  `Tensor` ,



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/model_utils/export_output.py#L211-L224)



```
 __init__(outputs)
 
```

Constructor for PredictOutput.



#### Args:

- **`outputs`** : A  `Tensor`  or a dict of string to  `Tensor`  representing the
predictions.



#### Raises:

- **`ValueError`** : if the outputs is not dict, or any of its keys are not
strings, or any of its values are not  `Tensor` s.



## Properties


###  `outputs` 


## Methods


###  `as_signature_def` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/model_utils/export_output.py#L230-L232)



```
 as_signature_def(receiver_tensors)
 
```

Generate a SignatureDef proto for inclusion in a MetaGraphDef.

The SignatureDef will specify outputs as described in this ExportOutput,
and will use the provided receiver_tensors as inputs.



#### Args:

- **`receiver_tensors`** : a  `Tensor` , or a dict of string to  `Tensor` , specifying
input nodes that will be fed.

