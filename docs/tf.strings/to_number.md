[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/strings/to_number) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/string_ops.py#L425-L443)  
---|---  
  
Converts each string in the input Tensor to the specified numeric type.

### Aliases:

  * [`tf.compat.v2.strings.to_number`](/api_docs/python/tf/strings/to_number)

    
    
    tf.strings.to_number(
        input,
        out_type=tf.dtypes.float32,
        name=None
    )
    

### Used in the guide:

  * [Using the SavedModel format](https://tensorflow.google.cn/guide/saved_model)

(Note that int32 overflow results in an error while float overflow results in
a rounded value.)

#### Args:

  * **`input`** : A `Tensor` of type `string`.
  * **`out_type`** : An optional [`tf.DType`](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) from: `tf.float32, tf.float64, tf.int32, tf.int64`. Defaults to `tf.float32`. The numeric type to interpret each string in `string_tensor` as.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of type `out_type`.

