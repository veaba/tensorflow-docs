将python实体转换为tensorflow图。

```
 tf.autograph.to_graph(    entity,    recursive=True,    experimental_optional_features=None) 
```

Also see: [ `tf.autograph.to_code` ](https://tensorflow.google.cn/api_docs/python/tf/autograph/to_code), [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function).

Unlike [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function),  `to_graph`  is a low-level transpiler that convertsPython code to TensorFlow graph code. It does not implement any caching,variable management or create any actual ops, and is best used where greatercontrol over the generated TensorFlow graph is desired. Another differencefrom [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function) is that  `to_graph`  will not wrap the graph into aTensorFlow function or a Python callable. Internally, [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function) uses `to_graph` .

*Example Usage*

```
   def foo(x):
    if x > 0:
      y = x * x
    else:
      y = -x
    return y

  converted_foo = to_graph(foo)

  x = tf.constant(1)
  y = converted_foo(x)  # converted_foo is a TensorFlow Op-like.
  assert is_tensor(y)
 
```

Supported Python entities include:  * functions  * classes  * object methods

使用转换后的代码将函数转换为新函数。

Classes are converted by generating a new class whose methods use convertedcode.

Methods are converted into unbound function that have an additional firstargument called  `self` .

#### 参数：
- **`entity`** : Python callable or class to convert.
- **`recursive`** : Whether to recursively convert any functions that the convertedfunction may call.
- **`experimental_optional_features`** :  `None` , a tuple of, or a single[ `tf.autograph.experimental.Feature` ](https://tensorflow.google.cn/api_docs/python/tf/autograph/experimental/Feature) value. Controls the use of optionalfeatures in the conversion process.


#### 返回：
Same as  `entity` , the converted Python function or class.

#### 加薪：
- **`ValueError`** : If the entity could not be converted.
