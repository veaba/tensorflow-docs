A transformation that batches ragged elements into [ `tf.SparseTensor` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor)s.

**别名** : [ `tf.compat.v1.data.experimental.dense_to_sparse_batch` ](/api_docs/python/tf/data/experimental/dense_to_sparse_batch), [ `tf.compat.v2.data.experimental.dense_to_sparse_batch` ](/api_docs/python/tf/data/experimental/dense_to_sparse_batch)

```
 tf.data.experimental.dense_to_sparse_batch(
    batch_size,
    row_shape
)
 
```

Like [ `Dataset.padded_batch()` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#padded_batch), this transformation combines multipleconsecutive elements of the dataset, which might have differentshapes, into a single element. The resulting element has threecomponents ( `indices` ,  `values` , and  `dense_shape` ), whichcomprise a [ `tf.SparseTensor` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor) that represents the same data. The `row_shape`  represents the dense shape of each row in theresulting [ `tf.SparseTensor` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor), to which the effective batch size isprepended. For example:

```
 # 注意：The following examples use `{ ... }` to represent the
# contents of a dataset.
a = { ['a', 'b', 'c'], ['a', 'b'], ['a', 'b', 'c', 'd'] }

a.apply(tf.data.experimental.dense_to_sparse_batch(
    batch_size=2, row_shape=[6])) ==
{
    ([[0, 0], [0, 1], [0, 2], [1, 0], [1, 1]],  # indices
     ['a', 'b', 'c', 'a', 'b'],                 # values
     [2, 6]),                                   # dense_shape
    ([[0, 0], [0, 1], [0, 2], [0, 3]],
     ['a', 'b', 'c', 'd'],
     [1, 6])
}
 
```

#### 参数：
- **`batch_size`** : A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing the number ofconsecutive elements of this dataset to combine in a single batch.
- **`row_shape`** : A [ `tf.TensorShape` ](https://tensorflow.google.cn/api_docs/python/tf/TensorShape) or [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) vector tensor-like objectrepresenting the equivalent dense shape of a row in the resulting[ `tf.SparseTensor` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor). Each element of this dataset must have the same rank as `row_shape` , and must have size less than or equal to  `row_shape`  in eachdimension.


#### 返回：
A  `Dataset`  transformation function, which can be passed to[ `tf.data.Dataset.apply` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

