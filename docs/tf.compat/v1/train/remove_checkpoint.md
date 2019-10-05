
Removes a checkpoint given by checkpoint_prefix. (deprecated)

```
 tf.compat.v1.train.remove_checkpoint(
    checkpoint_prefix,
    checkpoint_format_version=tf.train.SaverDef.V2,
    meta_graph_suffix='meta'
)
```
#### Args:
- `checkpoint_prefix`: The prefix of a V1 or V2 checkpoint. Typically the result of `Saver.save`() or that of `tf.train.latest_checkpoint`(), regardless of sharded/non-sharded or V1/V2.
- `checkpoint_format_version`: `SaverDef.CheckpointFormatVersion`, defaults to `SaverDef.V2`.
- `meta_graph_suffix`: Suffix for `MetaGraphDef` file. Defaults to 'meta'.
