Creates a [ `tf.compat.v1.data.Iterator` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/Iterator) for enumerating the elements of a dataset.

```
 tf.compat.v1.data.make_initializable_iterator(    dataset,    shared_name=None) 
```


**Note:**  The returned iterator will be in an uninitialized state,and you must run the  `iterator.initializer`  operation before using it:


```
 dataset = ...
iterator = tf.compat.v1.data.make_initializable_iterator(dataset)
# ...
sess.run(iterator.initializer)
 
```

#### 参数：
- **`dataset`** : A [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset).
- **`shared_name`** : (Optional.) If non-empty, the returned iterator will be sharedunder the given name across multiple sessions that share the same devices(e.g. when using a remote server).


#### 返回：
A [ `tf.compat.v1.data.Iterator` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/Iterator) over the elements of  `dataset` .

#### 加薪：
- **`RuntimeError`** : If eager execution is enabled.
