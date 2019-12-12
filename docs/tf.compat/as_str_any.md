Converts input to  `str`  type.

**别名** : [ `tf.compat.v1.compat.as_str_any` ](/api_docs/python/tf/compat/as_str_any), [ `tf.compat.v2.compat.as_str_any` ](/api_docs/python/tf/compat/as_str_any)

```
 tf.compat.as_str_any(value)
 
```

Uses  `str(value)` , except for  `bytes`  typed inputs, which are converted   using  `as_str` .

#### 参数：
- **`value`** : A object that can be converted to  `str` .


#### 返回：
A  `str`  object.

