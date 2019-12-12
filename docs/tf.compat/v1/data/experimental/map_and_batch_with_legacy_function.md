Fused implementation of  `map`  and  `batch` . (deprecated)

```
 tf.compat.v1.data.experimental.map_and_batch_with_legacy_function(
    map_func,
    batch_size,
    num_parallel_batches=None,
    drop_remainder=False,
    num_parallel_calls=None
)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use `tf.data.experimental.map_and_batch()
NOTE: This is an escape hatch for existing uses of  `map_and_batch`  that do notwork with V2 functions. New uses are strongly discouraged and existing usesshould migrate to  `map_and_batch`  as this method will not be removed in V2.

#### Args:
- **`map_func`** : A function mapping a nested structure of tensors to anothernested structure of tensors.
- **`batch_size`** : A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing the number ofconsecutive elements of this dataset to combine in a single batch.
- **`num_parallel_batches`** : (Optional.) A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor),representing the number of batches to create in parallel. On one hand,higher values can help mitigate the effect of stragglers. On the otherhand, higher values can increase contention if CPU is scarce.
- **`drop_remainder`** : (Optional.) A [ `tf.bool` ](https://tensorflow.google.cn/api_docs/python/tf#bool) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representingwhether the last batch should be dropped in case its size is smaller thandesired; the default behavior is not to drop the smaller batch.
- **`num_parallel_calls`** : (Optional.) A [ `tf.int32` ](https://tensorflow.google.cn/api_docs/python/tf#int32) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor),representing the number of elements to process in parallel. If notspecified,  `batch_size * num_parallel_batches`  elements will be processedin parallel. If the value [ `tf.data.experimental.AUTOTUNE` ](https://tensorflow.google.cn/api_docs/python/tf/data/experimental#AUTOTUNE) is used, thenthe number of parallel calls is set dynamically based on available CPU.


#### Returns:
A  `Dataset`  transformation function, which can be passed to[ `tf.data.Dataset.apply` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

#### Raises:
- **`ValueError`** : If both  `num_parallel_batches`  and  `num_parallel_calls`  arespecified.
