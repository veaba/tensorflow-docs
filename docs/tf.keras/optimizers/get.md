Retrieves a Keras Optimizer instance.
### Aliases:
- `tf.compat.v1.keras.optimizers.get`
- `tf.compat.v2.keras.optimizers.get`
- `tf.compat.v2.optimizers.get`
- `tf.optimizers.get`

```
 tf.keras.optimizers.get(identifier)
```
#### Arguments:
- `identifier`: Optimizer `identifier`, one of
String: name of an optimizer
Dictionary: configuration dictionary. - Keras Optimizer instance (it will be returned unchanged). - TensorFlow Optimizer instance (it will be wrapped as a Keras Optimizer).
- ``S``t``r``i``n``g``:`` ``n``a``m``e`` ``o``f`` ``a``n`` ``o``p``t``i``m``i``z``e``r``
- ``D``i``c``t``i``o``n``a``r``y``:`` ``c``o``n``f``i``g``u``r``a``t``i``o``n`` ``d``i``c``t``i``o``n``a``r``y``.`` ``-`` ``K``e``r``a``s`` ``O``p``t``i``m``i``z``e``r`` ``i``n``s``t``a``n``c``e`` ``(``i``t`` ``w``i``l``l`` ``b``e`` ``r``e``t``u``r``n``e``d`` ``u``n``c``h``a``n``g``e``d``)``.`` ``-`` ``T``e``n``s``o``r``F``l``o``w`` ``O``p``t``i``m``i``z``e``r`` ``i``n``s``t``a``n``c``e`` ``(``i``t`` ``w``i``l``l`` ``b``e`` ``w``r``a``p``p``e``d`` ``a``s`` ``a`` ``K``e``r``a``s`` ``O``p``t``i``m``i``z``e``r``)``.``
#### Returns:
A Keras Optimizer instance.
#### Raises:
- `ValueError`: If `identifier` cannot be interpreted.
