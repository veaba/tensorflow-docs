Asserts that the given  `tensor`  is a scalar (i.e. zero-dimensional).

```
 tf.compat.v1.assert_scalar(
    tensor,
    name=None,
    message=None
)
 
```

This function raises  `ValueError`  unless it can be certain that the given `tensor`  is a scalar.  `ValueError`  is also raised if the shape of  `tensor`  isunknown.

#### 参数：
- **`tensor`** : A  `Tensor` .
- **`name`** :  A name for this operation. Defaults to "assert_scalar"
- **`message`** : A string to prefix to the default message.


#### 返回：
The input tensor (potentially converted to a  `Tensor` ).

#### 加薪：
- **`ValueError`** : If the tensor is not scalar (rank 0), or if its shape isunknown.
