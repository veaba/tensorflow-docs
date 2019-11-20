[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/make_ndarray) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_util.py#L562-L629)  
  
  
Create a numpy ndarray from a tensor.

### Aliases:

  * [`tf.compat.v1.make_ndarray`](/api_docs/python/tf/make_ndarray)
  * [`tf.compat.v2.make_ndarray`](/api_docs/python/tf/make_ndarray)

    
    
    tf.make_ndarray(tensor)
    

Create a numpy ndarray with the same shape and data as the tensor.

#### Args:

  * **`tensor`** : A TensorProto.

#### Returns:

A numpy array with the tensor contents.

#### Raises:

  * **`TypeError`** : if tensor has unsupported type.

