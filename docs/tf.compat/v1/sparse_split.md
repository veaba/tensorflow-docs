Split a `SparseTensor` into `num_split` tensors along `axis`. (deprecated arguments)
### Aliases:
- `tf.compat.v1.sparse.split`

```
 tf.compat.v1.sparse_split(
    keyword_required=KeywordRequired(),
    sp_input=None,
    num_split=None,
    axis=None,
    name=None,
    split_dim=None
)
```
If the `sp_input.dense_shape[axis]` is not an integer multiple of `num_split` each slice starting from 0:`shape[axis] % num_split` gets extra one dimension. For example, if `axis = 1` and `num_split` = 2 and the input is:

```
 input_tensor = shape = [2, 7]
[    a   d e  ]
[b c          ]
```
Graphically the output tensors are:

```
 output_tensor[0] =
[    a   ]
[b c     ]

output_tensor[1] =
[ d e  ]
[      ]
```
#### Args:
- `keyword_required`: Python 2 standin for * (temporary for argument reorder)
- `sp_input`: The `SparseTensor` to split.
- `num_split`: A Python integer. The number of ways to split.
- `axis`: A 0-D `int32` `Tensor`. The dimension along which to split.
- `name`: A `name` for the operation (optional).
- `split_dim`: Deprecated old name for axis.
#### Returns:
`num_split` `SparseTensor` objects resulting from splitting `value`.
#### Raises:
- `TypeError`: If `sp_input` is not a `SparseTensor`.
- `ValueError`: If the deprecated `split_dim` and `axis` are both non None.
