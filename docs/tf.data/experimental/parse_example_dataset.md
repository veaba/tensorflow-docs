A transformation that parses  `Example`  protos into a  `dict`  of tensors.

**别名** : [ `tf.compat.v1.data.experimental.parse_example_dataset` ](/api_docs/python/tf/data/experimental/parse_example_dataset), [ `tf.compat.v2.data.experimental.parse_example_dataset` ](/api_docs/python/tf/data/experimental/parse_example_dataset)

```
 tf.data.experimental.parse_example_dataset(
    features,
    num_parallel_calls=1
)
 
```

Parses a number of serialized  `Example`  protos given in  `serialized` . We referto  `serialized`  as a batch with  `batch_size`  many entries of individual `Example`  protos.

This op parses serialized examples into a dictionary mapping keys to  `Tensor` and  `SparseTensor`  objects.  `features`  is a dict from keys to  `VarLenFeature` , `SparseFeature` , and  `FixedLenFeature`  objects. Each  `VarLenFeature` and  `SparseFeature`  is mapped to a  `SparseTensor` , and each `FixedLenFeature`  is mapped to a  `Tensor` . See [ `tf.io.parse_example` ](https://tensorflow.google.cn/api_docs/python/tf/io/parse_example) for moredetails about feature dictionaries.

#### 参数：
- **`features`** : A  `dict`  mapping feature keys to  `FixedLenFeature` , `VarLenFeature` , and  `SparseFeature`  values.
- **`num_parallel_calls`** : (Optional.) A [ `tf.int32` ](https://tensorflow.google.cn/api_docs/python/tf#int32) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor),representing the number of parsing processes to call in parallel.


#### 返回：
A dataset transformation function, which can be passed to[ `tf.data.Dataset.apply` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

#### 加薪：
- **`ValueError`** : if features argument is None.
