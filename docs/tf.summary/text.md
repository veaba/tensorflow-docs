[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/summary/text) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorboard/tree/master/tensorboard/plugins/text/summary_v2.py)  
  
  
Write a text summary.

### Aliases:

  * [`tf.compat.v2.summary.text`](/api_docs/python/tf/summary/text)

    
    
    tf.summary.text(
        name,
        data,
        step=None,
        description=None
    )
    

#### Arguments:

  * **`name`** : A name for this summary. The summary tag used for TensorBoard will be this name prefixed by any active name scopes.
  * **`data`** : A UTF-8 string tensor value.
  * **`step`** : Explicit `int64`-castable monotonic step value for this summary. If omitted, this defaults to [`tf.summary.experimental.get_step()`](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step), which must not be None.
  * **`description`** : Optional long-form description for this summary, as a constant `str`. Markdown is supported. Defaults to empty.

#### Returns:

True on success, or false if no summary was emitted because no default summary
writer was available.

#### Raises:

  * **`ValueError`** : if a default writer exists, but no step was provided and [`tf.summary.experimental.get_step()`](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step) is None.

