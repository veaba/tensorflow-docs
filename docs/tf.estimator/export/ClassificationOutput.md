

## Class  `ClassificationOutput` 
表示分类标题的输出。

Inherits From: [ `ExportOutput` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/export/ExportOutput)

**别名** : [ `tf.compat.v1.estimator.export.ClassificationOutput` ](/api_docs/python/tf/estimator/export/ClassificationOutput), [ `tf.compat.v2.estimator.export.ClassificationOutput` ](/api_docs/python/tf/estimator/export/ClassificationOutput)

必须设置Class 或分数或两者。

The classes  `Tensor`  must provide string labels, not integer class IDs.

If only classes is set, it is interpreted as providing top-k results indescending order.

If only scores is set, it is interpreted as providing a score for every classin order of class ID.

If both classes and scores are set, they are interpreted as zipped, so eachscore corresponds to the class at the same index.  Clients should not dependon the order of the entries.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/model_utils/export_output.py#L120-L148)

```
 __init__(
    scores=None,
    classes=None
)
 
```

Constructor for  `ClassificationOutput` .

#### 参数：
- **`scores`** : A float  `Tensor`  giving scores (sometimes but not alwaysinterpretable as probabilities) for each class.  May be  `None` , butonly if  `classes`  is set.  Interpretation varies-- see class doc.
- **`classes`** : A string  `Tensor`  giving predicted class labels.  May be  `None` ,but only if  `scores`  is set.  Interpretation varies-- see class doc.


#### 加薪：
- **`ValueError`** : if neither classes nor scores is set, or one of them is not a `Tensor`  with the correct dtype.


## 属性


###  `classes` 


###  `scores` 


## 方法


###  `as_signature_def` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/model_utils/export_output.py#L158-L167)

```
 as_signature_def(receiver_tensors)
 
```

生成signaturedef proto以包含在metagraphdef中。

The SignatureDef will specify outputs as described in this ExportOutput,and will use the provided receiver_tensors as inputs.

#### 参数：
- **`receiver_tensors`** : a  `Tensor` , or a dict of string to  `Tensor` , specifyinginput nodes that will be fed.
