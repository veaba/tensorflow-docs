[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/counter.py#L58-L60)  
---  
  
Creates a `Dataset` that counts from `start` in steps of size `step`.

    
    
    tf.compat.v1.data.experimental.Counter(
        start=0,
        step=1,
        dtype=tf.dtypes.int64
    )
    

#### For example:

    
    
    Dataset.count() == [0, 1, 2, ...)
    Dataset.count(2) == [2, 3, ...)
    Dataset.count(2, 5) == [2, 7, 12, ...)
    Dataset.count(0, -1) == [0, -1, -2, ...)
    Dataset.count(10, -1) == [10, 9, ...)
    

#### Args:

  * **`start`** : (Optional.) The starting value for the counter. Defaults to 0.
  * **`step`** : (Optional.) The step size for the counter. Defaults to 1.
  * **`dtype`** : (Optional.) The data type for counter elements. Defaults to [`tf.int64`](https://tensorflow.google.cn/api_docs/python/tf#int64).

#### Returns:

A `Dataset` of scalar `dtype` elements.

