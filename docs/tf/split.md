
Splits a tensor into sub tensors.
### Aliases:
- `tf.compat.v1.split`
- `tf.compat.v2.split`

```
 tf.split(
    value,
    num_or_size_splits,
    axis=0,
    num=None,
    name='split'
)
```
### Used in the guide:
- ``M``a``s``k``i``n``g`` ``a``n``d`` ``p``a``d``d``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``V``a``r``i``a``t``i``o``n``a``l`` ``A``u``t``o``e``n``c``o``d``e``r``

If num_or_size_splits is an integer, then value is split along dimension axis into num_split smaller tensors. This requires that num_split evenly divides value.shape[axis].

If num_or_size_splits is a 1-D Tensor (or list), we call it size_splits and value is split into len(size_splits) elements. The shape of the i-th element has the same size as the value except along dimension axis where the size is size_splits[i].
#### For example:

```
 # 'value' is a tensor with shape [5, 30]
# Split 'value' into 3 tensors with sizes [4, 15, 11] along dimension 1
split0, split1, split2 = tf.split(value, [4, 15, 11], 1)
tf.shape(split0)  # [5, 4]
tf.shape(split1)  # [5, 15]
tf.shape(split2)  # [5, 11]
# Split 'value' into 3 tensors along dimension 1
split0, split1, split2 = tf.split(value, num_or_size_splits=3, axis=1)
tf.shape(split0)  # [5, 10]
```
#### Args:
- `value`: The `Tensor` to split.
- `num_or_size_splits`: Either an integer indicating the number of splits along split_dim or a 1-D integer `Tensor` or Python list containing the sizes of each output tensor along split_dim. If a scalar then it must evenly divide `value`.shape[axis]; otherwise the sum of sizes along the split dimension must match that of the `value`.
#### Returns:

if num_or_size_splits is a scalar returns num_or_size_splits Tensor objects; if num_or_size_splits is a 1-D Tensor returns num_or_size_splits.get_shape[0] Tensor objects resulting from splitting value.
#### Raises:
- `ValueError`: If `num` is unspecified and cannot be inferred.

Splits a tensor into sub tensors.
### Aliases:
- `tf.compat.v1.split`
- `tf.compat.v2.split`

```
 tf.split(
    value,
    num_or_size_splits,
    axis=0,
    num=None,
    name='split'
)
```
### Used in the guide:
- ``M``a``s``k``i``n``g`` ``a``n``d`` ``p``a``d``d``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``V``a``r``i``a``t``i``o``n``a``l`` ``A``u``t``o``e``n``c``o``d``e``r``

If num_or_size_splits is an integer, then value is split along dimension axis into num_split smaller tensors. This requires that num_split evenly divides value.shape[axis].

If num_or_size_splits is a 1-D Tensor (or list), we call it size_splits and value is split into len(size_splits) elements. The shape of the i-th element has the same size as the value except along dimension axis where the size is size_splits[i].
#### For example:

```
 # 'value' is a tensor with shape [5, 30]
# Split 'value' into 3 tensors with sizes [4, 15, 11] along dimension 1
split0, split1, split2 = tf.split(value, [4, 15, 11], 1)
tf.shape(split0)  # [5, 4]
tf.shape(split1)  # [5, 15]
tf.shape(split2)  # [5, 11]
# Split 'value' into 3 tensors along dimension 1
split0, split1, split2 = tf.split(value, num_or_size_splits=3, axis=1)
tf.shape(split0)  # [5, 10]
```
#### Args:
- `value`: The `Tensor` to split.
- `num_or_size_splits`: Either an integer indicating the number of splits along split_dim or a 1-D integer `Tensor` or Python list containing the sizes of each output tensor along split_dim. If a scalar then it must evenly divide `value`.shape[axis]; otherwise the sum of sizes along the split dimension must match that of the `value`.
#### Returns:

if num_or_size_splits is a scalar returns num_or_size_splits Tensor objects; if num_or_size_splits is a 1-D Tensor returns num_or_size_splits.get_shape[0] Tensor objects resulting from splitting value.
#### Raises:
- `ValueError`: If `num` is unspecified and cannot be inferred.
