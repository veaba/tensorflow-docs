根据给定的示例和预测创建分类签名。

```
 tf.compat.v1.saved_model.classification_signature_def(    examples,    classes,    scores) 
```

This function produces signatures intended for use with the TensorFlow ServingClassify API (tensorflow_serving/apis/prediction_service.proto), and soconstrains the input and output types to those allowed by TensorFlow Serving.

#### 参数：
- **`examples`** : A string  `Tensor` , expected to accept serialized tf.Examples.
- **`classes`** : A string  `Tensor` .  Note that the ClassificationResponse messagerequires that class labels are strings, not integers or anything else.
- **`scores`** : a float  `Tensor` .


#### 返回：
A classification-flavored signature_def.

#### 加薪：
- **`ValueError`** : If examples is  `None` .
