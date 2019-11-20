[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/signature_def_utils_impl.py#L112-L168)  
---  
  
Creates classification signature from given examples and predictions.

### Aliases:

  * [`tf.compat.v1.saved_model.signature_def_utils.classification_signature_def`](/api_docs/python/tf/compat/v1/saved_model/classification_signature_def)

    
    
    tf.compat.v1.saved_model.classification_signature_def(
        examples,
        classes,
        scores
    )
    

This function produces signatures intended for use with the TensorFlow Serving
Classify API (tensorflow_serving/apis/prediction_service.proto), and so
constrains the input and output types to those allowed by TensorFlow Serving.

#### Args:

  * **`examples`** : A string `Tensor`, expected to accept serialized tf.Examples.
  * **`classes`** : A string `Tensor`. Note that the ClassificationResponse message requires that class labels are strings, not integers or anything else.
  * **`scores`** : a float `Tensor`.

#### Returns:

A classification-flavored signature_def.

#### Raises:

  * **`ValueError`** : If examples is `None`.

