Defined in generated file: `python/ops/gen_data_flow_ops.py`
Partitions `data` into `num_partitions` tensors using indices from `partitions`.
### Aliases:
- `tf.compat.v1.dynamic_partition`
- `tf.compat.v2.dynamic_partition`

```
 tf.dynamic_partition(
    data,
    partitions,
    num_partitions,
    name=None
)
```
For each `i`ndex tuple `js` of s`i`ze `partitions.ndim`, the sl`i`ce `data[js, ...]` becomes part of `outputs[partitions[js]]`. The sl`i`ces w`i`th `partitions[js] = i` are placed `i`n `outputs[i]` `i`n lex`i`cograph`i`c order of `js`, and the f`i`rst d`i`mens`i`on of `outputs[i]` `i`s the number of entr`i`es `i`n `partitions` equal to `i`. In deta`i`l,

```
     outputs[i].shape = [sum(partitions == i)] + data.shape[partitions.ndim:]

    outputs[i] = pack([data[js, ...] for js if partitions[js] == i])
```
`data.shape` must start with `partitions.shape`.
#### For example:

```
     # Scalar partitions.
    partitions = 1
    num_partitions = 2
    data = [10, 20]
    outputs[0] = []  # Empty with shape [0, 2]
    outputs[1] = [[10, 20]]

    # Vector partitions.
    partitions = [0, 0, 1, 1, 0]
    num_partitions = 2
    data = [10, 20, 30, 40, 50]
    outputs[0] = [10, 20, 50]
    outputs[1] = [30, 40]
```
See `dynamic_stitch` for an example on how to merge partitions back.
#### Args:
- `data`: A `Tensor`.
- `partitions`: A `Tensor` of type `int32`. Any shape. Indices in the range `[0, num_partitions)`.
- `num_partitions`: An `int` that is `>= 1`. The number of partitions to output.
- `name`: A `name` for the operation (optional).
#### Returns:
A list of `num_partitions` `Tensor` objects with the same type as `data`.
