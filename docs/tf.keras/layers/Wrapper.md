## Class Wrapper
Abstract wrapper base class.
Inherits From: `Layer`
### Aliases:
- Class `tf.compat.v1.keras.layers.Wrapper`
- Class `tf.compat.v2.keras.layers.Wrapper`
Wrappers take another layer and augment it in various ways. Do not use this class as a layer, it is only an abstract base class. Two usable wrappers are the `TimeDistributed` and `Bidirectional` wrappers.
#### Arguments:
- `layer`: The `layer` to be wrapped.
## __init__
View source

```
 __init__(
    layer,
    **kwargs
)
```
