Finds the filename of latest saved checkpoint file.

**Aliases** : [ `tf.compat.v1.train.latest_checkpoint` ](/api_docs/python/tf/train/latest_checkpoint), [ `tf.compat.v2.train.latest_checkpoint` ](/api_docs/python/tf/train/latest_checkpoint)

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
- [Distributed training with Keras](https://tensorflow.google.cn/tutorials/distribute/keras)
- [Save and load a model using a distribution strategy](https://tensorflow.google.cn/tutorials/distribute/save_and_load)
- [Deep Convolutional Generative Adversarial Network](https://tensorflow.google.cn/tutorials/generative/dcgan)
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)


#### Args:
- **`checkpoint_dir`** : Directory where the variables were saved.
- **`latest_filename`** : Optional name for the protocol buffer file thatcontains the list of most recent checkpoint filenames.See the corresponding argument to  `Saver.save()` .


#### Returns:
The full path to the latest checkpoint or  `None`  if no checkpoint was found.

