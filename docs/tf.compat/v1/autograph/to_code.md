Similar to  `to_graph` , but returns Python source code as a string.

```
 tf.compat.v1.autograph.to_code(
    entity,
    recursive=True,
    arg_values=None,
    arg_types=None,
    indentation='  ',
    experimental_optional_features=None
)
 
```

Also see: [ `tf.autograph.to_graph` ](https://tensorflow.google.cn/api_docs/python/tf/autograph/to_graph).

 `to_graph`  returns the Python source code that can be used to generate aTensorFlow graph that is functionally identical to the input Python code.

#### 参数：
- **`entity`** : Python callable or class to convert.
- **`recursive`** : Whether to recursively convert any functions that the convertedfunction may call.
- **`arg_values`** : Deprecated.
- **`arg_types`** : Deprecated.
- **`indentation`** : Deprecated.
- **`experimental_optional_features`** :  `None` , a tuple of, or a single[ `tf.autograph.experimental.Feature` ](https://tensorflow.google.cn/api_docs/python/tf/autograph/experimental/Feature) value. Controls the use of optionalfeatures in the conversion process.


#### 返回：
转换后的代码为字符串。

