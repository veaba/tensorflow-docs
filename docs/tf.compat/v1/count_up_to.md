Increments 'ref' until it reaches 'limit'. (deprecated)

```
 tf.compat.v1.count_up_to(
    ref,
    limit,
    name=None
)
```
#### Args:
- ref: A Variable. Must be one of the following types: int32, int64. Should be from a scalar Variable node.
- limit: An int. If incrementing ref would bring it above limit, instead generates an 'OutOfRange' error.
- name: A name for the operation (optional).
#### Returns:
A Tensor. Has the same type as ref. A copy of the input before increment. If nothing else modifies the input, the values produced will all be distinct.
