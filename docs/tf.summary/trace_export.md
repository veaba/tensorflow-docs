Stops and exports the active trace as a Summary and/or profile file.
### Aliases:
- `tf.compat.v2.summary.trace_export`

```
 tf.summary.trace_export(
    name,
    step=None,
    profiler_outdir=None
)
```
Stops the trace and exports all metadata collected during the trace to the default SummaryWriter, if one has been set.
#### Args:
- `name`: A `name` for the summary to be written.
#### Raises:
