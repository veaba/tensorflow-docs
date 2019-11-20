[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/compat/v2/ragged)  
---  
  
Ragged Tensors.

This package defines ops for manipulating ragged tensors
([`tf.RaggedTensor`](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor)),
which are tensors with non-uniform shapes. In particular, each `RaggedTensor`
has one or more _ragged dimensions_ , which are dimensions whose slices may
have different lengths. For example, the inner (column) dimension of `rt=[[3,
1, 4, 1], [], [5, 9, 2], [6], []]` is ragged, since the column slices (`rt[0,
:]`, ..., `rt[4, :]`) have different lengths. For a more detailed description
of ragged tensors, see the
[`tf.RaggedTensor`](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor)
class documentation and the [Ragged Tensor Guide](/guide/ragged_tensors).

### Additional ops that support `RaggedTensor`

Arguments that accept `RaggedTensor`s are marked in **bold**.

  * `tf.batch_gather`( **params** , **indices** , name=`None`)
  * [`tf.bitwise.bitwise_and`](https://tensorflow.google.cn/api_docs/python/tf/bitwise/bitwise_and)( **x** , **y** , name=`None`)
  * [`tf.bitwise.bitwise_or`](https://tensorflow.google.cn/api_docs/python/tf/bitwise/bitwise_or)( **x** , **y** , name=`None`)
  * [`tf.bitwise.bitwise_xor`](https://tensorflow.google.cn/api_docs/python/tf/bitwise/bitwise_xor)( **x** , **y** , name=`None`)
  * [`tf.bitwise.invert`](https://tensorflow.google.cn/api_docs/python/tf/bitwise/invert)( **x** , name=`None`)
  * [`tf.bitwise.left_shift`](https://tensorflow.google.cn/api_docs/python/tf/bitwise/left_shift)( **x** , **y** , name=`None`)
  * [`tf.bitwise.right_shift`](https://tensorflow.google.cn/api_docs/python/tf/bitwise/right_shift)( **x** , **y** , name=`None`)
  * [`tf.clip_by_value`](https://tensorflow.google.cn/api_docs/python/tf/clip_by_value)( **t** , clip_value_min, clip_value_max, name=`None`)
  * [`tf.concat`](https://tensorflow.google.cn/api_docs/python/tf/concat)( **values** , axis, name=`'concat'`)
  * [`tf.debugging.check_numerics`](https://tensorflow.google.cn/api_docs/python/tf/debugging/check_numerics)( **tensor** , message, name=`None`)
  * [`tf.dtypes.cast`](https://tensorflow.google.cn/api_docs/python/tf/dtypes/cast)( **x** , dtype, name=`None`)
  * [`tf.dtypes.complex`](https://tensorflow.google.cn/api_docs/python/tf/dtypes/complex)( **real** , **imag** , name=`None`)
  * [`tf.dtypes.saturate_cast`](https://tensorflow.google.cn/api_docs/python/tf/dtypes/saturate_cast)( **value** , dtype, name=`None`)
  * [`tf.dynamic_partition`](https://tensorflow.google.cn/api_docs/python/tf/dynamic_partition)( **data** , **partitions** , num_partitions, name=`None`)
  * [`tf.expand_dims`](https://tensorflow.google.cn/api_docs/python/tf/expand_dims)( **input** , axis=`None`, name=`None`, dim=`None`)
  * [`tf.gather_nd`](https://tensorflow.google.cn/api_docs/python/tf/gather_nd)( **params** , **indices** , name=`None`, batch_dims=`0`)
  * [`tf.gather`](https://tensorflow.google.cn/api_docs/python/tf/gather)( **params** , **indices** , validate_indices=`None`, name=`None`, axis=`None`, batch_dims=`0`)
  * [`tf.identity`](https://tensorflow.google.cn/api_docs/python/tf/identity)( **input** , name=`None`)
  * [`tf.io.decode_base64`](https://tensorflow.google.cn/api_docs/python/tf/io/decode_base64)( **input** , name=`None`)
  * [`tf.io.decode_compressed`](https://tensorflow.google.cn/api_docs/python/tf/io/decode_compressed)( **bytes** , compression_type=`''`, name=`None`)
  * [`tf.io.encode_base64`](https://tensorflow.google.cn/api_docs/python/tf/io/encode_base64)( **input** , pad=`False`, name=`None`)
  * [`tf.math.abs`](https://tensorflow.google.cn/api_docs/python/tf/math/abs)( **x** , name=`None`)
  * [`tf.math.acos`](https://tensorflow.google.cn/api_docs/python/tf/math/acos)( **x** , name=`None`)
  * [`tf.math.acosh`](https://tensorflow.google.cn/api_docs/python/tf/math/acosh)( **x** , name=`None`)
  * [`tf.math.add_n`](https://tensorflow.google.cn/api_docs/python/tf/math/add_n)( **inputs** , name=`None`)
  * [`tf.math.add`](https://tensorflow.google.cn/api_docs/python/tf/math/add)( **x** , **y** , name=`None`)
  * [`tf.math.angle`](https://tensorflow.google.cn/api_docs/python/tf/math/angle)( **input** , name=`None`)
  * [`tf.math.asin`](https://tensorflow.google.cn/api_docs/python/tf/math/asin)( **x** , name=`None`)
  * [`tf.math.asinh`](https://tensorflow.google.cn/api_docs/python/tf/math/asinh)( **x** , name=`None`)
  * [`tf.math.atan2`](https://tensorflow.google.cn/api_docs/python/tf/math/atan2)( **y** , **x** , name=`None`)
  * [`tf.math.atan`](https://tensorflow.google.cn/api_docs/python/tf/math/atan)( **x** , name=`None`)
  * [`tf.math.atanh`](https://tensorflow.google.cn/api_docs/python/tf/math/atanh)( **x** , name=`None`)
  * [`tf.math.ceil`](https://tensorflow.google.cn/api_docs/python/tf/math/ceil)( **x** , name=`None`)
  * [`tf.math.conj`](https://tensorflow.google.cn/api_docs/python/tf/math/conj)( **x** , name=`None`)
  * [`tf.math.cos`](https://tensorflow.google.cn/api_docs/python/tf/math/cos)( **x** , name=`None`)
  * [`tf.math.cosh`](https://tensorflow.google.cn/api_docs/python/tf/math/cosh)( **x** , name=`None`)
  * [`tf.math.digamma`](https://tensorflow.google.cn/api_docs/python/tf/math/digamma)( **x** , name=`None`)
  * [`tf.math.divide_no_nan`](https://tensorflow.google.cn/api_docs/python/tf/math/divide_no_nan)( **x** , **y** , name=`None`)
  * [`tf.math.divide`](https://tensorflow.google.cn/api_docs/python/tf/math/divide)( **x** , **y** , name=`None`)
  * [`tf.math.equal`](https://tensorflow.google.cn/api_docs/python/tf/math/equal)( **x** , **y** , name=`None`)
  * [`tf.math.erf`](https://tensorflow.google.cn/api_docs/python/tf/math/erf)( **x** , name=`None`)
  * [`tf.math.erfc`](https://tensorflow.google.cn/api_docs/python/tf/math/erfc)( **x** , name=`None`)
  * [`tf.math.exp`](https://tensorflow.google.cn/api_docs/python/tf/math/exp)( **x** , name=`None`)
  * [`tf.math.expm1`](https://tensorflow.google.cn/api_docs/python/tf/math/expm1)( **x** , name=`None`)
  * [`tf.math.floor`](https://tensorflow.google.cn/api_docs/python/tf/math/floor)( **x** , name=`None`)
  * [`tf.math.floordiv`](https://tensorflow.google.cn/api_docs/python/tf/math/floordiv)( **x** , **y** , name=`None`)
  * [`tf.math.floormod`](https://tensorflow.google.cn/api_docs/python/tf/math/floormod)( **x** , **y** , name=`None`)
  * [`tf.math.greater_equal`](https://tensorflow.google.cn/api_docs/python/tf/math/greater_equal)( **x** , **y** , name=`None`)
  * [`tf.math.greater`](https://tensorflow.google.cn/api_docs/python/tf/math/greater)( **x** , **y** , name=`None`)
  * [`tf.math.imag`](https://tensorflow.google.cn/api_docs/python/tf/math/imag)( **input** , name=`None`)
  * [`tf.math.is_finite`](https://tensorflow.google.cn/api_docs/python/tf/math/is_finite)( **x** , name=`None`)
  * [`tf.math.is_inf`](https://tensorflow.google.cn/api_docs/python/tf/math/is_inf)( **x** , name=`None`)
  * [`tf.math.is_nan`](https://tensorflow.google.cn/api_docs/python/tf/math/is_nan)( **x** , name=`None`)
  * [`tf.math.less_equal`](https://tensorflow.google.cn/api_docs/python/tf/math/less_equal)( **x** , **y** , name=`None`)
  * [`tf.math.less`](https://tensorflow.google.cn/api_docs/python/tf/math/less)( **x** , **y** , name=`None`)
  * [`tf.math.lgamma`](https://tensorflow.google.cn/api_docs/python/tf/math/lgamma)( **x** , name=`None`)
  * [`tf.math.log1p`](https://tensorflow.google.cn/api_docs/python/tf/math/log1p)( **x** , name=`None`)
  * [`tf.math.log_sigmoid`](https://tensorflow.google.cn/api_docs/python/tf/math/log_sigmoid)( **x** , name=`None`)
  * [`tf.math.log`](https://tensorflow.google.cn/api_docs/python/tf/math/log)( **x** , name=`None`)
  * [`tf.math.logical_and`](https://tensorflow.google.cn/api_docs/python/tf/math/logical_and)( **x** , **y** , name=`None`)
  * [`tf.math.logical_not`](https://tensorflow.google.cn/api_docs/python/tf/math/logical_not)( **x** , name=`None`)
  * [`tf.math.logical_or`](https://tensorflow.google.cn/api_docs/python/tf/math/logical_or)( **x** , **y** , name=`None`)
  * [`tf.math.logical_xor`](https://tensorflow.google.cn/api_docs/python/tf/math/logical_xor)( **x** , **y** , name=`'LogicalXor'`)
  * [`tf.math.maximum`](https://tensorflow.google.cn/api_docs/python/tf/math/maximum)( **x** , **y** , name=`None`)
  * [`tf.math.minimum`](https://tensorflow.google.cn/api_docs/python/tf/math/minimum)( **x** , **y** , name=`None`)
  * [`tf.math.multiply`](https://tensorflow.google.cn/api_docs/python/tf/math/multiply)( **x** , **y** , name=`None`)
  * [`tf.math.negative`](https://tensorflow.google.cn/api_docs/python/tf/math/negative)( **x** , name=`None`)
  * [`tf.math.not_equal`](https://tensorflow.google.cn/api_docs/python/tf/math/not_equal)( **x** , **y** , name=`None`)
  * [`tf.math.pow`](https://tensorflow.google.cn/api_docs/python/tf/math/pow)( **x** , **y** , name=`None`)
  * [`tf.math.real`](https://tensorflow.google.cn/api_docs/python/tf/math/real)( **input** , name=`None`)
  * [`tf.math.reciprocal`](https://tensorflow.google.cn/api_docs/python/tf/math/reciprocal)( **x** , name=`None`)
  * [`tf.math.reduce_any`](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_any)( **input_tensor** , axis=`None`, keepdims=`False`, name=`None`)
  * [`tf.math.reduce_max`](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_max)( **input_tensor** , axis=`None`, keepdims=`False`, name=`None`)
  * [`tf.math.reduce_mean`](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_mean)( **input_tensor** , axis=`None`, keepdims=`False`, name=`None`)
  * [`tf.math.reduce_min`](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_min)( **input_tensor** , axis=`None`, keepdims=`False`, name=`None`)
  * [`tf.math.reduce_prod`](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_prod)( **input_tensor** , axis=`None`, keepdims=`False`, name=`None`)
  * [`tf.math.reduce_sum`](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_sum)( **input_tensor** , axis=`None`, keepdims=`False`, name=`None`)
  * [`tf.math.rint`](https://tensorflow.google.cn/api_docs/python/tf/math/rint)( **x** , name=`None`)
  * [`tf.math.round`](https://tensorflow.google.cn/api_docs/python/tf/math/round)( **x** , name=`None`)
  * [`tf.math.rsqrt`](https://tensorflow.google.cn/api_docs/python/tf/math/rsqrt)( **x** , name=`None`)
  * [`tf.math.sign`](https://tensorflow.google.cn/api_docs/python/tf/math/sign)( **x** , name=`None`)
  * [`tf.math.sin`](https://tensorflow.google.cn/api_docs/python/tf/math/sin)( **x** , name=`None`)
  * [`tf.math.sinh`](https://tensorflow.google.cn/api_docs/python/tf/math/sinh)( **x** , name=`None`)
  * [`tf.math.sqrt`](https://tensorflow.google.cn/api_docs/python/tf/math/sqrt)( **x** , name=`None`)
  * [`tf.math.square`](https://tensorflow.google.cn/api_docs/python/tf/math/square)( **x** , name=`None`)
  * [`tf.math.squared_difference`](https://tensorflow.google.cn/api_docs/python/tf/math/squared_difference)( **x** , **y** , name=`None`)
  * [`tf.math.subtract`](https://tensorflow.google.cn/api_docs/python/tf/math/subtract)( **x** , **y** , name=`None`)
  * [`tf.math.tan`](https://tensorflow.google.cn/api_docs/python/tf/math/tan)( **x** , name=`None`)
  * [`tf.math.truediv`](https://tensorflow.google.cn/api_docs/python/tf/math/truediv)( **x** , **y** , name=`None`)
  * [`tf.math.unsorted_segment_max`](https://tensorflow.google.cn/api_docs/python/tf/math/unsorted_segment_max)( **data** , **segment_ids** , num_segments, name=`None`)
  * [`tf.math.unsorted_segment_mean`](https://tensorflow.google.cn/api_docs/python/tf/math/unsorted_segment_mean)( **data** , **segment_ids** , num_segments, name=`None`)
  * [`tf.math.unsorted_segment_min`](https://tensorflow.google.cn/api_docs/python/tf/math/unsorted_segment_min)( **data** , **segment_ids** , num_segments, name=`None`)
  * [`tf.math.unsorted_segment_prod`](https://tensorflow.google.cn/api_docs/python/tf/math/unsorted_segment_prod)( **data** , **segment_ids** , num_segments, name=`None`)
  * [`tf.math.unsorted_segment_sqrt_n`](https://tensorflow.google.cn/api_docs/python/tf/math/unsorted_segment_sqrt_n)( **data** , **segment_ids** , num_segments, name=`None`)
  * [`tf.math.unsorted_segment_sum`](https://tensorflow.google.cn/api_docs/python/tf/math/unsorted_segment_sum)( **data** , **segment_ids** , num_segments, name=`None`)
  * [`tf.ones_like`](https://tensorflow.google.cn/api_docs/python/tf/ones_like)( **tensor** , dtype=`None`, name=`None`, optimize=`True`)
  * [`tf.rank`](https://tensorflow.google.cn/api_docs/python/tf/rank)( **input** , name=`None`)
  * [`tf.realdiv`](https://tensorflow.google.cn/api_docs/python/tf/realdiv)( **x** , **y** , name=`None`)
  * [`tf.reduce_all`](https://tensorflow.google.cn/api_docs/python/tf/reduce_all)( **input_tensor** , axis=`None`, keepdims=`False`, name=`None`)
  * [`tf.size`](https://tensorflow.google.cn/api_docs/python/tf/size)( **input** , name=`None`, out_type=[`tf.int32`](https://tensorflow.google.cn/api_docs/python/tf#int32))
  * [`tf.squeeze`](https://tensorflow.google.cn/api_docs/python/tf/squeeze)( **input** , axis=`None`, name=`None`, squeeze_dims=`None`)
  * [`tf.stack`](https://tensorflow.google.cn/api_docs/python/tf/stack)( **values** , axis=`0`, name=`'stack'`)
  * [`tf.strings.as_string`](https://tensorflow.google.cn/api_docs/python/tf/strings/as_string)( **input** , precision=`-1`, scientific=`False`, shortest=`False`, width=`-1`, fill=`''`, name=`None`)
  * [`tf.strings.join`](https://tensorflow.google.cn/api_docs/python/tf/strings/join)( **inputs** , separator=`''`, name=`None`)
  * [`tf.strings.length`](https://tensorflow.google.cn/api_docs/python/tf/strings/length)( **input** , name=`None`, unit=`'BYTE'`)
  * [`tf.strings.reduce_join`](https://tensorflow.google.cn/api_docs/python/tf/strings/reduce_join)( **inputs** , axis=`None`, keepdims=`False`, separator=`''`, name=`None`)
  * [`tf.strings.regex_full_match`](https://tensorflow.google.cn/api_docs/python/tf/strings/regex_full_match)( **input** , pattern, name=`None`)
  * [`tf.strings.regex_replace`](https://tensorflow.google.cn/api_docs/python/tf/strings/regex_replace)( **input** , pattern, rewrite, replace_global=`True`, name=`None`)
  * [`tf.strings.strip`](https://tensorflow.google.cn/api_docs/python/tf/strings/strip)( **input** , name=`None`)
  * [`tf.strings.substr`](https://tensorflow.google.cn/api_docs/python/tf/strings/substr)( **input** , pos, len, name=`None`, unit=`'BYTE'`)
  * [`tf.strings.to_hash_bucket_fast`](https://tensorflow.google.cn/api_docs/python/tf/strings/to_hash_bucket_fast)( **input** , num_buckets, name=`None`)
  * [`tf.strings.to_hash_bucket_strong`](https://tensorflow.google.cn/api_docs/python/tf/strings/to_hash_bucket_strong)( **input** , num_buckets, key, name=`None`)
  * [`tf.strings.to_hash_bucket`](https://tensorflow.google.cn/api_docs/python/tf/strings/to_hash_bucket)( **input** , num_buckets, name=`None`)
  * [`tf.strings.to_hash_bucket`](https://tensorflow.google.cn/api_docs/python/tf/strings/to_hash_bucket)( **input** , num_buckets, name=`None`)
  * [`tf.strings.to_number`](https://tensorflow.google.cn/api_docs/python/tf/strings/to_number)( **input** , out_type=[`tf.float32`](https://tensorflow.google.cn/api_docs/python/tf#float32), name=`None`)
  * [`tf.strings.unicode_script`](https://tensorflow.google.cn/api_docs/python/tf/strings/unicode_script)( **input** , name=`None`)
  * [`tf.tile`](https://tensorflow.google.cn/api_docs/python/tf/tile)( **input** , multiples, name=`None`)
  * [`tf.truncatediv`](https://tensorflow.google.cn/api_docs/python/tf/truncatediv)( **x** , **y** , name=`None`)
  * [`tf.truncatemod`](https://tensorflow.google.cn/api_docs/python/tf/truncatemod)( **x** , **y** , name=`None`)
  * [`tf.where`](https://tensorflow.google.cn/api_docs/python/tf/where)( **condition** , **x** =`None`, **y** =`None`, name=`None`)
  * [`tf.zeros_like`](https://tensorflow.google.cn/api_docs/python/tf/zeros_like)( **tensor** , dtype=`None`, name=`None`, optimize=`True`)n

## Functions

[`boolean_mask(...)`](https://tensorflow.google.cn/api_docs/python/tf/ragged/boolean_mask):
Applies a boolean mask to `data` without flattening the mask dimensions.

[`constant(...)`](https://tensorflow.google.cn/api_docs/python/tf/ragged/constant):
Constructs a constant RaggedTensor from a nested Python list.

[`map_flat_values(...)`](https://tensorflow.google.cn/api_docs/python/tf/ragged/map_flat_values):
Applies `op` to the values of one or more RaggedTensors.

[`range(...)`](https://tensorflow.google.cn/api_docs/python/tf/ragged/range):
Returns a `RaggedTensor` containing the specified sequences of numbers.

[`row_splits_to_segment_ids(...)`](https://tensorflow.google.cn/api_docs/python/tf/ragged/row_splits_to_segment_ids):
Generates the segmentation corresponding to a RaggedTensor `row_splits`.

[`segment_ids_to_row_splits(...)`](https://tensorflow.google.cn/api_docs/python/tf/ragged/segment_ids_to_row_splits):
Generates the RaggedTensor `row_splits` corresponding to a segmentation.

[`stack(...)`](https://tensorflow.google.cn/api_docs/python/tf/ragged/stack):
Stacks a list of rank-`R` tensors into one rank-`(R+1)` `RaggedTensor`.

[`stack_dynamic_partitions(...)`](https://tensorflow.google.cn/api_docs/python/tf/ragged/stack_dynamic_partitions):
Stacks dynamic partitions of a Tensor or RaggedTensor.

