![](https://tensorflow.google.cn/images/tf_logo_32px.png)
Pads a tensor.

### Aliases:

- [ `tf.compat.v2.pad` ](/api_docs/python/tf/pad)


```python
tf.pad(
  tensor,
  paddings,
  mode='CONSTANT',
  constant_values=0,
  name=None
)

```


This operation pads a  `tensor`  according to the  `paddings`  you specify. `paddings`  is an integer tensor with shape  `[n, 2]` , where n is the rank of `tensor` . For each dimension D of  `input` ,  `paddings[D, 0]`  indicates howmany values to add before the contents of  `tensor`  in that dimension, and `paddings[D, 1]`  indicates how many values to add after the contents of `tensor`  in that dimension. If  `mode`  is "REFLECT" then both  `paddings[D, 0]` and  `paddings[D, 1]`  must be no greater than  `tensor.dim_size(D) - 1` . If `mode`  is "SYMMETRIC" then both  `paddings[D, 0]`  and  `paddings[D, 1]`  must beno greater than  `tensor.dim_size(D)` .

The padded size of each dimension D of the output is:

 `paddings[D, 0] + tensor.dim_size(D) + paddings[D, 1]` 

#### For example:


```python
t = tf.constant([[1, 2, 3], [4, 5, 6]])
paddings = tf.constant([[1, 1,], [2, 2]])
# 'constant_values' is 0.
# rank of 't' is 2.
tf.pad(t, paddings, "CONSTANT") &nbsp;# [[0, 0, 0, 0, 0, 0, 0],
                &nbsp;# &nbsp;[0, 0, 1, 2, 3, 0, 0],
                &nbsp;# &nbsp;[0, 0, 4, 5, 6, 0, 0],
                &nbsp;# &nbsp;[0, 0, 0, 0, 0, 0, 0]]

tf.pad(t, paddings, "REFLECT") &nbsp;# [[6, 5, 4, 5, 6, 5, 4],
                # &nbsp;[3, 2, 1, 2, 3, 2, 1],
                # &nbsp;[6, 5, 4, 5, 6, 5, 4],
                # &nbsp;[3, 2, 1, 2, 3, 2, 1]]

tf.pad(t, paddings, "SYMMETRIC") &nbsp;# [[2, 1, 1, 2, 3, 3, 2],
                &nbsp; # &nbsp;[2, 1, 1, 2, 3, 3, 2],
                &nbsp; # &nbsp;[5, 4, 4, 5, 6, 6, 5],
                &nbsp; # &nbsp;[5, 4, 4, 5, 6, 6, 5]]

```


#### Args:

- **`tensor`** : A  `Tensor` .

- **`paddings`** : A  `Tensor`  of type  `int32` .

- **`mode`** : One of "CONSTANT", "REFLECT", or "SYMMETRIC" (case-insensitive)

- **`constant_values`** : In "CONSTANT" mode, the scalar pad value to use. Must besame type as  `tensor` .

- **`name`** : A name for the operation (optional).

#### Returns:

A  `Tensor` . Has the same type as  `tensor` .

#### Raises:

- **`ValueError`** : When mode is not one of "CONSTANT", "REFLECT", or "SYMMETRIC".
