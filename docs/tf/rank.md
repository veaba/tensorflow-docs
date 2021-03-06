返回张量的秩。

**别名** : [ `tf.compat.v1.rank` ](/api_docs/python/tf/rank), [ `tf.compat.v2.rank` ](/api_docs/python/tf/rank)

```
 tf.rank(
    input,
    name=None
)
 
```

Returns a 0-D  `int32`   `Tensor`  representing the rank of  `input` .

#### 例如：


```
 # shape of tensor 't' is [2, 2, 3]
t = tf.constant([[[1, 1, 1], [2, 2, 2]], [[3, 3, 3], [4, 4, 4]]])
tf.rank(t)  # 3
 
```

**Note** : The rank of a tensor is not the same as the rank of a matrix. Therank of a tensor is the number of indices required to uniquely select eachelement of the tensor. Rank is also known as "order", "degree", or "ndims."

#### 参数：
- **`input`** : A  `Tensor`  or  `SparseTensor` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `int32` .

#### numpy兼容性
等同于np.ndim

