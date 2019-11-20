[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/utils_impl.py#L40-L63)  
---  
  
Utility function to build TensorInfo proto from a Tensor. (deprecated)

### Aliases:

  * [`tf.compat.v1.saved_model.utils.build_tensor_info`](/api_docs/python/tf/compat/v1/saved_model/build_tensor_info)

    
    
    tf.compat.v1.saved_model.build_tensor_info(tensor)
    

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: This function will only be available
through the v1 compatibility library as
tf.compat.v1.saved_model.utils.build_tensor_info or
tf.compat.v1.saved_model.build_tensor_info.

#### Args:

  * **`tensor`** : Tensor or SparseTensor whose name, dtype and shape are used to build the TensorInfo. For SparseTensors, the names of the three constituent Tensors are used.

#### Returns:

A TensorInfo protocol buffer constructed based on the supplied argument.

#### Raises:

  * **`RuntimeError`** : If eager execution is enabled.

