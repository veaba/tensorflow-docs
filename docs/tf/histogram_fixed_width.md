![](https://tensorflow.google.cn/images/tf_logo_32px.png)
Return histogram of values.

### Aliases:

- [ `tf.compat.v1.histogram_fixed_width` ](/api_docs/python/tf/histogram_fixed_width)

- [ `tf.compat.v2.histogram_fixed_width` ](/api_docs/python/tf/histogram_fixed_width)


```python
tf.histogram_fixed_width(
  values,
  value_range,
  nbins=100,
  dtype=tf.dtypes.int32,
  name=None
)

```


Given the tensor  `values` , this operation returns a rank 1 histogram countingthe number of entries in  `values`  that fell into every bin.  The bins areequal width and determined by the arguments  `value_range`  and  `nbins` .

#### Args:

- **`values`** :  Numeric  `Tensor` .

- **`value_range`** :  Shape [2]  `Tensor`  of same  `dtype`  as  `values` .values &lt;= value_range[0] will be mapped to hist[0],values &gt;= value_range[1] will be mapped to hist[-1].

- **`nbins`** :  Scalar  `int32 Tensor` .  Number of histogram bins.

- **`dtype`** :  dtype for returned histogram.

- **`name`** :  A name for this operation (defaults to 'histogram_fixed_width').

#### Returns:

A 1-D  `Tensor`  holding histogram of values.

#### Raises:

- **`TypeError`** : If any unsupported dtype is provided.

- **[ `tf.errors.InvalidArgumentError` ](/api_docs/python/tf/errors/InvalidArgumentError)** : If value_range does notsatisfy value_range[0] &lt; value_range[1].

#### Examples:


```python
# Bins will be: &nbsp;(-inf, 1), [1, 2), [2, 3), [3, 4), [4, inf)
nbins = 5
value_range = [0.0, 5.0]
new_values = [-1.0, 0.0, 1.5, 2.0, 5.0, 15]

with tf.compat.v1.get_default_session() as sess:
&nbsp; hist = tf.histogram_fixed_width(new_values, value_range, nbins=5)
&nbsp; variables.global_variables_initializer().run()
&nbsp; sess.run(hist) =&gt; [2, 1, 1, 0, 2]

```

