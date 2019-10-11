
A generalized contraction between tensors of arbitrary dimension.
### Aliases:
- `tf.compat.v1.einsum`
- `tf.compat.v1.linalg.einsum`
- `tf.compat.v2.einsum`
- `tf.compat.v2.linalg.einsum`
- `tf.linalg.einsum`

```
 tf.einsum(
    equation,
    *inputs,
    **kwargs
)
```
### Used in the guide:
- ``R``e``c``u``r``r``e``n``t`` ``N``e``u``r``a``l`` ``N``e``t``w``o``r``k``s`` ``(``R``N``N``)`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``N``e``u``r``a``l`` ``s``t``y``l``e`` ``t``r``a``n``s``f``e``r``

This function returns a tensor whose elements are defined by equation, which is written in a shorthand form inspired by the Einstein summation convention. As an example, consider multiplying two matrices A and B to form a matrix C. The elements of C are given by:

```
   C[i,k] = sum_j A[i,j] * B[j,k]
```

The corresponding equation is:

```
   ij,jk->ik
```

In general, the equation is obtained from the more familiar element-wise equation by 1. removing variable names, brackets, and commas, 2. replacing "*" with ",", 3. dropping summation signs, and 4. moving the output to the right, and replacing "=" with "->".

Many common operations can be expressed in this way. For example:

```
 # Matrix multiplication
>>> einsum('ij,jk->ik', m0, m1)  # output[i,k] = sum_j m0[i,j] * m1[j, k]

# Dot product
>>> einsum('i,i->', u, v)  # output = sum_i u[i]*v[i]

# Outer product
>>> einsum('i,j->ij', u, v)  # output[i,j] = u[i]*v[j]

# Transpose
>>> einsum('ij->ji', m)  # output[j,i] = m[i,j]

# Trace
>>> einsum('ii', m)  # output[j,i] = trace(m) = sum_i m[i, i]

# Batch matrix multiplication
>>> einsum('aij,ajk->aik', s, t)  # out[a,i,k] = sum_j s[a,i,j] * t[a, j, k]
```

To enable and control broadcasting, use an ellipsis. For example, to do batch matrix multiplication, you could use:

```
 einsum('...ij,...jk->...ik', u, v)
```

This function behaves like numpy.einsum, but does not support:
- Subscripts where an axis appears more than once for a single input (e.g. `ijj,k->ik`) unless it is a trace (e.g. `ijji`).
#### Args:
- `equation`: a `str` describing the contraction, in the same format as `numpy.einsum`.
#### Returns:

The contracted Tensor, with shape determined by equation.
#### Raises:
- `ValueError`: If
the format of `equation` is incorrect,
the number of inputs implied by `equation` does not match len(inputs),
an axis appears in the output subscripts but not in any of the inputs,
the number of dimensions of an input differs from the number of indices in its subscript, or
the input shapes are inconsistent along a particular axis.
- the format of `equation` is incorrect,
- the number of inputs implied by `equation` does not match len(inputs),
- an axis appears in the output subscripts but not in any of the inputs,
- the number of dimensions of an input differs from the number of indices in its subscript, or
- the input shapes are inconsistent along a particular axis.
