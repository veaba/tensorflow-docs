Converts a Keras model to dot format and save to a file.



### Aliases:

- [ `tf.compat.v1.keras.utils.plot_model` ](/api_docs/python/tf/keras/utils/plot_model)

- [ `tf.compat.v2.keras.utils.plot_model` ](/api_docs/python/tf/keras/utils/plot_model)



```
 tf.keras.utils.plot_model(
    model,
    to_file='model.png',
    show_shapes=False,
    show_layer_names=True,
    rankdir='TB',
    expand_nested=False,
    dpi=96
)
 
```



### Used in the guide:

- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)

- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)



### Used in the tutorials:

- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)

- [Image segmentation](https://tensorflow.google.cn/tutorials/images/segmentation)



#### Arguments:

- **`model`** : A Keras model instance

- **`to_file`** : File name of the plot image.

- **`show_shapes`** : whether to display shape information.

- **`show_layer_names`** : whether to display layer names.

- **`rankdir`** :  `rankdir`  argument passed to PyDot,
a string specifying the format of the plot:
'TB' creates a vertical plot;
'LR' creates a horizontal plot.

- **`expand_nested`** : Whether to expand nested models into clusters.

- **`dpi`** : Dots per inch.



#### Returns:
A Jupyter notebook Image object if Jupyter is installed.
This enables in-line display of the model plots in notebooks.

