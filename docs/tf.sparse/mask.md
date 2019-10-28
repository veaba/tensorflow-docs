Masks elements of `IndexedSlices`.
### Aliases:
- `tf.compat.v1.sparse.mask`
- `tf.compat.v1.sparse_mask`
- `tf.compat.v2.sparse.mask`

```
 tf.sparse.mask(
    a,
    mask_indices,
    name=None
)
```
Given `a`n `IndexedSlices` inst`a`nce `a`, returns `a`nother `IndexedSlices` th`a`t cont`a`ins `a` subset of the slices of `a`. Only the slices `a`t indices not specified in `mask_indices` `a`re returned.
This is useful when you need to extract a subset of slices in an `IndexedSlices` object.
#### For example:

```
 # `a` contains slices at indices [12, 26, 37, 45] from a large tensor
# with shape [1000, 10]
a.indices  # [12, 26, 37, 45]
tf.shape(a.values)  # [4, 10]

# `b` will be the subset of `a` slices at its second and third indices, so
# we want to mask its first and last indices (which are at absolute
# indices 12, 45)
b = tf.sparse.mask(a, [12, 45])

b.indices  # [26, 37]
tf.shape(b.values)  # [2, 10]
```
#### Args:
- `a`: An `IndexedSlices` inst`a`nce.
- `mask_indices`: Indices of elements to mask.
- `name`: A `name` for the operation (optional).
#### Returns:
The masked `IndexedSlices` instance.
