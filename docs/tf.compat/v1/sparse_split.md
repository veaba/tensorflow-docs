Split a  `SparseTensor`  into  `num_split`  tensors along  `axis` . (deprecated arguments)

```
 tf.compat.v1.sparse_split(    keyword_required=KeywordRequired(),    sp_input=None,    num_split=None,    axis=None,    name=None,    split_dim=None) 
```


**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(split_dim)` . They will be removed in a future version.Instructions for updating:split_dim is deprecated, use axis instead
If the  `sp_input.dense_shape[axis]`  is not an integer multiple of  `num_split` each slice starting from 0: `shape[axis] % num_split`  gets extra onedimension. For example, if  `axis = 1`  and  `num_split = 2`  and theinput is:

```
 input_tensor = shape = [2, 7]
[    a   d e  ]
[b c          ]
 
```

从图形上看，输出张量为：

```
 output_tensor[0] =
[    a   ]
[b c     ]

output_tensor[1] =
[ d e  ]
[      ]
 
```

#### 参数：
- **`keyword_required`** : Python 2 standin for * (temporary for argument reorder)
- **`sp_input`** : The  `SparseTensor`  to split.
- **`num_split`** : A Python integer. The number of ways to split.
- **`axis`** : A 0-D  `int32`   `Tensor` . The dimension along which to split.
- **`name`** : A name for the operation (optional).
- **`split_dim`** : Deprecated old name for axis.


#### 返回：
 `num_split`   `SparseTensor`  objects resulting from splitting  `value` .

#### 加薪：
- **`TypeError`** : If  `sp_input`  is not a  `SparseTensor` .
- **`ValueError`** : If the deprecated  `split_dim`  and  `axis`  are both non None.
