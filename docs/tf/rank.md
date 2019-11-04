![](https://tensorflow.google.cn/images/tf_logo_32px.png)
Returns the rank of a tensor.

### Aliases:

- [ `tf.compat.v1.rank` ](/api_docs/python/tf/rank)

- [ `tf.compat.v2.rank` ](/api_docs/python/tf/rank)


```python
tf.rank(
  input,
  name=None
)

```


Returns a 0-D  `int32`   `Tensor`  representing the rank of  `input` .

#### For example:


```python
# shape of tensor 't' is [2, 2, 3]
t = tf.constant([[[1, 1, 1], [2, 2, 2]], [[3, 3, 3], [4, 4, 4]]])
tf.rank(t) &nbsp;# 3

```


**Note** : The rank of a tensor is not the same as the rank of a matrix. Therank of a tensor is the number of indices required to uniquely select eachelement of the tensor. Rank is also known as "order", "degree", or "ndims."

#### Args:

- **`input`** : A  `Tensor`  or  `SparseTensor` .

- **`name`** : A name for the operation (optional).

#### Returns:

A  `Tensor`  of type  `int32` .

#### Numpy Compatibility

Equivalent to np.ndim
