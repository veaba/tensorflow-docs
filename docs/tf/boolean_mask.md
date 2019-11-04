![](https://tensorflow.google.cn/images/tf_logo_32px.png)
Apply boolean mask to tensor.

### Aliases:

- [ `tf.compat.v2.boolean_mask` ](/api_docs/python/tf/boolean_mask)


```python
tf.boolean_mask(
  tensor,
  mask,
  axis=None,
  name='boolean_mask'
)

```


Numpy equivalent is  `tensor[mask]` .


```python
# 1-D example
tensor = [0, 1, 2, 3]
mask = np.array([True, False, True, False])
boolean_mask(tensor, mask) &nbsp;# [0, 2]

```


In general,  `0 &lt; dim(mask) = K &lt;= dim(tensor)` , and  `mask` 's shape must matchthe first K dimensions of  `tensor` 's shape.  We then have:   `boolean_mask(tensor, mask)[i, j1,...,jd] = tensor[i1,...,iK,j1,...,jd]` where  `(i1,...,iK)`  is the ith  `True`  entry of  `mask`  (row-major order).The  `axis`  could be used with  `mask`  to indicate the axis to mask from.In that case,  `axis + dim(mask) &lt;= dim(tensor)`  and  `mask` 's shape must matchthe first  `axis + dim(mask)`  dimensions of  `tensor` 's shape.

See also: [ `tf.ragged.boolean_mask` ](https://tensorflow.google.cn/api_docs/python/tf/ragged/boolean_mask), which can be applied to both dense andragged tensors, and can be used if you need to preserve the masked dimensionsof  `tensor`  (rather than flattening them, as [ `tf.boolean_mask` ](https://tensorflow.google.cn/api_docs/python/tf/boolean_mask) does).

#### Args:

- **`tensor`** :  N-D tensor.

- **`mask`** :  K-D boolean tensor, K &lt;= N and K must be known statically.

- **`axis`** :  A 0-D int Tensor representing the axis in  `tensor`  to mask from. Bydefault, axis is 0 which will mask from the first dimension. Otherwise K +axis &lt;= N.

- **`name`** :  A name for this operation (optional).

#### Returns:

(N-K+1)-dimensional tensor populated by entries in  `tensor`  correspondingto  `True`  values in  `mask` .

#### Raises:

- **`ValueError`** :  If shapes do not conform.

#### Examples:


```python
# 2-D example
tensor = [[1, 2], [3, 4], [5, 6]]
mask = np.array([True, False, True])
boolean_mask(tensor, mask) &nbsp;# [[1, 2], [5, 6]]

```

