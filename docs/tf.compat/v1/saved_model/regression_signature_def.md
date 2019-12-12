根据给定的示例和预测创建回归签名。

```
 tf.compat.v1.saved_model.regression_signature_def(
    examples,
    predictions
)
 
```

This function produces signatures intended for use with the TensorFlow ServingRegress API (tensorflow_serving/apis/prediction_service.proto), and soconstrains the input and output types to those allowed by TensorFlow Serving.

#### 参数：
- **`examples`** : A string  `Tensor` , expected to accept serialized tf.Examples.
- **`predictions`** : A float  `Tensor` .


#### 返回：
A regression-flavored signature_def.

#### 加薪：
- **`ValueError`** : If examples is  `None` .
