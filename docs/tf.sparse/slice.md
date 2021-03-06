Slice a  `SparseTensor`  based on the  `start`  and `size.

**别名** : [ `tf.compat.v1.sparse.slice` ](/api_docs/python/tf/sparse/slice), [ `tf.compat.v1.sparse_slice` ](/api_docs/python/tf/sparse/slice), [ `tf.compat.v2.sparse.slice` ](/api_docs/python/tf/sparse/slice)

```
 tf.sparse.slice(
    sp_input,
    start,
    size,
    name=None
)
 
```

For example, if the input is

```
 input_tensor = shape = [2, 7]
[    a   d e  ]
[b c          ]
 
```

从图形上看，输出张量为：

```
 sparse.slice([0, 0], [2, 4]) = shape = [2, 4]
[    a  ]
[b c    ]

sparse.slice([0, 4], [2, 3]) = shape = [2, 3]
[ d e  ]
[      ]
 
```

#### 参数：
- **`sp_input`** : The  `SparseTensor`  to split.
- **`start`** : 1-D. tensor represents the start of the slice.
- **`size`** : 1-D. tensor represents the size of the slice.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `SparseTensor`  objects resulting from splicing.

#### 加薪：
- **`TypeError`** : If  `sp_input`  is not a  `SparseTensor` .
