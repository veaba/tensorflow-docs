沿一维连接张量。

**别名** : [ `tf.compat.v1.concat` ](/api_docs/python/tf/concat), [ `tf.compat.v2.concat` ](/api_docs/python/tf/concat)

```
 tf.concat(
    values,
    axis,
    name='concat'
)
 
```

### 在指南中使用：
- [Better performance with the tf.data API](https://tensorflow.google.cn/guide/data_performance)
- [Ragged tensors](https://tensorflow.google.cn/guide/ragged_tensor)


### 在教程中使用：
- [Better performance with tf.function](https://tensorflow.google.cn/tutorials/customization/performance)
- [Unicode strings](https://tensorflow.google.cn/tutorials/load_data/unicode)
- [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)
- [Neural machine translation with attention](https://tensorflow.google.cn/tutorials/text/nmt_with_attention)
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
Concatenates the list of tensors  `values`  along dimension  `axis` .  If `values[i].shape = [D0, D1, ... Daxis(i), ...Dn]` , the concatenatedresult has shape

```
 [D0, D1, ... Raxis, ...Dn]
 
```

where

```
 Raxis = sum(Daxis(i))
 
```

That is, the data from the input tensors is joined along the  `axis` dimension.

The number of dimensions of the input tensors must match, and all dimensionsexcept  `axis`  must be equal.

#### 例如：


```
 t1 = [[1, 2, 3], [4, 5, 6]]
t2 = [[7, 8, 9], [10, 11, 12]]
tf.concat([t1, t2], 0)  # [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
tf.concat([t1, t2], 1)  # [[1, 2, 3, 7, 8, 9], [4, 5, 6, 10, 11, 12]]

# tensor t3 with shape [2, 3]
# tensor t4 with shape [2, 3]
tf.shape(tf.concat([t3, t4], 0))  # [4, 3]
tf.shape(tf.concat([t3, t4], 1))  # [2, 6]
 
```

As in Python, the  `axis`  could also be negative numbers. Negative  `axis` are interpreted as counting from the end of the rank, i.e.,  `axis + rank(values)` -th dimension.

#### 例如：


```
 t1 = [[[1, 2], [2, 3]], [[4, 4], [5, 3]]]
t2 = [[[7, 4], [8, 4]], [[2, 10], [15, 11]]]
tf.concat([t1, t2], -1)
 
```

会产生：

```
 [[[ 1,  2,  7,  4],
  [ 2,  3,  8,  4]],

 [[ 4,  4,  2, 10],
  [ 5,  3, 15, 11]]]
 
```


**Note:**  If you are concatenating along a new axis consider using stack.E.g.


```
 tf.concat([tf.expand_dims(t, axis) for t in tensors], axis)
 
```

可以重写为

```
 tf.stack(tensors, axis=axis)
 
```

#### 参数：
- **`values`** : A list of  `Tensor`  objects or a single  `Tensor` .
- **`axis`** : 0-D  `int32`   `Tensor` .  Dimension along which to concatenate. Must bein the range  `[-rank(values), rank(values))` . As in Python, indexing foraxis is 0-based. Positive axis in the rage of  `[0, rank(values))`  refersto  `axis` -th dimension. And negative axis refers to  `axis +rank(values)` -th dimension.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  resulting from concatenation of the input tensors.

