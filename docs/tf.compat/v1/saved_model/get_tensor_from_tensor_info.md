Returns the Tensor or SparseTensor described by a TensorInfo proto. (deprecated)

```
 tf.compat.v1.saved_model.get_tensor_from_tensor_info(
    tensor_info,
    graph=None,
    import_scope=None
)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:This function will only be available through the v1 compatibility library as tf.compat.v1.saved_model.utils.get_tensor_from_tensor_info or tf.compat.v1.saved_model.get_tensor_from_tensor_info.


#### Args:
- **`tensor_info`** : A TensorInfo proto describing a Tensor or SparseTensor.
- **`graph`** : The tf.Graph in which tensors are looked up. If None, thecurrent default graph is used.
- **`import_scope`** : If not None, names in  `tensor_info`  are prefixed with thisstring before lookup.


#### Returns:
The Tensor or SparseTensor in  `graph`  described by  `tensor_info` .

#### Raises:
- **`KeyError`** : If  `tensor_info`  does not correspond to a tensor in  `graph` .
- **`ValueError`** : If  `tensor_info`  is malformed.
