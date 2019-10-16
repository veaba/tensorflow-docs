
Converts a class vector (integers) to binary class matrix.
### Aliases:
- `tf.compat.v1.keras.utils.to_categorical`
- `tf.compat.v2.keras.utils.to_categorical`

```
 tf.keras.utils.to_categorical(
    y,
    num_classes=None,
    dtype='float32'
)
```
### Used in the guide:
- ``T``h``e`` ``K``e``r``a``s`` ``f``u``n``c``t``i``o``n``a``l`` ``A``P``I`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w``

E.g. for use with categorical_crossentropy.
#### Arguments:
- `y`: class vector to be converted into a matrix (integers from 0 to num_classes).
- `num_classes`: total number of classes.
- `dtype`: The data t`y`pe expected b`y` the input. Default: `'float32'`.
#### Returns:

A binary matrix representation of the input. The classes axis is placed last.
