![](https://tensorflow.google.cn/images/tf_logo_32px.png)
Broadcasts parameters for evaluation on an N-D grid.

### Aliases:

- [ `tf.compat.v1.meshgrid` ](/api_docs/python/tf/meshgrid)

- [ `tf.compat.v2.meshgrid` ](/api_docs/python/tf/meshgrid)


```python
tf.meshgrid(
  *args,
  **kwargs
)

```


Given N one-dimensional coordinate arrays  `*args` , returns a list  `outputs` of N-D coordinate arrays for evaluating expressions on an N-D grid.

#### Notes:

 `meshgrid`  supports cartesian ('xy') and matrix ('ij') indexing conventions.When the  `indexing`  argument is set to 'xy' (the default), the broadcastinginstructions for the first two dimensions are swapped.

#### Examples:

Calling  `X, Y = meshgrid(x, y)`  with the tensors


```python
x = [1, 2, 3]
y = [4, 5, 6]
X, Y = tf.meshgrid(x, y)
# X = [[1, 2, 3],
#   &nbsp;[1, 2, 3],
#   &nbsp;[1, 2, 3]]
# Y = [[4, 4, 4],
#   &nbsp;[5, 5, 5],
#   &nbsp;[6, 6, 6]]

```


#### Args:

- **`*args`** :  `Tensor` s with rank 1.

- **`**kwargs`** :   - indexing: Either 'xy' or 'ij' (optional, default: 'xy').<ul><li>name: A name for the operation (optional).

#### Returns:

- **`outputs`** : A list of N  `Tensor` s with rank N.

#### Raises:

- **`TypeError`** : When no keyword arguments (kwargs) are passed.

- **`ValueError`** : When indexing keyword argument is not one of  `xy`  or  `ij` .
