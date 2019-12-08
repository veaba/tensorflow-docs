Returns loaded Delegate object.



### Aliases:

- [ `tf.compat.v1.lite.experimental.load_delegate` ](/api_docs/python/tf/lite/experimental/load_delegate)

- [ `tf.compat.v2.lite.experimental.load_delegate` ](/api_docs/python/tf/lite/experimental/load_delegate)



```
 tf.lite.experimental.load_delegate(
    library,
    options=None
)
 
```



#### Args:

- **`library`** : Name of shared library containing the
[TfLiteDelegate](https://tensorflow.google.cn/lite/performance/delegates).

- **`options`** : Dictionary of options that are required to load the delegate. All
keys and values in the dictionary should be convertible to str. Consult
the documentation of the specific delegate for required and legal options.
(default None)



#### Returns:
Delegate object.



#### Raises:

- **`ValueError`** : Delegate failed to load.

- **`RuntimeError`** : If delegate loading is used on unsupported platform.

