Converts the given  `value`  to a  `Tensor` .

```
 tf.compat.v1.convert_to_tensor(    value,    dtype=None,    name=None,    preferred_dtype=None,    dtype_hint=None) 
```

This function converts Python objects of various types to  `Tensor` objects. It accepts  `Tensor`  objects, numpy arrays, Python lists,and Python scalars. For example:

```
 import numpy as np

def my_func(arg):
  arg = tf.convert_to_tensor(arg, dtype=tf.float32)
  return tf.matmul(arg, arg) + arg

# The following calls are equivalent.
value_1 = my_func(tf.constant([[1.0, 2.0], [3.0, 4.0]]))
value_2 = my_func([[1.0, 2.0], [3.0, 4.0]])
value_3 = my_func(np.array([[1.0, 2.0], [3.0, 4.0]], dtype=np.float32))
 
```

This function can be useful when composing a new operation in Python(such as  `my_func`  in the example above). All standard Python opconstructors apply this function to each of their Tensor-valuedinputs, which allows those ops to accept numpy arrays, Python lists,and scalars in addition to  `Tensor`  objects.


**Note:**  This function diverges from default Numpy behavior for  `float`  and   `string`  types when  `None`  is present in a Python list or scalar. Rather  than silently converting  `None`  values, an error will be thrown.


#### 参数：
- **`value`** : An object whose type has a registered  `Tensor`  conversion function.
- **`dtype`** : Optional element type for the returned tensor. If missing, the typeis inferred from the type of  `value` .
- **`name`** : Optional name to use if a new  `Tensor`  is created.
- **`preferred_dtype`** : Optional element type for the returned tensor, used whendtype is None. In some cases, a caller may not have a dtype in mind whenconverting to a tensor, so preferred_dtype can be used as a softpreference.  If the conversion to  `preferred_dtype`  is not possible, thisargument has no effect.
- **`dtype_hint`** : same meaning as preferred_dtype, and overrides it.


#### 返回：
A  `Tensor`  based on  `value` .

#### 加薪：
- **`TypeError`** : If no conversion function is registered for  `value`  to  `dtype` .
- **`RuntimeError`** : If a registered conversion function returns an invalid value.
- **`ValueError`** : If the  `value`  is a tensor not of given  `dtype`  in graph mode.
