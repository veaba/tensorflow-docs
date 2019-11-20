[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/data/experimental/scan) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/scan_ops.py#L143-L167)  
---|---  
  
A transformation that scans a function across an input dataset.

### Aliases:

  * [`tf.compat.v1.data.experimental.scan`](/api_docs/python/tf/data/experimental/scan)
  * [`tf.compat.v2.data.experimental.scan`](/api_docs/python/tf/data/experimental/scan)

    
    
    tf.data.experimental.scan(
        initial_state,
        scan_func
    )
    

This transformation is a stateful relative of
[`tf.data.Dataset.map`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#map).
In addition to mapping `scan_func` across the elements of the input dataset,
`scan()` accumulates one or more state tensors, whose initial values are
`initial_state`.

#### Args:

  * **`initial_state`** : A nested structure of tensors, representing the initial state of the accumulator.
  * **`scan_func`** : A function that maps `(old_state, input_element)` to `(new_state, output_element). It must take two arguments and return a pair of nested structures of tensors. The`new_state`must match the structure of`initial_state`.

#### Returns:

A `Dataset` transformation function, which can be passed to
[`tf.data.Dataset.apply`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

