Converts the given value to a Tensor.
### Aliases:
- tf.compat.v2.convert_to_tensor

```
 tf.convert_to_tensor(
    value,
    dtype=None,
    dtype_hint=None,
    name=None
)
```
### Used in the guide:
- Eager execution
### Used in the tutorials:
- Automatic differentiation and gradient tape
- Custom training: walkthrough
- DeepDream
- Neural machine translation with attention
This function converts Python objects of various types to Tensor objects. It accepts Tensor objects, numpy arrays, Python lists, and Python scalars. For example:

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
This function can be useful when composing a new operation in Python (such as my_func in the example above). All standard Python op constructors apply this function to each of their Tensor-valued inputs, which allows those ops to accept numpy arrays, Python lists, and scalars in addition to Tensor objects.
#### Args:
- value: An object whose type has a registered Tensor conversion function.
- dtype: Optional element type for the returned tensor. If missing, the type is inferred from the type of value.
- dtype_hint: Optional element type for the returned tensor, used when dtype is None. In some cases, a caller may not have a dtype in mind when converting to a tensor, so dtype_hint can be used as a soft preference. If the conversion to dtype_hint is not possible, this argument has no effect.
- name: Optional name to use if a new Tensor is created.
#### Returns:
A Tensor based on value.
#### Raises:
- TypeError: If no conversion function is registered for value to dtype.
- RuntimeError: If a registered conversion function returns an invalid value.
- ValueError: If the value is a tensor not of given dtype in graph mode.
