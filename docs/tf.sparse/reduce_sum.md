计算Sparsetensor维度上元素的总和。

```
 tf.sparse.reduce_sum(    sp_input,    axis=None,    keepdims=None,    output_is_sparse=False,    name=None) 
```

This Op takes a SparseTensor and is the sparse counterpart to[ `tf.reduce_sum()` ](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_sum).  In particular, this Op also returns a dense  `Tensor` if  `output_is_sparse`  is  `False` , or a  `SparseTensor`  if  `output_is_sparse` is  `True` .


**Note:**  if  `output_is_sparse`  is True, a gradient is not defined for thisfunction, so it can't be used in training models that need gradient descent.
Reduces  `sp_input`  along the dimensions given in  `axis` .  Unless  `keepdims`  istrue, the rank of the tensor is reduced by 1 for each entry in  `axis` . If `keepdims`  is true, the reduced dimensions are retained with length 1.

If  `axis`  has no entries, all dimensions are reduced, and a tensorwith a single element is returned.  Additionally, the axes can be negative,similar to the indexing rules in Python.

#### 例如：


```
 # 'x' represents [[1, ?, 1]
#                 [?, 1, ?]]
# where ? is implicitly-zero.
tf.sparse.reduce_sum(x) ==> 3
tf.sparse.reduce_sum(x, 0) ==> [1, 1, 1]
tf.sparse.reduce_sum(x, 1) ==> [2, 1]  # Can also use -1 as the axis.
tf.sparse.reduce_sum(x, 1, keepdims=True) ==> [[2], [1]]
tf.sparse.reduce_sum(x, [0, 1]) ==> 3
 
```

#### 参数：
- **`sp_input`** : The SparseTensor to reduce. Should have numeric type.
- **`axis`** : The dimensions to reduce; list or scalar. If  `None`  (thedefault), reduces all dimensions.
- **`keepdims`** : If true, retain reduced dimensions with length 1.
- **`output_is_sparse`** : If true, returns a  `SparseTensor`  instead of a dense `Tensor`  (the default).
- **`name`** : A name for the operation (optional).


#### 返回：
The reduced Tensor or the reduced SparseTensor if  `output_is_sparse`  isTrue.

