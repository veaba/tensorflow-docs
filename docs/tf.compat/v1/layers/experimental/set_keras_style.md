Use Keras-style variable management.

```
 tf.compat.v1.layers.experimental.set_keras_style() 
```

All tf.layers and tf RNN cells created after keras style ha been enableduse Keras-style variable management.  Creating such layers with ascope= argument is disallowed, and reuse=True is disallowed.

The purpose of this function is to allow users of existing layers toslowly transition to Keras layers API without breaking existingfunctionality.

For more details, see the documentation for  `keras_style_scope` .

Note, once keras style has been set, it is set globally for the entireprogram and cannot be unset.

#### 示例：


```
 set_keras_style()

model_1)
model_2)

# model_1 and model_2 are guaranteed to create their own variables.
output_1, next_state_1 = model_1(input, state)
output_2, next_state_2 = model_2(input, state)

assert len(model_1.weights) > 0
assert len(model_2.weights) > 0
assert(model_1.weights != model_2.weights)
 
```

