A transformation that scans a function across an input dataset.
### Aliases:
- tf.compat.v1.data.experimental.scan
- tf.compat.v2.data.experimental.scan

```
 tf.data.experimental.scan(
    initial_state,
    scan_func
)
```
[tf.data.Dataset.map](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#map)This transformation is a stateful relative of . In addition to mapping scan_func across the elements of the input dataset, scan() accumulates one or more state tensors, whose initial values are initial_state.

#### Args:
- initial_state: A nested structure of tensors, representing the initial state of the accumulator.
- scan_func: A function that maps (old_state, input_element) to (new_state, output_element). It must take two arguments and return a pair of nested structures of tensors. Thenew_statemust match the structure ofinitial_state`.
#### Returns:
[tf.data.Dataset.apply](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply)A Dataset transformation function, which can be passed to .

