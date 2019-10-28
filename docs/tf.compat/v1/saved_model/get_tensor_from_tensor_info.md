Returns the Tensor or SparseTensor described by a TensorInfo proto. (deprecated)
### Aliases:
- `tf.compat.v1.saved_model.utils.get_tensor_from_tensor_info`

```
 tf.compat.v1.saved_model.get_tensor_from_tensor_info(
    tensor_info,
    graph=None,
    import_scope=None
)
```
#### Args:
- `tensor_info`: A TensorInfo proto describing a Tensor or SparseTensor.
- `graph`: The tf.Graph in which tensors are looked up. If None, the current default `graph` is used.
- `import_scope`: If not None, names in `tensor_info` are prefixed with this string before lookup.
#### Returns:
The Tensor or SparseTensor in `graph` described by `tensor_info`.
#### Raises:
- `KeyError`: If `tensor_info` does not correspond to a tensor in `graph`.
- `ValueError`: If `tensor_info` is malformed.
