返回用于使用saver保存/还原迭代器状态的saveableobject。

**别名** : [ `tf.compat.v1.data.experimental.make_saveable_from_iterator` ](/api_docs/python/tf/data/experimental/make_saveable_from_iterator), [ `tf.compat.v2.data.experimental.make_saveable_from_iterator` ](/api_docs/python/tf/data/experimental/make_saveable_from_iterator)

```
 tf.data.experimental.make_saveable_from_iterator(iterator)
 
```

#### 参数：
- **`iterator`** : Iterator.


#### 返回：
用于使用saver保存/还原迭代器状态的saveableobject。

#### 加薪：
- **`ValueError`** : If iterator does not support checkpointing.


#### 例如：


```
 with tf.Graph().as_default():
  ds = tf.data.Dataset.range(10)
  iterator = ds.make_initializable_iterator()
  # Build the iterator SaveableObject.
  saveable_obj = tf.data.experimental.make_saveable_from_iterator(iterator)
  # Add the SaveableObject to the SAVEABLE_OBJECTS collection so
  # it can be automatically saved using Saver.
  tf.compat.v1.add_to_collection(tf.GraphKeys.SAVEABLE_OBJECTS, saveable_obj)
  saver = tf.compat.v1.train.Saver()

  while continue_training:
    ... Perform training ...
    if should_save_checkpoint:
      saver.save()
 
```


**Note:**  When restoring the iterator, the existing iterator state is completelydiscarded. This means that any changes you may have made to the Datasetgraph will be discarded as well! This includes the new Dataset graphthat you may have built during validation. So, while running validation,make sure to run the initializer for the validation input pipeline afterrestoring the checkpoint.

**Note:**  Not all iterators support checkpointing yet. Attempting to save thestate of an unsupported iterator will throw an error.
