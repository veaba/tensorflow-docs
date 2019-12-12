Returns the cardinality of  `dataset` , if known.

**别名** : [ `tf.compat.v1.data.experimental.cardinality` ](/api_docs/python/tf/data/experimental/cardinality), [ `tf.compat.v2.data.experimental.cardinality` ](/api_docs/python/tf/data/experimental/cardinality)

```
 tf.data.experimental.cardinality(dataset)
 
```

The operation returns the cardinality of  `dataset` . The operation may return[ `tf.data.experimental.INFINITE_CARDINALITY` ](https://tensorflow.google.cn/api_docs/python/tf/data/experimental#INFINITE_CARDINALITY) if  `dataset`  contains an infinitenumber of elements or [ `tf.data.experimental.UNKNOWN_CARDINALITY` ](https://tensorflow.google.cn/api_docs/python/tf/data/experimental#UNKNOWN_CARDINALITY) if theanalysis fails to determine the number of elements in  `dataset`  (e.g. when thedataset source is a file).

#### 参数：
- **`dataset`** : A [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) for which to determine cardinality.


#### 返回：
A scalar [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64)  `Tensor`  representing the cardinality of  `dataset` . Ifthe cardinality is infinite or unknown, the operation returns the namedconstant  `INFINITE_CARDINALITY`  and  `UNKNOWN_CARDINALITY`  respectively.

