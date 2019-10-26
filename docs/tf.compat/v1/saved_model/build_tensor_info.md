Utility function to build TensorInfo proto from a Tensor. (deprecated)
### Aliases:
- tf.compat.v1.saved_model.utils.build_tensor_info

```
 tf.compat.v1.saved_model.build_tensor_info(tensor)
```
#### Args:
- tensor: Tensor or SparseTensor whose name, dtype and shape are used to build the TensorInfo. For SparseTensors, the names of the three constituent Tensors are used.
#### Returns:
A TensorInfo protocol buffer constructed based on the supplied argument.
#### Raises:
- RuntimeError: If eager execution is enabled.
