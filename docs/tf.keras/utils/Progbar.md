## Class Progbar

Displays a progress bar.
### Aliases:
- Class `tf.compat.v1.keras.utils.Progbar`
- Class `tf.compat.v2.keras.utils.Progbar`
#### Arguments:
- `target`: Total number of steps expected, None if unknown.
- `width`: Progress bar `width` on screen.
- `verbose`: Verbosity mode, 0 (silent), 1 (`verbose`), 2 (semi-`verbose`)
- `stateful_metrics`: Iterable of string names of metrics that should not be averaged over time. Metrics in this list will be displayed as-is. All others will be averaged by the progbar before display.
- `interval`: Minimum visual progress update `interval` (in seconds).
- `unit_name`: Display name for step counts (usually "step" or "sample").
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/generic_utils.py#L326-L349)


```
 __init__(
    target,
    width=30,
    verbose=1,
    interval=0.05,
    stateful_metrics=None,
    unit_name='step'
)
```

Initialize self. See help(type(self)) for accurate signature.
## Methods
### add
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/generic_utils.py#L477-L478)


```
 add(
    n,
    values=None
)
```
### update
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/generic_utils.py#L351-L475)


```
 update(
    current,
    values=None
)
```

Updates the progress bar.
#### Arguments:
- `current`: Index of `current` step.
- `values`: List of tuples: (`name, value_for_last_step`). If `name` is in `stateful_metrics`, `value_for_last_step` will be displayed as-is. Else, an average of the metric over time will be displayed.
