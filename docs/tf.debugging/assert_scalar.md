Asserts that the given  `tensor`  is a scalar.

```
 tf.debugging.assert_scalar(    tensor,    message=None,    name=None) 
```

This function raises  `ValueError`  unless it can be certain that the given `tensor`  is a scalar.  `ValueError`  is also raised if the shape of  `tensor`  isunknown.

This is always checked statically, so this method returns nothing.

#### 参数：
- **`tensor`** : A  `Tensor` .
- **`message`** : A string to prefix to the default message.
- **`name`** :  A name for this operation. Defaults to "assert_scalar"


#### 加薪：
- **`ValueError`** : If the tensor is not scalar (rank 0), or if its shape isunknown.
