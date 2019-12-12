禁止函数转换的修饰程序。

**别名** : [ `tf.compat.v1.autograph.experimental.do_not_convert` ](/api_docs/python/tf/autograph/experimental/do_not_convert), [ `tf.compat.v2.autograph.experimental.do_not_convert` ](/api_docs/python/tf/autograph/experimental/do_not_convert)

```
 tf.autograph.experimental.do_not_convert(func=None)
 
```

#### 参数：
- **`func`** : function to decorate.


#### 返回：
If  `func`  is not None, returns a  `Callable`  which is equivalent to `func` , but is not converted by AutoGraph.If  `func`  is None, returns a decorator that, when invoked with asingle  `func`  argument, returns a  `Callable`  equivalent to theabove case.

