[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/ctc_label_dense_to_sparse)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L5661-L5704)  
---|---  
  
Converts CTC labels from dense to sparse.

### Aliases:

  * [`tf.compat.v1.keras.backend.ctc_label_dense_to_sparse`](/api_docs/python/tf/keras/backend/ctc_label_dense_to_sparse)
  * [`tf.compat.v2.keras.backend.ctc_label_dense_to_sparse`](/api_docs/python/tf/keras/backend/ctc_label_dense_to_sparse)

    
    
    tf.keras.backend.ctc_label_dense_to_sparse(
        labels,
        label_lengths
    )
    

#### Arguments:

  * **`labels`** : dense CTC labels.
  * **`label_lengths`** : length of the labels.

#### Returns:

A sparse tensor representation of the labels.

