Returns the TF session to be used by the backend.

```
 tf.compat.v1.keras.backend.get_session(op_input_list=())
```
If a default TensorFlow session is available, we will return it.
Else, we will return the global Keras session assuming it matches the current graph.
If no global Keras session exists at this point: we will create a new global session.
