Retains specified non-empty values within a  `SparseTensor` .

**别名** : [ `tf.compat.v1.sparse.retain` ](/api_docs/python/tf/sparse/retain), [ `tf.compat.v1.sparse_retain` ](/api_docs/python/tf/sparse/retain), [ `tf.compat.v2.sparse.retain` ](/api_docs/python/tf/sparse/retain)

```
 tf.sparse.retain(
    sp_input,
    to_retain
)
 
```

For example, if  `sp_input`  has shape  `[4, 5]`  and 4 non-empty string values:

```
 [0, 1]: a
[0, 3]: b
[2, 0]: c
[3, 1]: d
 
```

and  `to_retain = [True, False, False, True]` , then the output willbe a  `SparseTensor`  of shape  `[4, 5]`  with 2 non-empty values:

```
 [0, 1]: a
[3, 1]: d
 
```

#### 参数：
- **`sp_input`** : The input  `SparseTensor`  with  `N`  non-empty elements.
- **`to_retain`** : A bool vector of length  `N`  with  `M`  true values.


#### 返回：
A  `SparseTensor`  with the same shape as the input and  `M`  non-emptyelements corresponding to the true positions in  `to_retain` .

#### 加薪：
- **`TypeError`** : If  `sp_input`  is not a  `SparseTensor` .
