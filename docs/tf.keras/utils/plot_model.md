Converts a Keras model to dot format and save to a file.
### Aliases:
- `tf.compat.v1.keras.utils.plot_model`
- `tf.compat.v2.keras.utils.plot_model`

```
 tf.keras.utils.plot_model(
    model,
    to_file='model.png',
    show_shapes=False,
    show_layer_names=True,
    rankdir='TB',
    expand_nested=False,
    dpi=96
)
```
### Used in the guide:
- ``T``h``e`` ``K``e``r``a``s`` ``f``u``n``c``t``i``o``n``a``l`` ``A``P``I`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w``
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
#### Arguments:
- `model`: A Keras `model` instance
- `to_file`: File name of the plot image.
- `show_shapes`: whether to display shape information.
- `show_layer_names`: whether to display layer names.
- `rankdir`: `rankdir` argument passed to PyDot, a string specifying the format of the plot: 'TB' creates a vertical plot; 'LR' creates a horizontal plot.
- `expand_nested`: Whether to expand nested models into clusters.
- `dpi`: Dots per inch.
#### Returns:
A Jupyter notebook Image object if Jupyter is installed. This enables in-line display of the model plots in notebooks.
