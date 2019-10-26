Prints a list of tensors. (deprecated)

```
 tf.compat.v1.Print(
    input_,
    data,
    message=None,
    first_n=None,
    summarize=None,
    name=None
)
```
[tf.identity](https://tensorflow.google.cn/api_docs/python/tf/identity)This is an identity op (behaves like ) with the side effect of printing data when evaluating.

#### Args:
- input_: A tensor passed through this op.
- data: A list of tensors to print out when op is evaluated.
- message: A string, prefix of the error message.
- first_n: Only log first_n number of times. Negative numbers log always; this is the default.
- summarize: Only print this many entries of each tensor. If None, then a maximum of 3 elements are printed per input tensor.
- name: A name for the operation (optional).
#### Returns:
A Tensor. Has the same type and contents as input_.
from __future__ import print_function
