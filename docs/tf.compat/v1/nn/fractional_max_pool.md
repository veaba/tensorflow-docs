Performs fractional max pooling on the input. (deprecated)

```
 tf.compat.v1.nn.fractional_max_pool(
    value,
    pooling_ratio,
    pseudo_random=False,
    overlapping=False,
    deterministic=False,
    seed=0,
    seed2=0,
    name=None
)
```
This is a deprecated version of fractional_max_pool.
Fractional max pooling is slightly different than regular max pooling. In regular max pooling, you downsize an input set by taking the maximum value of smaller N x N subsections of the set (often 2x2), and try to reduce the set by a factor of N, where N is an integer. Fractional max pooling, as you might expect from the word "fractional", means that the overall reduction ratio N does not have to be an integer.
The sizes of the pooling regions are generated randomly but are fairly uniform. For example, let's look at the height dimension, and the constraints on the list of rows that will be pool boundaries.
First we define the following:
Then, row_pooling_sequence should satisfy:
[Benjamin Graham, Fractional Max-Pooling](http://arxiv.org/abs/1412.6071)For more details on fractional max pooling, see this paper: 

#### Args:
- value: A Tensor. 4-D with shape [batch, height, width, channels].
- pooling_ratio: A list of floats that has length >= 4. Pooling ratio for each dimension of value, currently only supports row and col dimension and should be >= 1.0. For example, a valid pooling ratio looks like [1.0, 1.44, 1.73, 1.0]. The first and last elements must be 1.0 because we don't allow pooling on batch and channels dimensions. 1.44 and 1.73 are pooling ratio on height and width dimensions respectively.
- pseudo_random: An optional bool. Defaults to False. When set to True, generates the pooling sequence in a pseudorandom fashion, otherwise, in a random fashion. Check paper Benjamin Graham, Fractional Max-Pooling for difference between pseudorandom and random.
- overlapping: An optional bool. Defaults to False. When set to True, it means when pooling, the values at the boundary of adjacent pooling cells are used by both cells. For example: index 0 1 2 3 4 value 20 5 16 3 7 If the pooling sequence is [0, 2, 4], then 16, at index 2 will be used twice. The result would be [20, 16] for fractional max pooling.
- deterministic: An optional bool. Deprecated; use fractional_max_pool_v2 instead.
- seed: An optional int. Defaults to 0. If set to be non-zero, the random number generator is seeded by the given seed. Otherwise it is seeded by a random seed.
- seed2: An optional int. Deprecated; use fractional_max_pool_v2 instead.
- name: A name for the operation (optional).
#### Returns:
A tuple of Tensor objects (output, row_pooling_sequence, col_pooling_sequence). output: Output Tensor after fractional max pooling. Has the same type as value. row_pooling_sequence: A Tensor of type int64. col_pooling_sequence: A Tensor of type int64.
