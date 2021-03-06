Concatenates a list of  `SparseTensor`  along the specified dimension. (deprecated arguments)

```
 tf.sparse.concat(    axis,    sp_inputs,    expand_nonconcat_dims=False,    name=None) 
```

### 在指南中使用：
- [Ragged tensors](https://tensorflow.google.cn/guide/ragged_tensor)

**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(concat_dim)` . They will be removed in a future version.Instructions for updating:concat_dim is deprecated, use axis instead
Concatenation is with respect to the dense versions of each sparse input.It is assumed that each inputs is a  `SparseTensor`  whose elements are orderedalong increasing dimension number.

If expand_nonconcat_dim is False, all inputs' shapes must match, except forthe concat dimension. If expand_nonconcat_dim is True, then inputs' shapes areallowed to vary among all inputs.

The  `indices` ,  `values` , and  `shapes`  lists must have the same length.

If expand_nonconcat_dim is False, then the output shape is identical to theinputs', except along the concat dimension, where it is the sum of the inputs'sizes along that dimension.

If expand_nonconcat_dim is True, then the output shape along the non-concatdimensions will be expand to be the largest among all inputs, and it is thesum of the inputs sizes along the concat dimension.

The output elements will be resorted to preserve the sort order alongincreasing dimension number.

This op runs in  `O(M log M)`  time, where  `M`  is the total number of non-emptyvalues across all inputs. This is due to the need for an internal sort inorder to concatenate efficiently across an arbitrary dimension.

For example, if  `axis = 1`  and the inputs are

```
 sp_inputs[0]: shape = [2, 3]
[0, 2]: "a"
[1, 0]: "b"
[1, 1]: "c"

sp_inputs[1]: shape = [2, 4]
[0, 1]: "d"
[0, 2]: "e"
 
```

然后输出将是

```
 shape = [2, 7]
[0, 2]: "a"
[0, 4]: "d"
[0, 5]: "e"
[1, 0]: "b"
[1, 1]: "c"
 
```

从图形上看，这相当于

```
 [    a] concat [  d e  ] = [    a   d e  ]
[b c  ]        [       ]   [b c          ]
 
```

Another example, if 'axis = 1' and the inputs are

```
 sp_inputs[0]: shape = [3, 3]
[0, 2]: "a"
[1, 0]: "b"
[2, 1]: "c"

sp_inputs[1]: shape = [2, 4]
[0, 1]: "d"
[0, 2]: "e"
 
```

if expand_nonconcat_dim = False, this will result in an error. But ifexpand_nonconcat_dim = True, this will result in:

```
 shape = [3, 7]
[0, 2]: "a"
[0, 4]: "d"
[0, 5]: "e"
[1, 0]: "b"
[2, 1]: "c"
 
```

从图形上看，这相当于

```
 [    a] concat [  d e  ] = [    a   d e  ]
[b    ]        [       ]   [b            ]
[  c  ]                    [  c          ]
 
```

#### 参数：
- **`axis`** : Dimension to concatenate along. Must be in range [-rank, rank),where rank is the number of dimensions in each input  `SparseTensor` .
- **`sp_inputs`** : List of  `SparseTensor`  to concatenate.
- **`name`** : A name prefix for the returned tensors (optional).
- **`expand_nonconcat_dim`** : Whether to allow the expansion in the non-concatdimensions. Defaulted to False.
- **`concat_dim`** : The old (deprecated) name for axis.
- **`expand_nonconcat_dims`** : alias for expand_nonconcat_dim


#### 返回：
A  `SparseTensor`  with the concatenated output.

#### 加薪：
- **`TypeError`** : If  `sp_inputs`  is not a list of  `SparseTensor` .
