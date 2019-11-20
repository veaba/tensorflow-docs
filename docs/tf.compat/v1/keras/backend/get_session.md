[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/backend.py#L465-L492)  
---  
  
Returns the TF session to be used by the backend.

    
    
    tf.compat.v1.keras.backend.get_session(op_input_list=())
    

If a default TensorFlow session is available, we will return it.

Else, we will return the global Keras session assuming it matches the current
graph.

If no global Keras session exists at this point: we will create a new global
session.

Note that you can manually set the global session via `K.set_session(sess)`.

#### Arguments:

  * **`op_input_list`** : An option sequence of tensors or ops, which will be used to determine the current graph. Otherwise the default graph will be used.

#### Returns:

A TensorFlow session.

