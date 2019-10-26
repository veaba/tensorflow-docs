Returns the learning phase flag.
### Aliases:
- tf.compat.v1.keras.backend.learning_phase
- tf.compat.v2.keras.backend.learning_phase

```
 tf.keras.backend.learning_phase()
```
The learning phase flag is a bool tensor (0 = test, 1 = train) to be passed as input to any Keras function that uses a different behavior at train time and test time.
#### Returns:
Learning phase (scalar integer tensor or Python integer).
