[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/utils/get_source_inputs) |
[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/layer_utils.py#L31-L67)  
---|---  
  
Returns the list of input tensors necessary to compute `tensor`.

### Aliases:

  * [`tf.compat.v1.keras.utils.get_source_inputs`](/api_docs/python/tf/keras/utils/get_source_inputs)
  * [`tf.compat.v2.keras.utils.get_source_inputs`](/api_docs/python/tf/keras/utils/get_source_inputs)

    
    
    tf.keras.utils.get_source_inputs(
        tensor,
        layer=None,
        node_index=None
    )
    

Output will always be a list of tensors (potentially with 1 element).

#### Arguments:

  * **`tensor`** : The tensor to start from.
  * **`layer`** : Origin layer of the tensor. Will be determined via tensor._keras_history if not provided.
  * **`node_index`** : Origin node index of the tensor.

#### Returns:

List of input tensors.

