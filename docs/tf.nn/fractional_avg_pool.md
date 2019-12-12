Performs fractional average pooling on the input.

```
 tf.nn.fractional_avg_pool(    value,    pooling_ratio,    pseudo_random=False,    overlapping=False,    seed=0,    name=None) 
```

Fractional average pooling is similar to Fractional max pooling in the poolingregion generation step. The only difference is that after pooling regions aregenerated, a mean operation is performed instead of a max operation in eachpooling region.

#### Args:
- **`value`** : A  `Tensor` . 4-D with shape  `[batch, height, width, channels]` .
- **`pooling_ratio`** : A list of  `floats`  that has length >= 4.  Pooling ratio foreach dimension of  `value` , currently only supports row and col dimensionand should be >= 1.0. For example, a valid pooling ratio looks like [1.0,1.44, 1.73, 1.0]. The first and last elements must be 1.0 because we don'tallow pooling on batch and channels dimensions.  1.44 and 1.73 are poolingratio on height and width dimensions respectively.
- **`pseudo_random`** : An optional  `bool` .  Defaults to  `False` . When set to  `True` ,generates the pooling sequence in a pseudorandom fashion, otherwise, in arandom fashion. Check paper [Benjamin Graham, FractionalMax-Pooling](http://arxiv.org/abs/1412.6071) for difference betweenpseudorandom and random.
- **`overlapping`** : An optional  `bool` .  Defaults to  `False` .  When set to  `True` ,it means when pooling, the values at the boundary of adjacent poolingcells are used by both cells. For example: `index  0  1  2  3  4`  `value  20 5  16 3  7` If the pooling sequence is [0, 2, 4], then 16, at index 2 will be usedtwice.  The result would be [20, 16] for fractional avg pooling.
- **`seed`** : An optional  `int` .  Defaults to  `0` .  If set to be non-zero, therandom number generator is seeded by the given seed.  Otherwise it isseeded by a random seed.
- **`name`** : A name for the operation (optional).


#### Returns:
A tuple of  `Tensor`  objects ( `output` ,  `row_pooling_sequence` , `col_pooling_sequence` ).  output: Output  `Tensor`  after fractional avg pooling.  Has the same type as     `value` .  row_pooling_sequence: A  `Tensor`  of type  `int64` .  col_pooling_sequence: A  `Tensor`  of type  `int64` .

