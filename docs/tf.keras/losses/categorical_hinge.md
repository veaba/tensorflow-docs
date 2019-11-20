[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/losses/categorical_hinge) |
[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/losses.py#L866-L882)  
  
  
Computes the categorical hinge loss between `y_true` and `y_pred`.

### Aliases:

  * [`tf.compat.v1.keras.losses.categorical_hinge`](/api_docs/python/tf/keras/losses/categorical_hinge)
  * [`tf.compat.v2.keras.losses.categorical_hinge`](/api_docs/python/tf/keras/losses/categorical_hinge)
  * [`tf.compat.v2.losses.categorical_hinge`](/api_docs/python/tf/keras/losses/categorical_hinge)
  * [`tf.losses.categorical_hinge`](/api_docs/python/tf/keras/losses/categorical_hinge)

    
    
    tf.keras.losses.categorical_hinge(
        y_true,
        y_pred
    )
    

#### Args:

  * **`y_true`** : The ground truth values. `y_true` values are expected to be -1 or 1. If binary (0 or 1) labels are provided they will be converted to -1 or 1.
  * **`y_pred`** : The predicted values.

#### Returns:

A tensor.

