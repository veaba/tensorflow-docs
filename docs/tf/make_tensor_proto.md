Create a TensorProto.

**Aliases** : [ `tf.compat.v1.make_tensor_proto` ](/api_docs/python/tf/make_tensor_proto), [ `tf.compat.v2.make_tensor_proto` ](/api_docs/python/tf/make_tensor_proto)

```
 tf.make_tensor_proto(
    values,
    dtype=None,
    shape=None,
    verify_shape=False,
    allow_broadcast=False
)
 
```

In TensorFlow 2.0, representing tensors as protos should no longer be acommon workflow. That said, this utility function is still useful forgenerating TF Serving request protos:

request = tensorflow_serving.apis.predict_pb2.PredictRequest()  request.model_spec.name = "my_model"  request.model_spec.signature_name = "serving_default"  request.inputs["images"].CopyFrom(tf.make_tensor_proto(X_new))

make_tensor_proto accepts "values" of a python scalar, a python list, anumpy ndarray, or a numpy scalar.

If "values" is a python scalar or a python list, make_tensor_protofirst convert it to numpy ndarray. If dtype is None, theconversion tries its best to infer the right numpy datatype. Otherwise, the resulting numpy array has a compatible datatype with the given dtype.

In either case above, the numpy ndarray (either the caller providedor the auto converted) must have the compatible type with dtype.

make_tensor_proto then converts the numpy array to a tensor proto.

If "shape" is None, the resulting tensor proto represents the numpyarray precisely.

Otherwise, "shape" specifies the tensor's shape and the numpy arraycan not have more elements than what "shape" specifies.

#### Args:
- **`values`** :         Values to put in the TensorProto.
- **`dtype`** :          Optional tensor_pb2 DataType value.
- **`shape`** :          List of integers representing the dimensions of tensor.
- **`verify_shape`** :   Boolean that enables verification of a shape of values.
- **`allow_broadcast`** :  Boolean that enables allowing scalars and 1 length vectorbroadcasting. Cannot be true when verify_shape is true.


#### Returns:
A  `TensorProto` . Depending on the type, it may contain data in the"tensor_content" attribute, which is not directly useful to Python programs.To access the values you should convert the proto back to a numpy ndarraywith [ `tf.make_ndarray(proto)` ](https://tensorflow.google.cn/api_docs/python/tf/make_ndarray).

If  `values`  is a  `TensorProto` , it is immediately returned;  `dtype`  and `shape`  are ignored.

#### Raises:
- **`TypeError`** :  if unsupported types are provided.
- **`ValueError`** : if arguments have inappropriate values or if verify_shape isTrue and shape of values is not equals to a shape from the argument.
