Returns the TF session to be used by the backend.

```
 tf.compat.v1.keras.backend.get_session(op_input_list=())
 
```

If a default TensorFlow session is available, we will return it.

Else, we will return the global Keras session assuming it matchesthe current graph.

If no global Keras session exists at this point:we will create a new global session.

Note that you can manually set the global sessionvia  `K.set_session(sess)` .

#### Arguments:
- **`op_input_list`** : An option sequence of tensors or ops, which will be usedto determine the current graph. Otherwise the default graph will beused.


#### Returns:
A TensorFlow session.

