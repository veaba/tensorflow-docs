[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/backend/learning_phase) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L269-L302)  
---|---  
  
Returns the learning phase flag.

### Aliases:

  * [`tf.compat.v1.keras.backend.learning_phase`](/api_docs/python/tf/keras/backend/learning_phase)
  * [`tf.compat.v2.keras.backend.learning_phase`](/api_docs/python/tf/keras/backend/learning_phase)

    
    
    tf.keras.backend.learning_phase()
    

The learning phase flag is a bool tensor (0 = test, 1 = train) to be passed as
input to any Keras function that uses a different behavior at train time and
test time.

#### Returns:

Learning phase (scalar integer tensor or Python integer).

