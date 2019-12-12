Performs fractional max pooling on the input. (deprecated)

```
 tf.compat.v1.nn.fractional_max_pool(    value,    pooling_ratio,    pseudo_random=False,    overlapping=False,    deterministic=False,    seed=0,    seed2=0,    name=None) 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating: `seed2`  and  `deterministic`  args are deprecated.  Use fractional_max_pool_v2.
This is a deprecated version of  `fractional_max_pool` .

Fractional max pooling is slightly different than regular max pooling.  Inregular max pooling, you downsize an input set by taking the maximum value ofsmaller N x N subsections of the set (often 2x2), and try to reduce the set bya factor of N, where N is an integer.  Fractional max pooling, as you mightexpect from the word "fractional", means that the overall reduction ratio Ndoes not have to be an integer.

The sizes of the pooling regions are generated randomly but are fairlyuniform.  For example, let's look at the height dimension, and the constraintson the list of rows that will be pool boundaries.

首先，我们定义如下：

1. input_row_length : the number of rows from the input set
2. output_row_length : which will be smaller than the input
3. alpha = input_row_length / output_row_length : our reduction ratio
4. K = floor(alpha)
5. row_pooling_sequence : this is the result list of pool boundary rows
Then, row_pooling_sequence should satisfy:

1. a[0] = 0 : the first value of the sequence is 0
2. a[end] = input_row_length : the last value of the sequence is the size
3. K <= (a[i+1] - a[i]) <= K+1 : all intervals are K or K+1 size
4. length(row_pooling_sequence) = output_row_length+1
For more details on fractional max pooling, see this paper: [Benjamin Graham,Fractional Max-Pooling](http://arxiv.org/abs/1412.6071)

#### 参数：
- **`value`** : A  `Tensor` . 4-D with shape  `[batch, height, width, channels]` .
- **`pooling_ratio`** : A list of  `floats`  that has length >= 4.  Pooling ratio foreach dimension of  `value` , currently only supports row and col dimensionand should be >= 1.0. For example, a valid pooling ratio looks like [1.0,1.44, 1.73, 1.0]. The first and last elements must be 1.0 because we don'tallow pooling on batch and channels dimensions.  1.44 and 1.73 are poolingratio on height and width dimensions respectively.
- **`pseudo_random`** : An optional  `bool` .  Defaults to  `False` . When set to  `True` ,generates the pooling sequence in a pseudorandom fashion, otherwise, in arandom fashion. Check paper [Benjamin Graham, FractionalMax-Pooling](http://arxiv.org/abs/1412.6071) for difference betweenpseudorandom and random.
- **`overlapping`** : An optional  `bool` .  Defaults to  `False` .  When set to  `True` ,it means when pooling, the values at the boundary of adjacent poolingcells are used by both cells. For example: `index  0  1  2  3  4`  `value  20 5  16 3  7` If the pooling sequence is [0, 2, 4], then 16, at index 2 will be usedtwice.  The result would be [20, 16] for fractional max pooling.
- **`deterministic`** : An optional  `bool` .  Deprecated; use  `fractional_max_pool_v2` instead.
- **`seed`** : An optional  `int` .  Defaults to  `0` .  If set to be non-zero, therandom number generator is seeded by the given seed.  Otherwise it isseeded by a random seed.
- **`seed2`** : An optional  `int` .  Deprecated; use  `fractional_max_pool_v2`  instead.
- **`name`** : A name for the operation (optional).


#### 返回：
A tuple of  `Tensor`  objects ( `output` ,  `row_pooling_sequence` , `col_pooling_sequence` ).  output: Output  `Tensor`  after fractional max pooling.  Has the same type as     `value` .  row_pooling_sequence: A  `Tensor`  of type  `int64` .  col_pooling_sequence: A  `Tensor`  of type  `int64` .

