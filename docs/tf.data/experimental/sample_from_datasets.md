Samples elements at random from the datasets in  `datasets` .

```
 tf.data.experimental.sample_from_datasets(
    datasets,
    weights=None,
    seed=None
)
 
```

### Used in the guide:
- [tf.data: Build TensorFlow input pipelines](https://tensorflow.google.cn/guide/data)


### Used in the tutorials:
- [Classification on imbalanced data](https://tensorflow.google.cn/tutorials/structured_data/imbalanced_data)


#### Args:
- **`datasets`** : A list of [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) objects with compatible structure.
- **`weights`** : (Optional.) A list of  `len(datasets)`  floating-point values where `weights[i]`  represents the probability with which an element should besampled from  `datasets[i]` , or a [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) object where eachelement is such a list. Defaults to a uniform distribution across `datasets` .
- **`seed`** : (Optional.) A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing therandom seed that will be used to create the distribution. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.


#### Returns:
A dataset that interleaves elements from  `datasets`  at random, according to `weights`  if provided, otherwise with uniform probability.

#### Raises:
- **`TypeError`** : If the  `datasets`  or  `weights`  arguments have the wrong type.
- **`ValueError`** : If the  `weights`  argument is specified and does not match thelength of the  `datasets`  element.
