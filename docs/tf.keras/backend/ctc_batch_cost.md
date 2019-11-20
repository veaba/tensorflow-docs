[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/ctc_batch_cost) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L5707-L5736)  
  
  
Runs CTC loss algorithm on each batch element.

### Aliases:

  * [`tf.compat.v1.keras.backend.ctc_batch_cost`](/api_docs/python/tf/keras/backend/ctc_batch_cost)
  * [`tf.compat.v2.keras.backend.ctc_batch_cost`](/api_docs/python/tf/keras/backend/ctc_batch_cost)

    
    
    tf.keras.backend.ctc_batch_cost(
        y_true,
        y_pred,
        input_length,
        label_length
    )
    

#### Arguments:

  * **`y_true`** : tensor `(samples, max_string_length)` containing the truth labels.
  * **`y_pred`** : tensor `(samples, time_steps, num_categories)` containing the prediction, or output of the softmax.
  * **`input_length`** : tensor `(samples, 1)` containing the sequence length for each batch item in `y_pred`.
  * **`label_length`** : tensor `(samples, 1)` containing the sequence length for each batch item in `y_true`.

#### Returns:

Tensor with shape (samples,1) containing the CTC loss of each element.

