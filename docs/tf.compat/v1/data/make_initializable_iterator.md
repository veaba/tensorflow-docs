Creates a [ `tf.compat.v1.data.Iterator` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/Iterator) for enumerating the elements of a dataset.


<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">tf.compat.v1.data.make_initializable_iterator(
    dataset,
    shared_name=None
)
</code></pre></devsite-code>

<aside class="note">**Note:**  The returned iterator will be in an uninitialized state,
and you must run the  `iterator.initializer`  operation before using it:</aside>


```
 dataset = ...
iterator = tf.compat.v1.data.make_initializable_iterator(dataset)
# ...
sess.run(iterator.initializer)
 
```



#### Args:

- **`dataset`** : A [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset).

- **`shared_name`** : (Optional.) If non-empty, the returned iterator will be shared
under the given name across multiple sessions that share the same devices
(e.g. when using a remote server).



#### Returns:
A [ `tf.compat.v1.data.Iterator` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/Iterator) over the elements of  `dataset` .



#### Raises:

- **`RuntimeError`** : If eager execution is enabled.

