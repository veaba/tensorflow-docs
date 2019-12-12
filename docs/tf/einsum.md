A generalized contraction between tensors of arbitrary dimension.

**Aliases** : [ `tf.compat.v1.einsum` ](/api_docs/python/tf/einsum), [ `tf.compat.v1.linalg.einsum` ](/api_docs/python/tf/einsum), [ `tf.compat.v2.einsum` ](/api_docs/python/tf/einsum), [ `tf.compat.v2.linalg.einsum` ](/api_docs/python/tf/einsum), [ `tf.linalg.einsum` ](/api_docs/python/tf/einsum)

```
 tf.einsum(
    equation,
    *inputs,
    **kwargs
)
 
```

### Used in the guide:
- [Recurrent Neural Networks (RNN) with Keras](https://tensorflow.google.cn/guide/keras/rnn)


### Used in the tutorials:
- [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)
This function returns a tensor whose elements are defined by  `equation` ,which is written in a shorthand form inspired by the Einstein summationconvention.  As an example, consider multiplying two matricesA and B to form a matrix C.  The elements of C are given by:

```
   C[i,k] = sum_j A[i,j] * B[j,k]
 
```

The corresponding  `equation`  is:

```
   ij,jk->ik
 
```

In general, the  `equation`  is obtained from the more familiar element-wiseequation by  1. removing variable names, brackets, and commas,  2. replacing "*" with ",",  3. dropping summation signs, and  4. moving the output to the right, and replacing "=" with "->".

Many common operations can be expressed in this way.  For example:

```
 # Matrix multiplication
>>> einsum('ij,jk->ik', m0, m1)  # output[i,k] = sum_j m0[i,j] * m1[j, k]

 
```

# Dot product

> <blockquote>einsum('i,i->', u, v)  # output = sum_i u[i]*v[i]

</blockquote>


# Outer product

> <blockquote>einsum('i,j->ij', u, v)  # output[i,j] = u[i]*v[j]

</blockquote>


# Transpose

> <blockquote>einsum('ij->ji', m)  # output[j,i] = m[i,j]

</blockquote>


# Trace

> <blockquote>einsum('ii', m)  # output[j,i] = trace(m) = sum_i m[i, i]

</blockquote>


# Batch matrix multiplication

> <blockquote>einsum('aij,ajk->aik', s, t)  # out[a,i,k] = sum_j s[a,i,j] * t[a, j, k]

</blockquote>


```
 
To>
 einsum(&amp;#39;...ij,...jk-&amp;gt;...ik&amp;#39;, u, v) 

```

This function behaves like  `numpy.einsum` , but does not support:

- Subscripts where an axis appears more than once for a single input(e.g.  `ijj,k->ik` ) unless it is a trace (e.g.  `ijji` ).


#### Args:
- **`equation`** : a  `str`  describing the contraction, in the same format as `numpy.einsum` .
- **`*inputs`** : the inputs to contract (each one a  `Tensor` ), whose shapes shouldbe consistent with  `equation` .
- **`name`** : A name for the operation (optional).


#### Returns:
The contracted  `Tensor` , with shape determined by  `equation` .

#### Raises:
- **`ValueError`** : If
    - the format of  `equation`  is incorrect,
    - the number of inputs implied by  `equation`  does not match  `len(inputs)` ,
    - an axis appears in the output subscripts but not in any of the inputs,
    - the number of dimensions of an input differs from the number ofindices in its subscript, or
    - the input shapes are inconsistent along a particular axis.
