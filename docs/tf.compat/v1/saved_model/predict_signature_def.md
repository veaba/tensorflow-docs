从给定的输入和输出创建预测签名。

```
 tf.compat.v1.saved_model.predict_signature_def(    inputs,    outputs) 
```

This function produces signatures intended for use with the TensorFlow ServingPredict API (tensorflow_serving/apis/prediction_service.proto). This APIimposes no constraints on the input and output types.

#### 参数：
- **`inputs`** : dict of string to  `Tensor` .
- **`outputs`** : dict of string to  `Tensor` .


#### 返回：
A prediction-flavored signature_def.

#### 加薪：
- **`ValueError`** : If inputs or outputs is  `None` .
