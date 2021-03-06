Resets the shape of a  `SparseTensor`  with indices and values unchanged.

**别名** : [ `tf.compat.v1.sparse.reset_shape` ](/api_docs/python/tf/sparse/reset_shape), [ `tf.compat.v1.sparse_reset_shape` ](/api_docs/python/tf/sparse/reset_shape), [ `tf.compat.v2.sparse.reset_shape` ](/api_docs/python/tf/sparse/reset_shape)

```
 tf.sparse.reset_shape(
    sp_input,
    new_shape=None
)
 
```

If  `new_shape`  is None, returns a copy of  `sp_input`  with its shape resetto the tight bounding box of  `sp_input` . This will be a shape consisting ofall zeros if sp_input has no values.

If  `new_shape`  is provided, then it must be larger or equal in all dimensionscompared to the shape of  `sp_input` . When this condition is met, the returnedSparseTensor will have its shape reset to  `new_shape`  and its indices andvalues unchanged from that of  `sp_input.` 

#### 例如：
Consider a  `sp_input`  with shape [2, 3, 5]:

- It is an error to set  `new_shape`  as [3, 7] since this represents arank-2 tensor while  `sp_input`  is rank-3. This is either a ValueErrorduring graph construction (if both shapes are known) or an OpError duringrun time.


- Setting  `new_shape`  as [2, 3, 6] will be fine as this shape is larger orequal in every dimension compared to the original shape [2, 3, 5].


- On the other hand, setting new_shape as [2, 3, 4] is also an error: Thethird dimension is smaller than the original shape [2, 3, 5](/api_docs/python/tf/sparse/and%20an%0A%60InvalidArgumentError%60%20will%20be%20raised).


- If  `new_shape`  is None, the returned SparseTensor will have a shape[2, 3, 4], which is the tight bounding box of  `sp_input` .


#### 参数：
- **`sp_input`** : The input  `SparseTensor` .
- **`new_shape`** : None or a vector representing the new shape for the returned `SparseTensor` .


#### 返回：
A  `SparseTensor`  indices and values unchanged from  `input_sp` . Its shape is   `new_shape`  if that is set. Otherwise it is the tight bounding box of    `input_sp` 

#### 加薪：
- **`TypeError`** : If  `sp_input`  is not a  `SparseTensor` .
- **`ValueError`** : If  `new_shape`  represents a tensor with a different rank fromthat of  `sp_input`  (if shapes are known when graph is constructed).
- **`ValueError`** :  If  `new_shape`  is determined during graph build to havedimension sizes that are too small.
- **`OpError`** :   - If  `new_shape`  has dimension sizes that are too small.
    - If shapes are not known during graph construction time, and during runtime it is found out that the ranks do not match.
