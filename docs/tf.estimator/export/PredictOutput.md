

## Class  `PredictOutput` 
表示泛型预测头的输出。

Inherits From: [ `ExportOutput` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/ExportOutput)

**别名** : [ `tf.compat.v1.estimator.export.PredictOutput` ](/api_docs/python/tf/estimator/export/PredictOutput), [ `tf.compat.v2.estimator.export.PredictOutput` ](/api_docs/python/tf/estimator/export/PredictOutput)

一般预测不必是分类或回归。

Named outputs must be provided as a dict from string to  `Tensor` ,

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/model_utils/export_output.py#L211-L224)

```
 __init__(outputs)
 
```

PredictOutput的构造函数。

#### 参数：
- **`outputs`** : A  `Tensor`  or a dict of string to  `Tensor`  representing thepredictions.


#### 加薪：
- **`ValueError`** : if the outputs is not dict, or any of its keys are notstrings, or any of its values are not  `Tensor` s.


## 属性


###  `outputs` 


## 方法


###  `as_signature_def` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/model_utils/export_output.py#L230-L232)

```
 as_signature_def(receiver_tensors)
 
```

生成signaturedef proto以包含在metagraphdef中。

The SignatureDef will specify outputs as described in this ExportOutput,and will use the provided receiver_tensors as inputs.

#### 参数：
- **`receiver_tensors`** : a  `Tensor` , or a dict of string to  `Tensor` , specifyinginput nodes that will be fed.
