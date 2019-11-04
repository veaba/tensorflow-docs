![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png)
Computes the "logical and" of elements across dimensions of a tensor.

### Aliases:

- [ `tf.compat.v2.math.reduce_all` ](/api_docs/python/tf/reduce_all)

- [ `tf.compat.v2.reduce_all` ](/api_docs/python/tf/reduce_all)

- [ `tf.math.reduce_all` ](/api_docs/python/tf/reduce_all)


```python
tf.reduce_all(
  input_tensor,
  axis=None,
  keepdims=False,
  name=None
)

```


Reduces  `input_tensor`  along the dimensions given in  `axis` .Unless  `keepdims`  is true, the rank of the tensor is reduced by 1 for eachentry in  `axis` . If  `keepdims`  is true, the reduced dimensionsare retained with length 1.

If  `axis`  is None, all dimensions are reduced, and atensor with a single element is returned.

#### For example:


```python
x = tf.constant([[True, &nbsp;True], [False, False]])
tf.reduce_all(x) &nbsp;# False
tf.reduce_all(x, 0) &nbsp;# [False, False]
tf.reduce_all(x, 1) &nbsp;# [True, False]

```


#### Args:

- **`input_tensor`** : The boolean tensor to reduce.

- **`axis`** : The dimensions to reduce. If  `None`  (the default), reduces alldimensions. Must be in the range  `[-rank(input_tensor),rank(input_tensor))` .

- **`keepdims`** : If true, retains reduced dimensions with length 1.

- **`name`** : A name for the operation (optional).

#### Returns:

The reduced tensor.

#### Numpy Compatibility

Equivalent to np.all
