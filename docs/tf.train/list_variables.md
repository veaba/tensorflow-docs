Returns list of all variables in the checkpoint.
### Aliases:
- `tf.compat.v1.train.list_variables`
- `tf.compat.v2.train.list_variables`

```
 tf.train.list_variables(ckpt_dir_or_file)
```
### Used in the guide:
- ``T``r``a``i``n``i``n``g`` ``c``h``e``c``k``p``o``i``n``t``s``
#### Args:
- `ckpt_dir_or_file`: Directory with checkpoints file or path to checkpoint.
#### Returns:
List of tuples `name, shape)`.
