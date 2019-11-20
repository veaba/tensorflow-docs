[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/debugging)  
---  
  
Public API for tf.debugging namespace.

## Functions

[`Assert(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/Assert):
Asserts that the given condition is true.

[`assert_all_finite(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_all_finite):
Assert that the tensor does not contain any NaN's or Inf's.

[`assert_equal(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_equal):
Assert the condition `x == y` holds element-wise.

[`assert_greater(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_greater):
Assert the condition `x > y` holds element-wise.

[`assert_greater_equal(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_greater_equal):
Assert the condition `x >= y` holds element-wise.

[`assert_integer(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_integer):
Assert that `x` is of integer dtype.

[`assert_less(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_less):
Assert the condition `x < y` holds element-wise.

[`assert_less_equal(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_less_equal):
Assert the condition `x <= y` holds element-wise.

[`assert_near(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_near):
Assert the condition `x` and `y` are close element-wise.

[`assert_negative(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_negative):
Assert the condition `x < 0` holds element-wise.

[`assert_non_negative(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_non_negative):
Assert the condition `x >= 0` holds element-wise.

[`assert_non_positive(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_non_positive):
Assert the condition `x <= 0` holds element-wise.

[`assert_none_equal(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_none_equal):
Assert the condition `x != y` holds for all elements.

[`assert_positive(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_positive):
Assert the condition `x > 0` holds element-wise.

[`assert_proper_iterable(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_proper_iterable):
Static assert that values is a "proper" iterable.

[`assert_rank(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_rank):
Assert that `x` has rank equal to `rank`.

[`assert_rank_at_least(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_rank_at_least):
Assert that `x` has rank of at least `rank`.

[`assert_rank_in(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_rank_in):
Assert that `x` has a rank in `ranks`.

[`assert_same_float_dtype(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_same_float_dtype):
Validate and return float type based on `tensors` and `dtype`.

[`assert_scalar(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_scalar):
Asserts that the given `tensor` is a scalar.

[`assert_shapes(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_shapes):
Assert tensor shapes and dimension size relationships between tensors.

[`assert_type(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/assert_type):
Asserts that the given `Tensor` is of the specified type.

[`check_numerics(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/check_numerics):
Checks a tensor for NaN and Inf values.

[`get_log_device_placement(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/get_log_device_placement):
Get if device placements are logged.

[`is_numeric_tensor(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/is_numeric_tensor):
Returns `True` if the elements of `tensor` are numbers.

[`set_log_device_placement(...)`](https://tensorflow.google.cn/api_docs/python/tf/debugging/set_log_device_placement):
Set if device placements should be logged.

