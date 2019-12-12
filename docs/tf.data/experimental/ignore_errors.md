Creates a  `Dataset`  from another  `Dataset`  and silently ignores any errors.

**别名** : [ `tf.compat.v1.data.experimental.ignore_errors` ](/api_docs/python/tf/data/experimental/ignore_errors), [ `tf.compat.v2.data.experimental.ignore_errors` ](/api_docs/python/tf/data/experimental/ignore_errors)

```
 tf.data.experimental.ignore_errors()
 
```

Use this transformation to produce a dataset that contains the same elementsas the input, but silently drops any elements that caused an error. Forexample:

```
 dataset = tf.data.Dataset.from_tensor_slices([1., 2., 0., 4.])

# Computing `tf.debugging.check_numerics(1. / 0.)` will raise an
无效argumenterror。
dataset = dataset.map(lambda x: tf.debugging.check_numerics(1. / x, "error"))

# Using `ignore_errors()` will drop the element that causes an error.
dataset =
    dataset.apply(tf.data.experimental.ignore_errors())  # ==> {1., 0.5, 0.2}
 
```

#### 返回：
A  `Dataset`  transformation function, which can be passed to[ `tf.data.Dataset.apply` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

