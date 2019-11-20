[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/indexed_slices.py#L249-L271)  
---  
  
Converts the given object to a `Tensor` or an `IndexedSlices`.

    
    
    tf.compat.v1.convert_to_tensor_or_indexed_slices(
        value,
        dtype=None,
        name=None
    )
    

If `value` is an `IndexedSlices` or `SparseTensor` it is returned unmodified.
Otherwise, it is converted to a `Tensor` using `convert_to_tensor()`.

#### Args:

  * **`value`** : An `IndexedSlices`, `SparseTensor`, or an object that can be consumed by `convert_to_tensor()`.
  * **`dtype`** : (Optional.) The required `DType` of the returned `Tensor` or `IndexedSlices`.
  * **`name`** : (Optional.) A name to use if a new `Tensor` is created.

#### Returns:

A `Tensor`, `IndexedSlices`, or `SparseTensor` based on `value`.

#### Raises:

  * **`ValueError`** : If `dtype` does not match the element type of `value`.

