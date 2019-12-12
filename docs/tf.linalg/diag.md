Returns a batched diagonal tensor with given batched diagonal values.

**Aliases** : [ `tf.compat.v1.linalg.diag` ](/api_docs/python/tf/linalg/diag), [ `tf.compat.v1.matrix_diag` ](/api_docs/python/tf/linalg/diag), [ `tf.compat.v2.linalg.diag` ](/api_docs/python/tf/linalg/diag)

```
 tf.linalg.diag(
    diagonal,
    name='diag',
    k=0,
    num_rows=-1,
    num_cols=-1,
    padding_value=0
)
 
```

Returns a tensor with the contents in  `diagonal`  as  `k[0]` -th to  `k[1]` -thdiagonals of a matrix, with everything else padded with  `padding` .  `num_rows` and  `num_cols`  specify the dimension of the innermost matrix of the output. Ifboth are not specified, the op assumes the innermost matrix is square andinfers its size from  `k`  and the innermost dimension of  `diagonal` . If onlyone of them is specified, the op assumes the unspecified value is the smallestpossible based on other criteria.

Let  `diagonal`  have  `r`  dimensions  `[I, J, ..., L, M, N]` . The output tensorhas rank  `r+1`  with shape  `[I, J, ..., L, M, num_rows, num_cols]`  when onlyone diagonal is given ( `k`  is an integer or  `k[0] == k[1]` ). Otherwise, it hasrank  `r`  with shape  `[I, J, ..., L, num_rows, num_cols]` .

The second innermost dimension of  `diagonal`  has double meaning. When  `k`  isscalar or  `k[0] == k[1]` ,  `M`  is part of the batch size [I, J, ..., M], andthe output tensor is:

```
 output[i, j, ..., l, m, n]
  = diagonal[i, j, ..., l, n-max(d_upper, 0)] ; if n - m == d_upper
    output[i, j, ..., l, m, n]                ; otherwise
 
```

Otherwise,  `M`  is treated as the number of diagonals for the matrix in thesame batch ( `M = k[1]-k[0]+1` ), and the output tensor is:

```
 output[i, j, ..., l, m, n]
  = diagonal[i, j, ..., l, k[1]-d, n-max(d, 0)] ; if d_lower <= d <= d_upper
    input[i, j, ..., l, m, n]                   ; otherwise
 
```

where  `d = n - m` 

#### For example:


```
 # The main diagonal.
diagonal = np.array([[1, 2, 3, 4],            # Input shape: (2, 4)
                     [5, 6, 7, 8]])
tf.matrix_diag(diagonal) ==> [[[1, 0, 0, 0],  # Output shape: (2, 4, 4)
                               [0, 2, 0, 0],
                               [0, 0, 3, 0],
                               [0, 0, 0, 4]],
                              [[5, 0, 0, 0],
                               [0, 6, 0, 0],
                               [0, 0, 7, 0],
                               [0, 0, 0, 8]]]

# A superdiagonal (per batch).
diagonal = np.array([[1, 2, 3],  # Input shape: (2, 3)
                     [4, 5, 6]])
tf.matrix_diag(diagonal, k = 1)
  ==> [[[0, 1, 0, 0],  # Output shape: (2, 4, 4)
        [0, 0, 2, 0],
        [0, 0, 0, 3],
        [0, 0, 0, 0]],
       [[0, 4, 0, 0],
        [0, 0, 5, 0],
        [0, 0, 0, 6],
        [0, 0, 0, 0]]]

# A band of diagonals.
diagonals = np.array([[[1, 2, 3],  # Input shape: (2, 2, 3)
                       [4, 5, 0]],
                      [[6, 7, 9],
                       [9, 1, 0]]])
tf.matrix_diag(diagonals, k = (-1, 0))
  ==> [[[1, 0, 0],  # Output shape: (2, 3, 3)
        [4, 2, 0],
        [0, 5, 3]],
       [[6, 0, 0],
        [9, 7, 0],
        [0, 1, 9]]]

# Rectangular matrix.
diagonal = np.array([1, 2])  # Input shape: (2)
tf.matrix_diag(diagonal, k = -1, num_rows = 3, num_cols = 4)
  ==> [[0, 0, 0, 0],  # Output shape: (3, 4)
       [1, 0, 0, 0],
       [0, 2, 0, 0]]

# Rectangular matrix with inferred num_cols and padding = 9.
tf.matrix_diag(diagonal, k = -1, num_rows = 3, padding = 9)
  ==> [[9, 9],  # Output shape: (3, 2)
       [1, 9],
       [9, 2]]
 
```

#### Args:
- **`diagonal`** : A  `Tensor`  with  `rank k >= 1` .
- **`name`** : A name for the operation (optional).
- **`k`** : Diagonal offset(s). Positive value means superdiagonal, 0 refers to themain diagonal, and negative value means subdiagonals.  `k`  can be a singleinteger (for a single diagonal) or a pair of integers specifying the lowand high ends of a matrix band.  `k[0]`  must not be larger than  `k[1]` .
- **`num_rows`** : The number of rows of the output matrix. If it is not provided,the op assumes the output matrix is a square matrix and infers the matrixsize from  `d_lower` ,  `d_upper` , and the innermost dimension of  `diagonal` .
- **`num_cols`** : The number of columns of the output matrix. If it is not provided,the op assumes the output matrix is a square matrix and infers the matrixsize from  `d_lower` ,  `d_upper` , and the innermost dimension of  `diagonal` .
- **`padding_value`** : The value to fill the area outside the specified diagonalband with. Default is 0.


#### Returns:
A Tensor. Has the same type as  `diagonal` .

