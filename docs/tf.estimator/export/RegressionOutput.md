

## Class  `RegressionOutput` 
表示回归头的输出。

Inherits From: [ `ExportOutput` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/ExportOutput)

**别名** : [ `tf.compat.v1.estimator.export.RegressionOutput` ](/api_docs/python/tf/estimator/export/RegressionOutput), [ `tf.compat.v2.estimator.export.RegressionOutput` ](/api_docs/python/tf/estimator/export/RegressionOutput)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/model_utils/export_output.py#L173-L185)

```
 __init__(value)
 
```

Constructor for  `RegressionOutput` .

#### 参数：
- **`value`** : a float  `Tensor`  giving the predicted values.  Required.


#### 加薪：
- **`ValueError`** : if the value is not a  `Tensor`  with dtype tf.float32.


## 属性


###  `value` 


## 方法


###  `as_signature_def` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/model_utils/export_output.py#L191-L199)

```
 as_signature_def(receiver_tensors)
 
```

生成signaturedef proto以包含在metagraphdef中。

The SignatureDef will specify outputs as described in this ExportOutput,and will use the provided receiver_tensors as inputs.

#### 参数：
- **`receiver_tensors`** : a  `Tensor` , or a dict of string to  `Tensor` , specifyinginput nodes that will be fed.
