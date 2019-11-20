[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/io/serialize_tensor)  
---  
  
Defined in generated file: `python/ops/gen_parsing_ops.py`

Transforms a Tensor into a serialized TensorProto proto.

### Aliases:

  * [`tf.compat.v1.io.serialize_tensor`](/api_docs/python/tf/io/serialize_tensor)
  * [`tf.compat.v1.serialize_tensor`](/api_docs/python/tf/io/serialize_tensor)
  * [`tf.compat.v2.io.serialize_tensor`](/api_docs/python/tf/io/serialize_tensor)

    
    
    tf.io.serialize_tensor(
        tensor,
        name=None
    )
    

#### Args:

  * **`tensor`** : A `Tensor`. A Tensor of type `T`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of type `string`.

