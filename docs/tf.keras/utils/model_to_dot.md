
Convert a Keras model to dot format.
### Aliases:
- `tf.compat.v1.keras.utils.model_to_dot`
- `tf.compat.v2.keras.utils.model_to_dot`

```
 tf.keras.utils.model_to_dot(
    model,
    show_shapes=False,
    show_layer_names=True,
    rankdir='TB',
    expand_nested=False,
    dpi=96,
    subgraph=False
)
```
#### Arguments:
- `model`: A Keras `model` instance.
- `show_shapes`: whether to display shape information.
- `show_layer_names`: whether to display layer names.
- `rankdir`: `rankdir` argument passed to PyDot, a string specifying the format of the plot: 'TB' creates a vertical plot; 'LR' creates a horizontal plot.
- `expand_nested`: whether to expand nested `model`s into clusters.
- `dpi`: Dots per inch.
- `subgraph`: whether to return a `pydot.Cluster` instance.
#### Returns:

A pydot.Dot instance representing the Keras model or a pydot.Cluster instance representing nested model if subgraph=True.
#### Raises:
- `ImportError`: if graphviz or pydot are not available.
