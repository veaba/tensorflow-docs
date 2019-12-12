Split a  `SparseTensor`  into  `num_split`  tensors along  `axis` .

```
 tf.sparse.split(
    sp_input=None,
    num_split=None,
    axis=None,
    name=None
)
 
```

If the  `sp_input.dense_shape[axis]`  is not an integer multiple of  `num_split` each slice starting from 0: `shape[axis] % num_split`  gets extra onedimension. For example, if  `axis = 1`  and  `num_split = 2`  and theinput is:

```
 input_tensor = shape = [2, 7]
[    a   d e  ]
[b c          ]
 
```

Graphically the output tensors are:

```
 output_tensor[0] =
[    a ]
[b c   ]

output_tensor[1] =
[ d e  ]
[      ]
 
```

#### Args:
- **`sp_input`** : The  `SparseTensor`  to split.
- **`num_split`** : A Python integer. The number of ways to split.
- **`axis`** : A 0-D  `int32`   `Tensor` . The dimension along which to split.
- **`name`** : A name for the operation (optional).


#### Returns:
 `num_split`   `SparseTensor`  objects resulting from splitting  `value` .

#### Raises:
- **`TypeError`** : If  `sp_input`  is not a  `SparseTensor` .
