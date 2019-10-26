Assert that x has a rank in ranks.
### Aliases:
- tf.compat.v2.debugging.assert_rank_in

```
 tf.debugging.assert_rank_in(
    x,
    ranks,
    message=None,
    name=None
)
```
This Op checks that the rank of x is in ranks.
If x has a different rank, message, as well as the shape of x are printed, and InvalidArgumentError is raised.
#### Args:
- x: Tensor.
- ranks: Iterable of scalar Tensor objects.
- message: A string to prefix to the default message.
- name: A name for this operation (optional). Defaults to "assert_rank_in".
#### Returns:
[tf.control_dependencies](https://tensorflow.google.cn/api_docs/python/tf/control_dependencies)Op raising InvalidArgumentError unless rank of x is in ranks. If static checks determine x has matching rank, a no_op is returned. This can be used with  inside of tf.functions to block followup computation until the check has executed.

#### Raises:
- InvalidArgumentError: x does not have rank in ranks, but the rank cannot be statically determined.
- ValueError: If static checks determine x has mismatched rank.
#### Eager Compatibility
returns None
