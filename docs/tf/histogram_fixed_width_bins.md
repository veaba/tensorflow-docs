
Bins the given values for use in a histogram.


### Aliases:
- [ `tf.compat.v1.histogram_fixed_width_bins` ](/api_docs/python/tf/histogram_fixed_width_bins)
- [ `tf.compat.v2.histogram_fixed_width_bins` ](/api_docs/python/tf/histogram_fixed_width_bins)


```
tf.histogram_fixed_width_bins(
    values,
    value_range,
    nbins=100,
    dtype=tf.dtypes.int32,
    name=None
)

```


Given the tensor  `values` , this operation returns a rank 1  `Tensor` representing the indices of a histogram into which each elementof  `values`  would be binned. The bins are equal width anddetermined by the arguments  `value_range`  and  `nbins` .


#### Args:
- **`values`** :  Numeric  `Tensor` .
- **`value_range`** :  Shape [2]  `Tensor`  of same  `dtype`  as  `values` .values <= value_range[0] will be mapped to hist[0],values >= value_range[1] will be mapped to hist[-1].
- **`nbins`** :  Scalar  `int32 Tensor` .  Number of histogram bins.
- **`dtype`** :  dtype for returned histogram.
- **`name`** :  A name for this operation (defaults to 'histogram_fixed_width').


#### Returns:

A  `Tensor`  holding the indices of the binned values whose shape matches `values` .


#### Raises:
- **`TypeError`** : If any unsupported dtype is provided.
- **[ `tf.errors.InvalidArgumentError` ](/api_docs/python/tf/errors/InvalidArgumentError)** : If value_range does notsatisfy value_range[0] < value_range[1].


#### Examples:


```
# Bins will be:  (-inf, 1), [1, 2), [2, 3), [3, 4), [4, inf)
nbins = 5
value_range = [0.0, 5.0]
new_values = [-1.0, 0.0, 1.5, 2.0, 5.0, 15]

with tf.compat.v1.get_default_session() as sess:
  indices = tf.histogram_fixed_width_bins(new_values, value_range, nbins=5)
  variables.global_variables_initializer().run()
  sess.run(indices) # [0, 0, 1, 2, 4, 4]

```

