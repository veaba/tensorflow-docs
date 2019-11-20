[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/shape) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/array_ops.py#L409-L432)  
---|---  
  
Returns the shape of a tensor.

### Aliases:

  * [`tf.compat.v2.shape`](/api_docs/python/tf/shape)

    
    
    tf.shape(  
        input,  
        out_type=tf.dtypes.int32,  
        name=None  
    )  
    

### Used in the guide:

  * [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)

### Used in the tutorials:

  * [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
  * [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)
  * [DeepDream](https://tensorflow.google.cn/tutorials/generative/deepdream)
  * [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)

This operation returns a 1-D integer tensor representing the shape of `input`.

#### For example:

    
    
    t = tf.constant([[[1, 1, 1], [2, 2, 2]], [[3, 3, 3], [4, 4, 4]]])  
    tf.shape(t)  # [2, 2, 3]  
    

#### Args:

  * **`input`** : A `Tensor` or `SparseTensor`.
  * **`out_type`** : (Optional) The specified output type of the operation (`int32` or `int64`). Defaults to [`tf.int32`](https://tensorflow.google.cn/api_docs/python/tf#int32).
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of type `out_type`.

