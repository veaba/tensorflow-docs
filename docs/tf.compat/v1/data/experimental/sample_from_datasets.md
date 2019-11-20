[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/interleave_ops.py#L227-L230)  
---  
  
Samples elements at random from the datasets in `datasets`.

    
    
    tf.compat.v1.data.experimental.sample_from_datasets(
        datasets,
        weights=None,
        seed=None
    )
    

#### Args:

  * **`datasets`** : A list of [`tf.data.Dataset`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) objects with compatible structure.
  * **`weights`** : (Optional.) A list of `len(datasets)` floating-point values where `weights[i]` represents the probability with which an element should be sampled from `datasets[i]`, or a [`tf.data.Dataset`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) object where each element is such a list. Defaults to a uniform distribution across `datasets`.
  * **`seed`** : (Optional.) A [`tf.int64`](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar [`tf.Tensor`](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing the random seed that will be used to create the distribution. See [`tf.compat.v1.set_random_seed`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.

#### Returns:

A dataset that interleaves elements from `datasets` at random, according to
`weights` if provided, otherwise with uniform probability.

#### Raises:

  * **`TypeError`** : If the `datasets` or `weights` arguments have the wrong type.
  * **`ValueError`** : If the `weights` argument is specified and does not match the length of the `datasets` element.

