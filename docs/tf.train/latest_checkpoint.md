Finds the filename of latest saved checkpoint file.



### Aliases:

- [ `tf.compat.v1.train.latest_checkpoint` ](/api_docs/python/tf/train/latest_checkpoint)

- [ `tf.compat.v2.train.latest_checkpoint` ](/api_docs/python/tf/train/latest_checkpoint)



```
 tf.train.latest_checkpoint(
    checkpoint_dir,
    latest_filename=None
)
 
```



### Used in the guide:

- [Training checkpoints](https://tensorflow.google.cn/guide/checkpoint)

- [Eager execution](https://tensorflow.google.cn/guide/eager)



### Used in the tutorials:

- [Text generation with an RNN](https://tensorflow.google.cn/tutorials/text/text_generation)

- [Custom training: basics](https://tensorflow.google.cn/tutorials/customization/custom_training)

- [Custom training with tf.distribute.Strategy](https://tensorflow.google.cn/tutorials/distribute/custom_training)

- [Distributed training with Keras](https://tensorflow.google.cn/tutorials/distribute/keras)

- [Save and load a model using a distribution strategy](https://tensorflow.google.cn/tutorials/distribute/save_and_load)



#### Args:

- **`checkpoint_dir`** : Directory where the variables were saved.

- **`latest_filename`** : Optional name for the protocol buffer file that
contains the list of most recent checkpoint filenames.
See the corresponding argument to  `Saver.save()` .



#### Returns:
The full path to the latest checkpoint or  `None`  if no checkpoint was found.

