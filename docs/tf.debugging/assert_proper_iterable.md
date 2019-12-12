静态断言值是“适当的”iterable。

**别名** : [ `tf.compat.v1.assert_proper_iterable` ](/api_docs/python/tf/debugging/assert_proper_iterable), [ `tf.compat.v1.debugging.assert_proper_iterable` ](/api_docs/python/tf/debugging/assert_proper_iterable), [ `tf.compat.v2.debugging.assert_proper_iterable` ](/api_docs/python/tf/debugging/assert_proper_iterable)

```
 tf.debugging.assert_proper_iterable(values)
 
```

 `Ops`  that expect iterables of  `Tensor`  can call this to validate input.Useful since  `Tensor` ,  `ndarray` , byte/text type are all iterables themselves.

#### 参数：
- **`values`** :  Object to be checked.


#### 加薪：
- **`TypeError`** :  If  `values`  is not iterable or is one of `Tensor` ,  `SparseTensor` ,  `np.array` , [ `tf.compat.bytes_or_text_types` ](https://tensorflow.google.cn/api_docs/python/tf/compat#bytes_or_text_types).
