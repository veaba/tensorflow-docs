Provides a scope within which the learning phase is equal to value.
### Aliases:
- tf.compat.v1.keras.backend.learning_phase_scope
- tf.compat.v2.keras.backend.learning_phase_scope

```
 tf.keras.backend.learning_phase_scope(value)
```
The learning phase gets restored to its original value upon exiting the scope.
#### Arguments:
- value: Learning phase value, either 0 or 1 (integers).
#### Yields:
None.
#### Raises:
- ValueError: if value is neither 0 nor 1.
