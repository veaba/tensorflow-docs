查找最近保存的检查点文件的文件名。

**别名** : [ `tf.compat.v1.train.latest_checkpoint` ](/api_docs/python/tf/train/latest_checkpoint), [ `tf.compat.v2.train.latest_checkpoint` ](/api_docs/python/tf/train/latest_checkpoint)

```
 tf.train.latest_checkpoint(
    checkpoint_dir,
    latest_filename=None
)
 
```

### 在指南中使用：
- [Training checkpoints](https://tensorflow.google.cn/guide/checkpoint)
- [Eager execution](https://tensorflow.google.cn/guide/eager)


### 在教程中使用：
- [Text generation with an RNN](https://tensorflow.google.cn/tutorials/text/text_generation)
- [Distributed training with Keras](https://tensorflow.google.cn/tutorials/distribute/keras)
- [Save and load a model using a distribution strategy](https://tensorflow.google.cn/tutorials/distribute/save_and_load)
- [Deep Convolutional Generative Adversarial Network](https://tensorflow.google.cn/tutorials/generative/dcgan)
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)


#### 参数：
- **`checkpoint_dir`** : Directory where the variables were saved.
- **`latest_filename`** : Optional name for the protocol buffer file thatcontains the list of most recent checkpoint filenames.See the corresponding argument to  `Saver.save()` .


#### 返回：
The full path to the latest checkpoint or  `None`  if no checkpoint was found.

