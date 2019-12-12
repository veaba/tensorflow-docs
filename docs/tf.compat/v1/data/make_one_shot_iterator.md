Creates a [ `tf.compat.v1.data.Iterator` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/Iterator) for enumerating the elements of a dataset.

```
 tf.compat.v1.data.make_one_shot_iterator(dataset) 
```


**Note:**  The returned iterator will be initialized automatically.A "one-shot" iterator does not support re-initialization.


#### 参数：
- **`dataset`** : A [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset).


#### 返回：
A [ `tf.compat.v1.data.Iterator` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/Iterator) over the elements of this dataset.

