Reads and outputs the entire contents of the input filename.

**Aliases** : [ `tf.compat.v1.io.read_file` ](/api_docs/python/tf/io/read_file), [ `tf.compat.v1.read_file` ](/api_docs/python/tf/io/read_file), [ `tf.compat.v2.io.read_file` ](/api_docs/python/tf/io/read_file)

```
 tf.io.read_file(    filename,    name=None) 
```

### Used in the guide:
- [tf.data: Build TensorFlow input pipelines](https://tensorflow.google.cn/guide/data)


### Used in the tutorials:
- [Adversarial example using FGSM](https://tensorflow.google.cn/tutorials/generative/adversarial_fgsm)
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
- [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)
- [Load images](https://tensorflow.google.cn/tutorials/load_data/images)
- [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)


#### Args:
- **`filename`** : A  `Tensor`  of type  `string` .
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor`  of type  `string` .

