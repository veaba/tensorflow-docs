## Class Callback
Abstract base class used to build new callbacks.
### Aliases:
- Class `tf.compat.v1.keras.callbacks.Callback`
- Class `tf.compat.v2.keras.callbacks.Callback`
#### Attributes:
- `params`: dict. Training parameters (eg. verbosity, batch size, number of epochs...).
- `model`: instance of `keras.models.Model`. Reference of the `model` being trained.
- `validation_data`: Deprecated. Do not use.
The `logs` dictionary that callback methods take as argument will contain keys for quantities relevant to the current batch or epoch.
