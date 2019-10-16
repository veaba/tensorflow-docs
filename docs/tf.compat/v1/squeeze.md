
Removes dimensions of size 1 from the shape of a tensor. (deprecated arguments)

```
 tf.compat.v1.squeeze(
    input,
    axis=None,
    name=None,
    squeeze_dims=None
)
```

Given a tensor input, this operation returns a tensor of the same type with all dimensions of size 1 removed. If you don't want to remove all size 1 dimensions, you can remove specific size 1 dimensions by specifying axis.
#### For example:

```
 # 't' is a tensor of shape [1, 2, 1, 3, 1, 1]
tf.shape(tf.squeeze(t))  # [2, 3]
```

Or, to remove specific size 1 dimensions:

```
 # 't' is a tensor of shape [1, 2, 1, 3, 1, 1]
tf.shape(tf.squeeze(t, [2, 4]))  # [1, 2, 3, 1]
```
#### Args:
- `input`: A `Tensor`. The `input` to squeeze.
#### Returns:

A Tensor. Has the same type as input. Contains the same data as input, but has one or more dimensions of size 1 removed.
#### Raises:
- `ValueError`: When both `squeeze_dims` and `axis` are specified.
