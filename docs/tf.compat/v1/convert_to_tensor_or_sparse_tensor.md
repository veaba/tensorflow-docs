Converts value to a  `SparseTensor`  or  `Tensor` .

```
 tf.compat.v1.convert_to_tensor_or_sparse_tensor(    value,    dtype=None,    name=None) 
```

#### 参数：
- **`value`** : A  `SparseTensor` ,  `SparseTensorValue` , or an object whose type has aregistered  `Tensor`  conversion function.
- **`dtype`** : Optional element type for the returned tensor. If missing, the typeis inferred from the type of  `value` .
- **`name`** : Optional name to use if a new  `Tensor`  is created.


#### 返回：
A  `SparseTensor`  or  `Tensor`  based on  `value` .

#### 加薪：
- **`RuntimeError`** : If result type is incompatible with  `dtype` .
