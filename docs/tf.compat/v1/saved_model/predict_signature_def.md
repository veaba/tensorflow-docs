Creates prediction signature from given inputs and outputs.

```
 tf.compat.v1.saved_model.predict_signature_def(    inputs,    outputs) 
```

This function produces signatures intended for use with the TensorFlow ServingPredict API (tensorflow_serving/apis/prediction_service.proto). This APIimposes no constraints on the input and output types.

#### Args:
- **`inputs`** : dict of string to  `Tensor` .
- **`outputs`** : dict of string to  `Tensor` .


#### Returns:
A prediction-flavored signature_def.

#### Raises:
- **`ValueError`** : If inputs or outputs is  `None` .
