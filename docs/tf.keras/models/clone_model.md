Clone any `Model` instance.
### Aliases:
- `tf.compat.v1.keras.models.clone_model`
- `tf.compat.v2.keras.models.clone_model`

```
 tf.keras.models.clone_model(
    model,
    input_tensors=None,
    clone_function=None
)
```
Model cloning is similar to calling a model on new inputs, except that it creates new layers (and thus new weights) instead of sharing the weights of the existing layers.
#### Arguments:
- `model`: Instance of `Model` (could be a functional `model` or a Sequential `model`).
- `input_tensors`: optional list of input tensors or InputLayer objects to build the model upon. If not provided, placeholders will be created.
#### Returns:
An instance of `Model` reproducing the behavior of the original model, on top of new inputs tensors, using newly instantiated weights. The cloned model might behave differently from the original model if a custom clone_function modifies the layer.
#### Raises:
- `ValueError`: in case of invalid `model` argument value.
