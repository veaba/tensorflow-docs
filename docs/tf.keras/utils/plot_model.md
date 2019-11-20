[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/utils/plot_model) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/vis_utils.py#L252-L300)  
  
  
Converts a Keras model to dot format and save to a file.

### Aliases:

  * [`tf.compat.v1.keras.utils.plot_model`](/api_docs/python/tf/keras/utils/plot_model)
  * [`tf.compat.v2.keras.utils.plot_model`](/api_docs/python/tf/keras/utils/plot_model)

    
    
    tf.keras.utils.plot_model(
        model,
        to_file='model.png',
        show_shapes=False,
        show_layer_names=True,
        rankdir='TB',
        expand_nested=False,
        dpi=96
    )
    

### Used in the guide:

  * [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)
  * [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)

#### Arguments:

  * **`model`** : A Keras model instance
  * **`to_file`** : File name of the plot image.
  * **`show_shapes`** : whether to display shape information.
  * **`show_layer_names`** : whether to display layer names.
  * **`rankdir`** : `rankdir` argument passed to PyDot, a string specifying the format of the plot: 'TB' creates a vertical plot; 'LR' creates a horizontal plot.
  * **`expand_nested`** : Whether to expand nested models into clusters.
  * **`dpi`** : Dots per inch.

#### Returns:

A Jupyter notebook Image object if Jupyter is installed. This enables in-line
display of the model plots in notebooks.

