返回加载的委托对象。

**别名** : [ `tf.compat.v1.lite.experimental.load_delegate` ](/api_docs/python/tf/lite/experimental/load_delegate), [ `tf.compat.v2.lite.experimental.load_delegate` ](/api_docs/python/tf/lite/experimental/load_delegate)

```
 tf.lite.experimental.load_delegate(    library,    options=None) 
```

#### 参数：
- **`library`** : Name of shared library containing the[TfLiteDelegate](https://tensorflow.google.cn/lite/performance/delegates).
- **`options`** : Dictionary of options that are required to load the delegate. Allkeys and values in the dictionary should be convertible to str. Consultthe documentation of the specific delegate for required and legal options.(default None)


#### 返回：
委托对象。

#### 加薪：
- **`ValueError`** : Delegate failed to load.
- **`RuntimeError`** : If delegate loading is used on unsupported platform.
