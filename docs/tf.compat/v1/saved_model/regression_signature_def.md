Creates regression signature from given examples and predictions.

```
 tf.compat.v1.saved_model.regression_signature_def(
    examples,
    predictions
)
 
```

This function produces signatures intended for use with the TensorFlow ServingRegress API (tensorflow_serving/apis/prediction_service.proto), and soconstrains the input and output types to those allowed by TensorFlow Serving.

#### Args:
- **`examples`** : A string  `Tensor` , expected to accept serialized tf.Examples.
- **`predictions`** : A float  `Tensor` .


#### Returns:
A regression-flavored signature_def.

#### Raises:
- **`ValueError`** : If examples is  `None` .
